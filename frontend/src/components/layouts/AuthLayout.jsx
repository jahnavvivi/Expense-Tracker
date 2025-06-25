import card from "../../assets/images/card.png";
import { LuTrendingUpDown } from "react-icons/lu";
import dark_logo from "../../assets/images/dark_logo.png";
import light_logo from "../../assets/images/light_logo.png";

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-n-1 p-4 rounded-xl shadow-md shadow-purple-400/10 border border-n-10/5 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px] dark:text-n-9 transition-colors duration-300">
          ₹{value}
        </span>
      </div>
    </div>
  );
};

const AuthLayout = ({ children, className }) => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <div className="flex items-center gap-3 mb-6">
          {/* Light Theme Logo */}
          <img
            src={light_logo}
            className="block dark:hidden w-20 h-20 transition-opacity duration-300"
            alt="logo"
          />

          {/* Dark Theme Logo */}
          <img
            src={dark_logo}
            className="hidden dark:block w-20 h-20 transition-opacity duration-300"
            alt="logo"
          />

          <h2 className="text-xl font-semibold text-n-10 dark:text-n-2">
            Expense Tracker
          </h2>
        </div>

        {children}
      </div>

      <div
        className="hidden md:block w-[40vw] h-screen 
             bg-n-2 dark:bg-n-10
             bg-auth-bg-img bg-cover bg-no-repeat bg-center 
             overflow-hidden p-8 relative"
      >
        <div className="w-48 h-48 rounded-[40px] bg-n-6 dark:bg-n-5 transition-colors duration-300 absolute -top-7 -left-5"></div>

        <div className="w-48 h-56 rounded-[40px] border-[20px] border-n-9 dark:border-n-7 absolute top-[30%] -right-10 transition-colors duration-300"></div>

        <div className="w-48 h-48 rounded-[40px] bg-n-7 dark:bg-n-3 absolute -bottom-7 -left-5 transition-colors duration-300"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your Income & Expenses"
            value="430,000"
            color="bg-n-5"
          />
        </div>

        <img
          src={card}
          className="w-64 lg:w-[90%] rounded-xl absolute bottom-10 
                 shadow-lg shadow-blue-400/15 dark:shadow-purple-400/15"
          alt="card.png"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
