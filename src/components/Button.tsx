import { createElement } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { $className } from '../util/$className';

export type IButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title' | 'disabled'> &
    IProps & {
        click: (ev: React.SyntheticEvent) => void;
        tag?: 'button' | 'input';
    };

export function Button({ flags, ...props }: IButtonProps) {
    useWhyDidYouUpdate('Button', props);

    const merged = { type: 'button' as const, tag: 'button' as const, ...props };
    const { click, disabled, title, tag, type, children, ...spread } = $className<IButtonProps>(merged, flags, 'flex');
    const onClick = click

    // return <button disabled={disabled} title={} onClick={onClick} {...spread} />;
    return createElement(tag ? tag : ['submit', 'reset'].includes(type ?? 'button') ? 'input' : 'button' as const, {
        disabled,
        title: disabled ? '** This control is DISABLED. **' : title,
        onClick,
        ...spread
    }, tag === 'input' ? undefined : children);
}
