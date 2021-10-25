// import Link from 'next/link';
import Cart from '@components/Cart/Cart';
import CloseIcon from '@public/svg/close-line.svg';
import Backdrop from '@components/UI/Backdrop/Backdrop';
import styles from './Sidebar.module.scss';

const Sidebar = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.open];
  }

  return (
    <>
      <div className={attachedClasses.join(' ')}>
        <div className={styles.top}>
          <div className={styles.top__close} onClick={props.closed}>
            <CloseIcon className={styles.top__closeIcon} />
            <span className={styles.top__close_text}>Close</span>
          </div>
        </div>
        <Cart />
      </div>
      <Backdrop show={props.open} clicked={props.closed} />
    </>
  );
};

export default Sidebar;
