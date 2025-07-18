import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";

function App() {
  
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return(
    <>
      <div className={`container ${theme}`}>
        <Header theme={theme} setTheme={setTheme}></Header>
      </div>
        <Home></Home>
        <Footer></Footer>
    </>
  );
}

export default App
