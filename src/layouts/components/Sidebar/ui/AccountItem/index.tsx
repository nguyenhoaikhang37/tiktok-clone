import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './AccountItem.module.scss';
import AccountPreview from '@/layouts/components/Sidebar/ui/AccountPreview';
import Popper from '@/layouts/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props: any) => {
        return (
            <div tabIndex='-1' {...props}>
                <Popper>
                    <AccountPreview />
                </Popper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7130600605160046619~c5_100x100.jpeg?x-expires=1660874400&x-signature=HbtlSEnATXVySAzH%2BmAJ2qXWx8I%3D'
                        alt=''
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle as IconProp}
                            />
                        </p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
