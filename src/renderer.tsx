import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router';
import './assets/css/app.css';
import { routeTree } from './routeTree.gen';
import { queryClient } from './main/queryClient';
import { getMongo } from './main/getMongo';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { camelCaseToProper, toProper } from './common/text/splitStringAt';

dayjs.extend(localizedFormat);

export function toEnumInfo(value: string) {
    return {
        value,
        label: toProper(value)
    };
}
Array.prototype.toEnumInfo = function (this: string[]) {
    return this.map(toEnumInfo).sort((a, b) => a.label.localeCompare(b.label));
}

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
