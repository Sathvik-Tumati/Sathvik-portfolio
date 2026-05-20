import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import PageTransition from './PageTransition';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Cursor />
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: 64 }}>
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
