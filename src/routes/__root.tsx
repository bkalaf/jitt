import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Button } from '../components/Button';
import { useToggler } from '../hooks/useToggler';
import { Overlay } from '../components/Overlay';
import { QueryClientProvider } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IpcRendererEvent } from 'electron/renderer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useIPCEvent } from '../hooks/useIPCEvent';
import { IconButton } from '../components/IconButton';
import { faArrowRotateLeft, faBackward, faHome, faRepeat } from '@fortawesome/pro-solid-svg-icons';
import logo from './../assets/logos/resized-logo.png';

export const Route = createRootRouteWithContext<IRouterContext>()({
    component: function Inner() {
        const goto = Route.useNavigate();
        const { queryClient } = Route.useRouteContext();
        const [open, toggle] = useToggler(false);
        const navTo = useCallback(
            (ev: IpcRendererEvent, collection: string) => {
                console.log(`event`, ev);
                console.log(`collection`, collection);
                goto({ to: '/data/$collection', params: { collection } });
            },
            [goto]
        );
        useIPCEvent('hash-navigate', navTo);
        return (
            <QueryClientProvider client={queryClient}>
                <Overlay open={open} toggle={toggle}>
                    MY OVERLAY
                </Overlay>
                <div className='flex h-full w-full flex-col'>
                    <nav className='p-2 flex gap-2 flex-row h-min w-full bg-slate-700/90 text-white'>
                        <img title='Junk in the Trunk, Inc' src={logo} className='h-10 block object-scale-down' />
                        <IconButton
                            controlSize='medium'
                            color='blue'
                            interactions='hover,focus,disable'
                            click={() => () => {
                                goto({ to: '/' });
                            }}
                            icon={faHome}
                            title='Go to the home page.'
                        />
                        <IconButton
                            controlSize='medium'
                            color='blue'
                            interactions='hover,focus,disable'
                            click={() => () => {
                                goto({ to: '/' });
                            }}
                            icon={faArrowRotateLeft}
                            title='Go back one page.'
                        />
                        <hr aria-orientation='vertical' />
                        <hr aria-orientation='vertical' />
                        <Button
                            controlSize='medium'
                            color='blue'
                            interactions='hover,focus,disable'
                            click={() => () => {
                                goto({ to: '/' });
                            }}>
                            HOME
                        </Button>
                        <Button controlSize='small' color='sky' interactions='hover,focus,disable' click={() => toggle}>
                            MODAL
                        </Button>
                    </nav>
                    <Outlet />
                </div>
                <TanStackRouterDevtools />
                <ReactQueryDevtools initialIsOpen buttonPosition='bottom-right' />
            </QueryClientProvider>
        );
    }
});
