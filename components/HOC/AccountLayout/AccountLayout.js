import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useWindowSize from '@components/hooks/useWindowDimensions';
import Backdrop from '@components/UI/Backdrop/Backdrop';
import AppList from '@public/svg/app-list.svg';
import OrdersIcon from '@public/svg/orders.svg';
import AccountIcon from '@public/svg/account.svg';
import styles from './AccountLayout.module.scss';

const Account = (props) => {
  const router = useRouter();
  const size = useWindowSize();
  const [showSidebar, toggleSidebar] = useState(true);

  const [sidebarContent, setSidebarContent] = useState([
    {
      name: 'My Account',
      link: 'myaccount',
      classNames: [styles.sidebar__item],
      icon: <AccountIcon className={styles.sidebar__item__icon} />,
    },
    {
      name: 'My Orders',
      link: 'myorders',
      classNames: [styles.sidebar__item],
      icon: <OrdersIcon className={styles.sidebar__item__icon} />,
    },
  ]);

  const sidebarItemSelectHandler = (path) => {
    router.push({
      pathname: `/account/${path}`,
    });
  };

  useEffect(() => {
    // console.log(size);
    if (size.width < 760) {
      toggleSidebar(false);
    } else {
      toggleSidebar(true);
    }
  }, [size]);

  useEffect(() => {
    const current = router.pathname.split('/')[2];
    const updatedSidebarContent = [...sidebarContent];

    updatedSidebarContent.forEach((item) => {
      if (item.link === current) {
        item.classNames = [styles.sidebar__item, styles.sidebar__item_selected];
      }
    });

    setSidebarContent(updatedSidebarContent);
  }, [router.pathname]);

  const sidebarToggleHandler = () => {
    toggleSidebar(!showSidebar);
  };

  let attachedClasses = [styles.sidebar, styles.close];
  if (showSidebar) {
    attachedClasses = [styles.sidebar, styles.open];
  }

  return (
    <div className={styles.wrapper}>
      <div className={attachedClasses.join(' ')}>
        {sidebarContent.map((item, index) => (
          <div
            className={item.classNames.join(' ')}
            key={index}
            onClick={() => sidebarItemSelectHandler(item.link)}
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
      <div className={styles.iconContainer} onClick={sidebarToggleHandler}>
        <AppList className={styles.sidebarIcon} />
      </div>
      <div className={styles.main}>{props.children}</div>
      {size.width < 760 && (
        <Backdrop show={showSidebar} clicked={sidebarToggleHandler} />
      )}
    </div>
  );
};

export default Account;
