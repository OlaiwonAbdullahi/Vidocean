import { CiMail } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import Logo from "../assets/Vidocean.png";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";

const Signup = () => {
  return (
    <div className="bg-[url('./assets/bg.svg')] bg-cover bg-center w-full flex items-center justify-center mx-auto h-screen">
      <div className="bg-secondary bg-opacity-10   bg-clip-padding backdrop-filter backdrop-blur-sm rounded-lg border border-secondary p-6 flex flex-col text-center items-center md:w-1/3 w-full gap-6">
        <div className="flex flex-col items-center gap-2">
          <img src={Logo} alt="Vidocean Logo" className="h-16 w-28" />
          <h2 className="text-2xl font-ubuntu font-medium">
            {" "}
            Create an Account for Free (**){" "}
          </h2>
          <p className="text-sm font-pop">
            Already have an account?{" "}
            <Link to="/">
              <span className="text-secondary cursor-pointer">Login</span>
            </Link>
          </p>
        </div>

        <div className=" flex flex-col gap-3">
          <div className="bg-transparent  border-2 border-secondary p-2 rounded-md cursor-pointer hover:bg-primary flex gap-2">
            <FcGoogle className="h-4 w-4 mt-1" />
            <span className=" whitespace-nowrap font-pop font-medium text-sm">
              Sign up with Google
            </span>
          </div>
          <div className=" bg-transparent  border-2 border-secondary p-2 rounded-md cursor-pointer hover:bg-primary flex gap-2">
            <BsApple className="h-4 w-4 mt-1" />
            <span className=" whitespace-nowrap font-pop font-medium text-sm">
              Sign up with Apple
            </span>
          </div>

          <div className="bg-transparent  border-2 border-secondary p-2 rounded-md cursor-pointer hover:bg-primary flex gap-2">
            <FaXTwitter className="h-4 w-4 mt-1" />
            <span className=" whitespace-nowrap font-pop font-medium text-sm">
              Sign up with X
            </span>
          </div>
        </div>

        <div className="w-full flex items-center gap-4">
          <hr className="flex-grow border-t border-text" />
          <span className="text-text font-pop text-sm">
            or Sign Up with Email
          </span>
          <hr className="flex-grow border-t border-text" />
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <RxPerson className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent placeholder:text-gray-500 placeholder:font-pop font-pop text-sm w-full outline-none"
            />
          </div>
          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <CiMail className="w-4 h-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent placeholder:text-gray-500 placeholder:font-pop font-pop text-sm w-full outline-none"
            />
          </div>
          <div className=" flex gap-2">
            <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
              <MdOutlinePassword className="w-4 h-4 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent placeholder:text-gray-500 placeholder:font-pop font-pop text-sm w-full outline-none"
              />
            </div>
            <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
              <MdOutlinePassword className="w-4 h-4 text-gray-500" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-transparent placeholder:text-gray-500 placeholder:font-pop font-pop text-sm w-full outline-none"
              />
            </div>
          </div>
          <div className="bg-secondary p-2 text-primary font-pop rounded-md cursor-pointer hover:bg-secondary-dark hover:text-white active:scale-95 transition-all duration-300 ease-in-out">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
