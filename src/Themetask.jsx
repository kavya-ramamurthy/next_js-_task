import React, { useEffect, useState } from 'react'

function ThemeToggle() {

    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme")|| "light";
    });

 useEffect(()=>{
    localStorage.setItem("theme" , theme);
    document.body.className = theme;
 },[theme]);


 const toggleTheme =()=>{
    setTheme(prevTheme => (prevTheme === "light"?  "dark"  : "light"));
 }





  return (

<>

 <style>{`
        body.light {
          background: #ffffff;
          color: #000000;
        }

        body.dark {
          background: #121212;
          color: #ffffff;
        }
      `}</style>



    <div>
        <h1>{theme.toUpperCase()} MODE</h1>
        <button  onClick={toggleTheme}>Toggle Theme</button>
      
    </div>

    </>
  )
}

export default ThemeToggle
