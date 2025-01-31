import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router';
import './assets/css/app.css';
import { routeTree } from './routeTree.gen';
import { queryClient } from './main/queryClient';
import { getMongo } from './main/getMongo';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

// Import the generated route tree
const hashHistory = createHashHistory();

// Create a new router instance
const router = createRouter({ routeTree, history: hashHistory, trailingSlash: 'never', context: { queryClient, getMongo } });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// Render the app
const rootElement = document.getElementById('root')!;
console.log(`rootElement`, rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
