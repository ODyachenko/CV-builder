import React, { FC } from 'react';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <section className={`${className ? className : ''} py-6 lg:py-12`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Layout;
