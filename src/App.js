import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Index from "./pages/Index";
import IndexTablet from "./pages/IndexTablet";
import IndexMobile from "./pages/IndexMobile";
import AboutComputer from "./pages/AboutComputer";
import AboutTablet from "./pages/AboutTablet";
import AboutMobile from "./pages/AboutMobile";
import About from "./pages/About";
import HowToPlayComputer from "./pages/HowToPlayComputer";
import HowToPlayTablet from "./pages/HowToPlayTablet";
import HowToPlayMobile from "./pages/HowToPlayMobile";
import HowToPlay from "./pages/HowToPlay";
import ContactUsComputer from "./pages/ContactUsComputer";
import ContactUsTablet from "./pages/ContactUsTablet";
import ContactUsMobile from "./pages/ContactUsMobile";
import ContactUs from "./pages/ContactUs";
import ResetPasswordComputer from "./pages/ResetPasswordComputer";
import ResetPasswordTablet from "./pages/ResetPasswordTablet";
import ResetPasswordMobile from "./pages/ResetPasswordMobile";
import ResetPassword from "./pages/ResetPassword";
import LandingComputer from "./pages/LandingComputer";
import LandingTablet from "./pages/LandingTablet";
import LandingMobile from "./pages/LandingMobile";
import Landing from "./pages/Landing";
import ProfileComputer from "./pages/ProfileComputer";
import ProfileTablet from "./pages/ProfileTablet";
import ProfileMobile from "./pages/ProfileMobile";
import Profile from "./pages/Profile";
import UserSearchComputer from "./pages/UserSearchComputer";
import UserSearchTablet from "./pages/UserSearchTablet";
import UserSearchMobile from "./pages/UserSearchMobile";
import UserSearch from "./pages/UserSearch";
import FriendSearchComputer from "./pages/FriendSearchComputer";
import FriendSearchTablet from "./pages/FriendSearchTablet";
import FriendSearchMobile from "./pages/FriendSearchMobile";
import FriendSearch from "./pages/FriendSearch";
import GameComputer from "./pages/GameComputer";
import GameTablet from "./pages/GameTablet";
import GameMobile from "./pages/GameMobile";
import Game from "./pages/Game";

import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Chess";
        metaDescription = "";
        break;
      case "/index":
        title = "Chess";
        metaDescription = "";
        break;
      case "/about":
        title = "About | Chess";
        metaDescription = "";
        break;
      case "/howtoplay":
        title = "How to Play | Chess";
        metaDescription = "";
        break;
      case "/contactus":
        title = "Contact Us | Chess";
        metaDescription = "";
        break;
      case "/resetpassword":
        title = "Reset Password | Chess";
        metaDescription = "";
        break;
      case "/landing":
        title = "Home | Chess";
        metaDescription = "";
        break;
      case "/profile":
        title = "Profile | Chess";
        metaDescription = "";
        break;
      case "/usersearch":
        title = "Users | Chess";
        metaDescription = "";
        break;
      case "/friendsearch":
        title = "Friends | Chess";
        metaDescription = "";
        break;
      case "/game":
        title = "Game | Chess";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/howtoplay" element={<HowToPlay />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/usersearch" element={<UserSearch />} />
      <Route path="/friendsearch" element={<FriendSearch />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}
export default App;
