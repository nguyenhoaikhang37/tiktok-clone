import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faEarthAsia,
    faEllipsisV,
    faGear,
    faKeyboard,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '@/assets/images';
import { Button } from '@/components/common';
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/common/Icons';
import Image from '@/components/common/Image';
import MenuPopper from '../Popper/MenuPopper';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia as IconProp} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion as IconProp} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard as IconProp} />,
        title: 'Phím tắt trên bàn phím',
    },
];

export default function Header() {
    const currentUser = true;

    const USER_MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faUser as IconProp} />,
            title: 'Xem hồ sơ',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCircle as IconProp} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear as IconProp} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket as IconProp} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuItemChange = (menuItem: any) => {
        switch (menuItem.type) {
            case 'language':
                console.log('language', menuItem);
                break;

            default:
                console.log('default func');
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser && (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                placement='bottom'
                                content='Tải video lên'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content='Tin nhắn' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content='Hộp thư' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    )}

                    {!currentUser && (
                        <>
                            <Button
                                onClick={() => console.log('Log in click')}
                                btnType='text'
                            >
                                Tải lên
                            </Button>
                            <Button
                                onClick={() => alert('Log in click')}
                                btnType='primary'
                            >
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <div className={cx('more-btn-wrapper')}>
                        <MenuPopper
                            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
                            onMenuChange={handleMenuItemChange}
                        >
                            <>
                                {currentUser && (
                                    <Image
                                        src='https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png'
                                        alt='NHK'
                                        className='user-avatar'
                                    />
                                )}
                                {!currentUser && (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisV as IconProp} />
                                    </button>
                                )}
                            </>
                        </MenuPopper>
                    </div>
                </div>
            </div>
        </header>
    );
}
