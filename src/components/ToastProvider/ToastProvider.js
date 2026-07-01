import React from 'react';

export const ToastContext = React.createContext({
  currentToasts:[],
  addToast:()=>{},
  removeToast:()=>{},
});

function ToastProvider({children}) {
  const [currentToasts, setCurrentToasts] = React.useState([]);

  const addToast = React.useCallback(({message, variant}) => {
    const newCurrentToasts = [...currentToasts,{
      id: crypto.randomUUID(),
      message,
      variant,
    }];
    setCurrentToasts(newCurrentToasts);
  }, [currentToasts]);

  const removeToast = React.useCallback((id)=>{
    let newToasts = []
    for (let i = 0; i < currentToasts.length; i++) {
      if(currentToasts[i].id !== id){
        newToasts.push(currentToasts[i]);
      }
    }
    setCurrentToasts(newToasts);
  },[currentToasts]);

  const value = React.useMemo(()=>{
    return {currentToasts:currentToasts, addToast:addToast, removeToast:removeToast};
  },[currentToasts, addToast, removeToast])

  return (
      <ToastContext value={value}>
        {children}
      </ToastContext>
  );
}

export default ToastProvider;
