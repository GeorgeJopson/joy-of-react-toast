import React from 'react';

export default function useEscapeKey(action) {
    React.useEffect(() => {
        function handleKeydown(event){
            if( event.key === 'Escape' ){
                action();
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return ()=>{
            window.removeEventListener('keydown', handleKeydown);
        }
    },[action]);
}

