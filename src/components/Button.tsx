import { createElement } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { $className } from '../util/$className';
import { useWrapPrevent } from './useWrapPrevent';

export type IButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title' | 'disabled'> &
    IProps & {
        click: IEventAction;
        tag?: 'button' | 'input';
    };

export function Button({ flags, ...props }: IButtonProps) {
    useWhyDidYouUpdate('Button', props);

    const merged = { type: 'button' as const, tag: 'button' as const, ...props };
    const { click, disabled, title, tag, type, children, ...spread } = $className<IButtonProps>(merged, flags, 'flex');
    const onClick = useWrapPrevent(click);

    // return <button disabled={disabled} title={} onClick={onClick} {...spread} />;
    return createElement(['submit', 'reset'].includes(type ?? 'button') ? 'input' : tag as 'input' | 'button', {
        disabled,
        title: disabled ? '** This control is DISABLED. **' : title,
        onClick,
        ...spread
    }, ['submit', 'reset'].includes(type ?? 'button') ? undefined : children);
}
