import { useState } from 'react';

import Button from '@components/UI/Button/Button';
import FooterList from './FooterList/FooterList';

import InstaIcon from '@public/svg/instagram.svg';
import FacebookIcon from '@public/svg/facebook.svg';
import TwitterIcon from '@public/svg/twitter.svg';

import styles from './Footer.module.scss';

const Footer = (props) => {
  const [email, setEmail] = useState('');

  const handleNewsLetterSignupClick = () => {
    console.log(email);
  }

  const list1 = {
    title: 'Top Catagories',
    items: [
      { name: 'Contemporary', link: 'link1' },
      { name: 'People', link: 'link2' },
      { name: 'Abstract', link: 'link3' },
      { name: 'Floral', link: 'link4' },
    ],
  };

  const list2 = {
    title: 'Company',
    items: [
      { name: 'About Us', link: 'link5' },
      { name: 'Terms and Conditions', link: 'link6' },
      { name: 'Privacy Policy', link: 'link7' },
      { name: 'Services', link: 'link8' },
    ],
  };

  const list3 = {
    title: 'Help',
    items: [
      { name: 'FAQs', link: 'link9' },
      { name: 'How it works?', link: 'link10' },
      { name: 'Delivery and Returns', link: 'link11' },
    ],
  };

  const list4 = {
    title: 'Contact',
    items: [
      { name: 'Email: contact@arttmart.com', link: 'link13' },
      { name: 'Phone: 234234535', link: 'link14' },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__listContainer}>
          <FooterList listItem={list1} />
          <FooterList listItem={list2} />
          <FooterList listItem={list3} />
          <FooterList listItem={list4} />
        </div>
        <div className={styles.footer__socialNewsContainer}>
          <div className={styles.footer__newsLetter}>
            <h2>News Letter</h2>
            <p>
              Receive our handpicked articles and art directly in your inbox
            </p>
            <input
              type='text'
              className={styles.footer__newsLetter__input}
              placeholder='Email'
              id='newsLetterInput'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button text='SIGNUP' onClick={handleNewsLetterSignupClick}/>
          </div>
          <div className={styles.footer__social}>
            <FacebookIcon className={styles.footer__social_icon} />
            <InstaIcon className={styles.footer__social_icon} />
            <TwitterIcon className={styles.footer__social_icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
