import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef((props, ref) => {
  const height = props.height ? props.height : '4rem';
  let style;
  if (props.fullWidth) {
    style = { ...style, width: '100%', display: 'block' };
  }

  let classNames = `${styles.btn}`;

  if (props.type) {
    switch (props.type) {
      case 'sec':
        classNames += ` ${styles.btn__sec}`;
        break;

      default:
    }
  }

  if (props.isAnchor)
    return (
      <a
        style={{ ...style, height: height }}
        className={styles.btn}
        ref={ref}
        href={props.href}
        onClick={props.onClick}
        {...props.anchorProps}
      >
        {props.text}
      </a>
    );

  return (
    <button
      style={{ ...style, height: height }}
      className={classNames}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
});

export default Button;
