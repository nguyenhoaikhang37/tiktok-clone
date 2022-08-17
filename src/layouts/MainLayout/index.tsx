import { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

export function MainLayout({ children }: { children: ReactElement }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
