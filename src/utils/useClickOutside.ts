import { useEffect } from 'react';

export const useClickOutside = (doSomeAction: EventListenerOrEventListenerObject) => {
  useEffect(()=> {
    document.body.addEventListener('click', doSomeAction);

    return () => document.body.removeEventListener('click', doSomeAction);
  }, []);
};
