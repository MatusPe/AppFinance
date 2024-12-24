
import './App.css'

function Login() {
    return (
        <div className="flex items-center justify-center w-full h-full bg-custom-grid  bg-black min-h-screen">
            {/* Outer Wrapper for Gradient Border and 1px Border with Shadow */}
            <div
                className="p-[0px] rounded-lg shadow-2xl w-96 border-[0px] border-green-500"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 1))",
                }}
            >
                {/* Inner Box with Darker Grey Background and Shadow */}
                <div className="rounded-lg p-6 bg-[#3A3535] text-white border-[1px] border-green-500 shadow-inner shadow-green-500">
                    <h2 className="text-center text-4xl font-extrabold mb-6 border-b-black pb-3 shadow-[0_5px_2px_-2px_rgba(0,0,0,0.6)] [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.8)]"
                    >Login</h2>
                    <form action={'wallet'}>
                        {/* Username Input */}
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full p-2 bg-[#3A3535] border-b-[1px] border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 transition-all duration-300 text-white placeholder-green-500"
                            />
                        </div>


                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 bg-[#3A3535] border-b-[1px] border-green-500 focus:outline-none  focus:border-green-600 transition-all duration-300 text-white placeholder-green-500"
                            />
                        </div>


                        <div className="flex items-center justify-between text-sm text-green-500 mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-green-500 mr-2"
                                />
                                Remember me
                            </label>
                            <a href="#" className="hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Login
                        </button>

                    </form>

                    {/* Footer Links */}
                    <p className="text-center text-sm text-white mt-6">
                        Don’t have an account?{" "}
                        <a href="#" className="text-green-500 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;