import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import Key from "../../auth/Key";
import "./Home.css";
import Header from "../../components/header/Header";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
function Home() {
  const isLogin = Key((state) => state.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [navigate, isLogin]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3800); 
  }, []);
  return (
    <div>
      {isLoading?<Loading/>:null}
      <Sidebar />
      <div className="main-container">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default Home;
