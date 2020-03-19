import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [dmOn, setDmOn] = useLocalStorage('dark-mode', true)

    useEffect(()=>{
        if (dmOn === true){
            document.body.classList.add("dark-mode");
        } else{
            document.body.classList.remove("dark-mode");
        }
    }, [dmOn])
        
        return [dmOn, setDmOn]
        
   
}