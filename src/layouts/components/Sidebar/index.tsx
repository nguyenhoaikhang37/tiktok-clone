import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '@/layouts/components/Sidebar/ui/Menu';
import { routesConfig } from '@/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '@/components/common/Icons';

const cx = classNames.bind(styles);

export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='Dành cho bạn' to={routesConfig.home} icon={<HomeIcon />}
                          activeIcon={<HomeActiveIcon />} />
                <MenuItem title='Đang follow' to={routesConfig.following} icon={<UserGroupIcon />}
                          activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title='LIVE' to={routesConfig.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}
