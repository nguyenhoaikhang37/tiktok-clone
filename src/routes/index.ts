import { ReactElement } from 'react';
import { HeaderOnly } from '../components/layouts';
import { Following, Home, Upload, Profile, NotFound } from '../pages';

type IRoute = {
    path: string;
    component: () => JSX.Element;
    layout?: ((children: any) => ReactElement) | null | undefined;
};

const publicRoutes: IRoute[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/@:nickname',
        component: Profile,
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
    {
        path: '*',
        component: NotFound,
    },
];

const privateRoutes: any[] = [];

export { publicRoutes, privateRoutes };
