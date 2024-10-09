import { CiMail } from "react-icons/ci";
import Logo from "../assets/Vidocean1.png";
const Login = () => {
  return (
    <div className=" bg-[url('./assets/bg.svg')] ">
      <div className="">
        <div className="">
          <img src={Logo} alt="" />
          <h2>Welcome Back</h2>
          <p>
            Dont have an account? <span> Sign Up</span>
          </p>
        </div>
        <div className="">
          <div className=" flex p-2 border border-text gap-2">
            <CiMail />
            <input type="text" placeholder="Email Adress" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
