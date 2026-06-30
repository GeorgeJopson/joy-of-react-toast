import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [
    currentVariant,
    setCurrentVariant
  ] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [toastOpen, setToastOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        {toastOpen && <Toast variant={currentVariant} dismissToast={()=>setToastOpen(false)} >{message}</Toast>}

        <form className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          setToastOpen(true);
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
