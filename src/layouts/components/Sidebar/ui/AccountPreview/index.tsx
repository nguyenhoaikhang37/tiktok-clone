import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import { Button } from '@/components/common';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7130600605160046619~c5_100x100.jpeg?x-expires=1660874400&x-signature=HbtlSEnATXVySAzH%2BmAJ2qXWx8I%3D'
                    alt=''
                />
                <Button className={cx('follow-btn')} btnType='primary'>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle as IconProp}
                    />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
