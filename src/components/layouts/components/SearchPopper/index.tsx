import classNames from 'classnames/bind';
import AccountItem from '../AccountItem';
import styles from './SearchPopper.module.scss';

const cx = classNames.bind(styles);

const SearchPopper = () => {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('search-label')}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
};

export default SearchPopper;
