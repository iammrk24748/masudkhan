import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Handle Sign In
  const handleSignIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Admin Login Success");
        navigate("/admin/dashboardCard");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something Wrong Please try again");
      });
  };

  return (
    <div className="flex justify-center items-center  min-h-screen  bg-[#F5F7F2]">
      <div className="flex flex-col max-w-md p-14  sm:p-10 bg-[#F5F7F2] text-gray-900 border border-[#333333] shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold font-t">Admin Panel</h1>
          <p className="text-sm text-gray-400 font-t">
            Log In to access your admin panel
          </p>
        </div>
        <form
          onSubmit={handleSignIn}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-t">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border font-t border-gray-300 focus:outline-[#333333] bg-[#F5F7F2] text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2 font-t">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border  border-gray-300 focus:outline-[#333333] bg-[#F5F7F2] text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#333333] font-t w-full rounded-none border-[#333333] py-3 text-[#F5F7F2] btn btn-primary hover:border-[#333333] hover:bg-[#F5F7F2] hover:text-[#333333] "
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </form>
        <div>
          <Link to="/">
            <button className="font-t btn btn-primary bg-[#333333] mt-5 w-full hover:bg-[#F5F7F2] text-[#F5F7F2] hover:border-[#333333] hover:text-[#333333] top-5 left-5 rounded-none border-[#333333]">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
