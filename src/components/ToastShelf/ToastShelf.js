import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({currentToasts, setCurrentToasts}) {
    function removeToast(id){
        let newToasts = []
        for (let i = 0; i < currentToasts.length; i++) {
            if(currentToasts[i].id !== id){
                newToasts.push(currentToasts[i]);
            }
        }
        setCurrentToasts(newToasts);
    }

  return (
    <ol className={styles.wrapper}>
        {currentToasts.map((toast) => (
            <li key={toast.id}>
                <Toast variant={toast.variant} dismissToast={()=>removeToast(toast.id)}> {toast.message} </Toast>
            </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
