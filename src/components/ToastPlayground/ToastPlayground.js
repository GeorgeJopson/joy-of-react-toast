import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [
    currentVariant,
    setCurrentVariant
  ] = React.useState('notice');
  const [message, setMessage] = React.useState('');

  const {addToast, dismissToasts} = React.use(ToastContext);

  React.useEffect(() => {
    function handleKeydown(event){
      if( event.key === 'Escape' ){
        dismissToasts();
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return ()=>{
      window.removeEventListener('keydown', handleKeydown);
    }
  },[dismissToasts])

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf/>

        <form className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          addToast({
            message:message,
            variant: currentVariant}
          );
          setMessage('');
          setCurrentVariant(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={event => {
                  setMessage(
                      event.target.value
                  );
                }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option)=> {
              const id = `variant-notice-${option}`
              return (
                <label htmlFor={id} key={id}>
                  <input
                      id={id}
                      type="radio"
                      name="current-variant"
                      value={option}

                      checked={option === currentVariant}
                      onChange={event => {
                        setCurrentVariant(event.target.value);
                      }}
                  />
                  {option}
                </label>
              );
            })}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
