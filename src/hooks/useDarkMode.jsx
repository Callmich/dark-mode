import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage(darkMode)

    
}