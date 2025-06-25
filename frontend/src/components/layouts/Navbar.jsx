import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="flex gap-5 bg-n-0 text-n-10 dark:bg-n-11 dark:text-n-2 border border-b border-n-7/30 dark:border-n-7/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 transition-colors duration-300">
      <button
        className="block lg:hidden text-n-11 dark:text-n-2"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="text-lg font-medium text-n-10 dark:text-n-2">
        Expense Tracker
      </h2>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-n-0 dark:bg-n-10">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
