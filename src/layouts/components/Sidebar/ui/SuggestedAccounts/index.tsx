import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from '@/layouts/components/Sidebar/ui/AccountItem';

const cx = classNames.bind(styles);

interface SuggestedAccountsProps {
    label: string;
}

function SuggestedAccounts({ label }: SuggestedAccountsProps) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>Xem tất cả</p>
        </div>
    );
}

export default SuggestedAccounts;