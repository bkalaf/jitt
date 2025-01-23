import { cn } from '../util/$cn';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';

import { useCondition } from './useCondition';
import { useExecute } from './useExecute';
import { useCallback } from 'react';

export type IButtonProps = {
    click: () => void;
    disable?: boolean;
    flags?: IFlags;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    title?: string;
} & IProps;

export function Button({ flags, ...props }: IButtonProps) {
    useWhyDidYouUpdate('Button', props);
    const { interactions, ...props2 } = { type: 'button' as const, ...props };
    const { click, disable, ...spread } = cn<IButtonProps>(
        {
            ...props2,
            interactions: (props2.disable != null ?
                interactions?.includes('disable') ?
                    interactions
                :   [interactions, 'disable'].join(',')
            :   interactions) as Interactions
        },
        flags,
        'flex'
    )();
    const onClick = useCallback((ev: React.SyntheticEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        click();
    }, [click])

    return <button onClick={onClick} disabled={disable} {...spread} />;
}




