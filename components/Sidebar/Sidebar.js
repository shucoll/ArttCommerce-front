// import Link from 'next/link';
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
        Cart sidebar for all cart items
        <CloseIcon className={styles.closeIcon} onClick={props.closed} />
      </div>
      <Backdrop show={props.open} clicked={props.closed} />
    </>
  );
};

export default Sidebar;
