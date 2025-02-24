import{ createContext, ReactNode, useState,FC } from 'react'

type themeType = 'dark'| 'light';

type themeContextType = {
    theme:string,
    toggleTheme:()=>void
}

export const themeContext = createContext<themeContextType>({
    theme:'light',
    toggleTheme:()=>{}
});

const  TheamContext: FC<{children:ReactNode}> = ({children}) =>{
    const [theme,setTheme] = useState<themeType>('light');

    const toggleTheme = () =>{
        setTheme(theme === 'dark'? 'light':'dark')
    }


  return (
    <themeContext.Provider value={{theme,toggleTheme}} >
    {children}
    </themeContext.Provider>
  )
}

export default TheamContext