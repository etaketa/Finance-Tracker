import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Budget from "./pages/Budget/Budget";
import Transactions from "./pages/Transactions/Transactions";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

function App() {

  return(
    <>
    <div className="container">
        <BrowserRouter>
        <Header></Header>
        <main className="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
