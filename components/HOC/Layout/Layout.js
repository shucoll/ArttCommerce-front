import { useState } from 'react';
import TopNav from '@components/Navigation/TopNav/TopNav';
import Sidebar from '@components/Sidebar/Sidebar';
import Footer from '@components/Footer/Footer';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const [showSidebar, toggleSidebar] = useState(false);

  const sidebarCloseHandler = () => {
    toggleSidebar(false);
  };

  const sidebarToggleHandler = () => {
    toggleSidebar(!showSidebar);
  };
  return (
    <div style={{ position: 'relative' }} className={styles.layout}>
      <Sidebar open={showSidebar} closed={sidebarCloseHandler} />
      <TopNav
        drawerToggleClicked={sidebarToggleHandler}
        showSidebar={showSidebar}
      />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
