export default function useLocalstorage(key) {
    const setLocalStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value));  
    }
    
    const getLocalStorage = () => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }     
    
    return {setLocalStorage, getLocalStorage};
}

