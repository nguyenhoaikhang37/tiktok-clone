import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout: any = MainLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) Layout = Fragment;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
