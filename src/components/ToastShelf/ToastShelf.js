import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
    const {currentToasts, removeToast} = React.use(ToastContext);

  return (
    <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
    >
        {currentToasts.map((toast) => (
            <li key={toast.id} className={styles.toastWrapper}>
                <Toast variant={toast.variant} dismissToast={()=>removeToast(toast.id)}> {toast.message} </Toast>
            </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
