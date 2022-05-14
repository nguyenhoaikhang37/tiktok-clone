import Image from '@/components/common/Image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <Image
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6e5a87dd45745546ec30b3abf300ec75~c5_100x100.jpeg?x-expires=1652245200&x-signature=p2DzD5pyThJVj2CUJ3yb2WHffGw%3D'
                alt='avatar'
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hassiii</span>
                    <FontAwesomeIcon
                        icon={faCheckCircle as IconProp}
                        className={cx('check-icon')}
                    />
                </h4>
                <p className={cx('username')}>hoaa.hassiii</p>
            </div>
        </div>
    );
};

export default AccountItem;
