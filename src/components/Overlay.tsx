import { createPortal } from 'react-dom';
import { IconButton } from './IconButton';
import { faWindowClose } from '@fortawesome/pro-solid-svg-icons';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { cn } from '../util/$cn';
import { $className } from '../util/$className';

export type IOverlayProps = {
    toggle: () => void;
    open: boolean;
} & IProps;
const el = document.getElementById('modal-root');

export function Overlay(props: IOverlayProps) {
    useWhyDidYouUpdate('Overlay', props);
    const { toggle, open, children, ...remain } = props;
    const spread = $className(remain, { 'hidden pointer-events-none': !open, 'pointer-events-auto': open }, 'flex p-6 w-full h-full');
    return createPortal(
        <div {...spread}>
            <div className='flex relative w-full h-full bg-black/70 border-white/70 rounded-lg text-white items-center justify-center'>
                <IconButton className='absolute top-2 right-2' color='white' interactions='disable,focus,hover' iconSize='large' icon={faWindowClose} click={() => toggle} flags={{ 'hover:bg-cyan-700': false }} />
                {children}
            </div>
        </div>,
        el!
    );
}
