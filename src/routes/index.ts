import { routesConfig } from '@/config';
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
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
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
