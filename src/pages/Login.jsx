import { CiMail } from "react-icons/ci";
import Logo from "../assets/Vidocean2.png";
import { MdOutlinePassword } from "react-icons/md";
const Login = () => {
  return (
    <div className=" bg-[url('./assets/bg.svg')] w-full items-center justify-center mx-auto flex h-screen">
      <div className=" bg-blue-500 rounded-lg p-2 flex flex-col text-center items-center md:w-1/2 w-full gap-3">
        <div className="">
          <img src={Logo} alt="" className=" h-10 w-20" />
          <h2 className=" text-xl font-ubuntu font-medium">Welcome Back</h2>
          <p className="text-sm font-pop">
            Dont have an account? <span> Sign Up</span>
          </p>
        </div>
        <div className=" flex gap-4 flex-col">
          <div className=" flex p-2 border border-text gap-2 rounded-md w-full">
            <CiMail className=" w-6 h-6 text-text " />
            <input
              type="text"
              placeholder="Email Adress"
              className=" bg-transparent placeholder:text-text placeholder:font-pop font-pop text-sm"
            />
          </div>

          <div className=" flex p-2 border border-text gap-2 rounded-md w-full">
            <MdOutlinePassword className=" w-6 h-6 text-text " />
            <input
              type="text"
              placeholder="Password"
              className=" bg-transparent placeholder:text-text placeholder:font-pop font-pop text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
