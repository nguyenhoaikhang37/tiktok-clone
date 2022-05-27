import { ReactElement } from 'react';
import Header from './components/Header';

export function HeaderOnly({ children }: { children: ReactElement }) {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    );
}
