import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [dmOn, setDmOn] = useLocalStorage(darkMode)

    useEffect(()=>{
        if (dmOn === true){
            document.querySelector('body').classList.add("dark-mode");
        } else{
            document.querySelector('body').classList.remove("dark-mode");
        }

        const toggleMode = e => {
            e.preventDefault();
            setDmOn(!darkMode);

        return [storedValue, setValue, toggleMode]
        
    }, [setDmOn])
}