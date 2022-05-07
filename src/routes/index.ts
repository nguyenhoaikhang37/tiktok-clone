import { ReactElement } from 'react';
import { HeaderOnly } from '../components/layouts';
import { Following, Home, Upload } from '../pages';

type IRoute = {
    path: string;
    component: () => JSX.Element;
    layout?: ((children: any) => ReactElement) | null | undefined;
};

const publicRoutes: IRoute[] = [
    {
        path: '/',
        component: Home,
        layout: null,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes: any[] = [];

export { publicRoutes, privateRoutes };
