import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { cn } from '../util/$cn';
import { iconSizeClasses, IconSizeClasses } from '../util/iconSizeClasses';
import { Button, IButtonProps } from './Button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { $className } from '../util/$className';

export type IIconButtonProps = Omit<IButtonProps, 'children'> & {
    icon: IconDefinition;
    iconSize?: IconSizeClasses;
};

export function IconButton(props: IIconButtonProps) {
    useWhyDidYouUpdate('IconButton', props);
    const { icon, iconSize, ...remain } = { iconSize: 'small' as const, ...props };
    const spread = $className(remain);
    const { className } = $className(
        {},
        {
            [iconSizeClasses.tiny]: iconSize === 'tiny',
            [iconSizeClasses.small]: iconSize === 'small',
            [iconSizeClasses.medium]: iconSize === 'medium',
            [iconSizeClasses.large]: iconSize === 'large',
            [iconSizeClasses.huge]: iconSize === 'huge'
        },
        'block object-cover'
    );
    return (
        <Button {...spread}>
            <FontAwesomeIcon className={className} icon={icon} />
        </Button>
    );
}
