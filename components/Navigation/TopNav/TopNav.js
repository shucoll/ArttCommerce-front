import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Searchbar from './Searchbar/Searchbar';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import AccountIcon from '@public/svg/user.svg';
import styles from './TopNav.module.scss';

const TopNav = (props) => {
  const router = useRouter();

  const [dropdown, toggleDropdown] = useState(false);

  const handleAccountClick = () => {
    toggleDropdown(!dropdown);
  };

  const handleDrawerItemClicked = (e, link) => {
    toggleDropdown(false);
    router.push(link);
  };

  const dropDownStyle = { display: dropdown ? 'block' : 'none' };

  const dropdownOptions = [
    {
      text: 'Login',
      link: '/login',
    },
    {
      text: 'Signup',
      link: '/signup',
    },
  ];

  return (
    <div className={styles.topNav}>
      <div className={styles.topNav__container}>
        <div className={styles.topNav__content}>
          <div style={{display: 'flex'}}>
            <Link href='/'>
              <div style={{ color: '#fff', cursor: 'pointer' }}>Logo</div>
            </Link>
            <Link href='/allartwork'>
              <div style={{ color: '#fff', cursor: 'pointer', marginLeft: '1.5rem' }}>All Art</div>
            </Link>
          </div>

          <Searchbar />

          <div className={styles.topNav__navItems}>
            <AccountIcon
              className={styles.topNav__accountIcon}
              onClick={handleAccountClick}
            />

            <ul className={styles.dropdown} style={dropDownStyle}>
              {dropdownOptions.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => handleDrawerItemClicked(e, item.link)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <DrawerToggle
              clicked={props.drawerToggleClicked}
              showSidebar={props.showSidebar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
