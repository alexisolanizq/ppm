import Linear from '@Component/common/loader/Linear';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
  <div>
    <Header />
    <main>
      <div className="main__content">
        <Suspense fallback={<Linear />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  </div>
);

export default Layout;
