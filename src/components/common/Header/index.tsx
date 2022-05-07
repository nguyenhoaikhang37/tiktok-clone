import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>Header</div>
        </header>
    );
}
