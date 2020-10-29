import React, { ReactNode } from 'react';
import classNames from 'classnames';
import PageSchema from '../PageSchema';
import './styles.scss';

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <>
      <a href="#main" className="bp-skipLink">
        <span>Skip to content</span>
      </a>
      <PageSchema type={'WebSite'} />
      <main
        id="main"
        aria-label="Main Content"
        className={classNames('bp-page', className === 'home' ? 'p0' : null)}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
