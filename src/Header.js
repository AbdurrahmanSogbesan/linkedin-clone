// import { Search } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import Home from "./img/home.png";
import Network from "./img/network.png";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt=""
          />
          <input type="text" placeholder="Search" />
        </div>
        {/* <Search /> */}
      </div>

      <div className="header__right">
        <HeaderOption img={Home} title="Home" />
        <HeaderOption img={Network} title="My Network" />
        <HeaderOption
          img="https://cdn-icons-png.flaticon.com/512/522/522510.png"
          title="Jobs"
        />
        <HeaderOption
          img="https://cdn-icons-png.flaticon.com/512/3721/3721843.png"
          title="Messaging"
        />
        <HeaderOption
          img="https://cdn-icons-png.flaticon.com/512/3602/3602123.png"
          title="Notifications"
        />
        <HeaderOption
          onClick={logoutOfApp}
          img="https://cdn-icons-png.flaticon.com/512/1946/1946392.png"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
