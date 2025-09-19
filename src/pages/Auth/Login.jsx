import { useState } from 'react';
import { useForm } from "react-hook-form"
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    const handleGoogleLogin = () => {
        // Handle Google login logic here
        console.log('Google login attempt');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left side - Login Form */}
                    <div className="lg:w-1/2 p-8 lg:p-16">
                        <div className="max-w-md mx-auto">
                            {/* Logo */}
                            <div className="flex items-center mb-8">
                                <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center mr-3">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                                <span className="text-2xl font-bold text-gray-800">XEN TRACK</span>
                            </div>

                            {/* Welcome Back */}
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                            <p className="text-gray-600 mb-8">Login with Xen-Track</p>

                            {/* Login Form */}
                            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                    />
                                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            {...register("password", {
                                                required: true,
                                                minLength: 6
                                            })}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className="w-full px-4 py-3 pr-12 border border-gray-200 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                        />
                                        {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must me 6 Characters</p>}
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline">
                                        Forget Password?
                                    </a>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200"
                                >
                                    Login
                                </button>
                            </form>

                            {/* Register Link */}
                            <p className="text-center text-gray-600 mt-6">
                                Don't have any account?{' '}
                                <a href="#" className="text-lime-500 hover:text-lime-600 font-medium">
                                    Register
                                </a>
                            </p>

                            {/* Divider */}
                            <div className="flex items-center my-6">
                                <div className="flex-1 border-t border-gray-200"></div>
                                <span className="px-4 text-gray-500 text-sm">Or</span>
                                <div className="flex-1 border-t border-gray-200"></div>
                            </div>

                            {/* Google Login Button */}
                            <button
                                onClick={handleGoogleLogin}
                                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-3"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span>Continue With Google</span>
                            </button>
                        </div>
                    </div>

                    {/* Right side - Illustration */}
                    <div className="lg:w-1/2 bg-gradient-to-br from-lime-100 via-green-100 to-yellow-100 p-8 lg:p-16 flex items-center justify-center">
                        <div className="relative max-w-md w-full">
                            {/* Illustration Container */}
                            <div className="relative">
                                {/* Background Circle */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full transform rotate-12 opacity-80"></div>

                                {/* Main Illustration Area */}
                                <div className="relative bg-white rounded-full p-8 shadow-lg">
                                    {/* Location Pin */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-400 rounded-full p-2 shadow-md">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>

                                    {/* Characters */}
                                    <div className="flex items-center justify-center space-x-4 pt-4">
                                        {/* Customer (Woman) */}
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-blue-400 rounded-full mb-2 mx-auto flex items-center justify-center">
                                                <div className="w-12 h-12 bg-blue-500 rounded-full relative">
                                                    {/* Hair */}
                                                    <div className="absolute -top-2 left-1 w-10 h-6 bg-amber-600 rounded-full"></div>
                                                    {/* Face */}
                                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-200 rounded-full">
                                                        <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                                                        <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Handshake/Package Exchange */}
                                        <div className="flex items-center">
                                            <div className="w-6 h-4 bg-yellow-300 rounded transform rotate-12"></div>
                                        </div>

                                        {/* Delivery Person */}
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-indigo-400 rounded-full mb-2 mx-auto flex items-center justify-center">
                                                <div className="w-12 h-12 bg-indigo-500 rounded-full relative">
                                                    {/* Cap */}
                                                    <div className="absolute -top-2 left-0 w-12 h-4 bg-indigo-700 rounded-full"></div>
                                                    <div className="absolute -top-1 left-2 w-8 h-2 bg-indigo-800 rounded-full"></div>
                                                    {/* Face */}
                                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-200 rounded-full">
                                                        <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                                                        <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Package/Phone Icons */}
                                    <div className="absolute bottom-4 left-4 bg-yellow-200 p-2 rounded-lg">
                                        <svg className="w-4 h-4 text-yellow-700" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}