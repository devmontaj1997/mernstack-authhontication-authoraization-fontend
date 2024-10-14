// logoutUser css Link

//Favicon
import "../../assets/logoutUserAssets/assets/img/favicon.png";

//Bootstrap CSS
import "../../assets/logoutUserAssets/assets/css/bootstrap.min.css";

//Fontawesome CSS
import "../../assets/logoutUserAssets/assets/plugins/fontawesome/css/fontawesome.min.css";
import "../../assets/logoutUserAssets/assets/plugins/fontawesome/css/all.min.css";

//Main CSS
import "../../assets/logoutUserAssets/assets/css/custom.css";

//Datepicker CSS
import "../../assets/logoutUserAssets/assets/css/bootstrap-datetimepicker.min.css";

//Feathericon CSS
import "../../assets/logoutUserAssets/assets/css/feather.css";

//Owl Carousel CSS
import "../../assets/logoutUserAssets/assets/css/owl.carousel.min.css";
//Animation CSS
import "../../assets/logoutUserAssets/assets/css/aos.css";
import logo from "../../assets/img/devmontaj.png";

import { Link } from "react-router-dom";
import { useState } from "react";

import { RxHamburgerMenu, RxCrossCircled } from "react-icons/rx";

const LogoutUserHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header header-custom header-fixed header-one">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand logo">
              <img src={logo} className="w-52" alt="Logo" />
            </Link>
            <div className="ofcanvash lg:hidden ">
              <div className="relative">
                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="text-2xl p-2 focus:outline-none"
                >
                  <RxHamburgerMenu />
                </button>

                {/* Overlay when off-canvas is open */}
                {isOpen && (
                  <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black opacity-50 z-30 "
                  ></div>
                )}

                {/* Off-canvas Menu */}
                <div
                  className={`fixed inset-y-0 left-0 w-64 px-2 bg-gray-800 text-white transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-300 ease-in-out z-40`}
                >
                  <div className="flex justify-between items-center p-4">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={toggleMenu}>
                      <RxCrossCircled className="text-2xl" />
                    </button>
                  </div>
                  <ul className="main-nav">
                    <li className="has-submenu megamenu active">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="register-btn">
                      <Link to="/register" className="btn reg-btn">
                        <i className="feather-user" />
                        Register
                      </Link>
                    </li>
                    <li className="register-btn">
                      <Link to="/login" className="btn btn-primary log-btn">
                        <i className="feather-lock" />
                        Login
                      </Link>
                    </li>
                  </ul>
                  {/* <ul className="space-y-4 p-4">
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-gray-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-gray-400">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-gray-400">
                      Contact
                    </Link>
                  </li>
                </ul> */}
                </div>
              </div>
            </div>
          </div>

          <div className="main-menu-wrapper md:hidden lg:block">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <a
                id="menu_close"
                className="menu-close"
                to="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>

            <div>
              <ul className="main-nav">
                <li className="has-submenu megamenu active">
                  <Link to="/">Home</Link>
                </li>

                <li className="register-btn">
                  <Link to="/register" className="btn reg-btn">
                    <i className="feather-user" />
                    Register
                  </Link>
                </li>
                <li className="register-btn">
                  <Link to="/login" className="btn btn-primary log-btn">
                    <i className="feather-lock" />
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LogoutUserHeader;
