import styles from './Spinner.module.scss';

const Spinner = (props) => {
  let style;

  if (props.center)
    style = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };
  return (
    <div style={style}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
