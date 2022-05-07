import { ReactElement } from 'react';
import { Header } from '../common';

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
