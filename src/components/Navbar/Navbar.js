import debounce from "lodash.debounce";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const redirect = debounce(() => {
    navigate("/login");
  }, 2500);
  const handleLogout = () => {
    localStorage.removeItem("user");
    redirect();

    toast.success("You're logged out");
  };
  return (
    <header>
      <p>Dsh</p>
      <nav className='menu'>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default Navbar;
