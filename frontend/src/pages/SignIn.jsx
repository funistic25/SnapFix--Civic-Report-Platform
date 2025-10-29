import React, { useContext, useState } from "react";
import { KeyRound, UserRound, Mail } from "lucide-react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
// import { DepartmentContext } from "../contexts/DepartmentContext";

export const SignIn = () => {
  const {login} = useContext(UserContext)
const navigate = useNavigate()
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Basic client-side validation
    if (
      !username ||
      !password ||
      (!isLoginMode && (!email || !confirmPassword))
    ) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      setIsSubmitting(false);
      return;
    }

    if (!isLoginMode && password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      setIsSubmitting(false);
      return;
    }

    // API call
    const success = await login(username, password);
    console.log("singin: ", success);
    
    if(!success){
      alert("login failed")
      setIsSubmitting(false)
      return
    }
    navigate("/")
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(to bottom right, #eef2ff, #f3e8ff);
        }
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .card {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: 100%;
          max-width: 24rem;
          border: 1px solid #f3f4f6;
          backdrop-filter: blur(5px);
        }
        @media (min-width: 640px) {
          .card {
            max-width: 28rem;
          }
        }
        .text-3xl { font-size: 1.875rem; }
        .sm\\:text-4xl { font-size: 2.25rem; }
        .font-extrabold { font-weight: 800; }
        .text-gray-800 { color: #1f2937; }
        .text-center { text-align: center; }
        .mb-2 { margin-bottom: 0.5rem; }
        .tracking-tight { letter-spacing: -0.025em; }
        .text-sm { font-size: 0.875rem; }
        .text-gray-500 { color: #6b7280; }
        .mb-8 { margin-bottom: 2rem; }
        .font-light { font-weight: 300; }
        .flex { display: flex; }
        .justify-center { justify-content: center; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .rounded-full { border-radius: 9999px; }
        .text-sm { font-size: 0.875rem; }
        .font-bold { font-weight: 700; }
        .transition-all { transition-property: all; }
        .duration-300 { transition-duration: 0.3s; }
        .bg-blue-600 { background-color: #2563eb; }
        .text-white { color: #ffffff; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .bg-gray-200 { background-color: #e5e7eb; }
        .text-gray-600 { color: #4b5563; }
        .hover\\:bg-gray-300:hover { background-color: #d1d5db; }
        .p-4 { padding: 1rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .font-medium { font-weight: 500; }
        .bg-green-100 { background-color: #d1fae5; }
        .text-green-700 { color: #047857; }
        .bg-red-100 { background-color: #fee2e2; }
        .text-red-700 { color: #b91c1c; }
        .block { display: block; }
        .text-gray-700 { color: #374151; }
        .font-semibold { font-weight: 600; }
        .mb-2 { margin-bottom: 0.5rem; }
        .bg-gray-50 { background-color: #f9fafb; }
        .border { border-width: 1px; }
        .border-gray-200 { border-color: #e5e7eb; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .focus-within\\:ring-2:focus-within { box-shadow: 0 0 0 2px #3b82f6; }
        .focus-within\\:ring-blue-500:focus-within { box-shadow: 0 0 0 2px #3b82f6; }
        .focus-within\\:border-blue-500:focus-within { border-color: #3b82f6; }
        .duration-200 { transition-duration: 0.2s; }
        .ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        .text-gray-400 { color: #9ca3af; }
        .mr-3 { margin-right: 0.75rem; }
        .w-5 { width: 1.25rem; }
        .h-5 { height: 1.25rem; }
        .flex-grow { flex-grow: 1; }
        .bg-transparent { background-color: transparent; }
        .outline-none { outline: 2px solid transparent; outline-offset: 2px; }
        .placeholder-gray-400::placeholder { color: #9ca3af; }
        .w-full { width: 100%; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .transform { transform: var(--tw-transform); }
        .hover\\:scale-\\[1\\.01\\]:hover { transform: scale(1.01); }
        .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
        .focus\\:ring-4:focus { box-shadow: 0 0 0 4px #93c5fd; }
        .focus\\:ring-blue-300:focus { box-shadow: 0 0 0 4px #93c5fd; }
        .disabled\\:bg-gray-400:disabled { background-color: #9ca3af; }
        .disabled\\:transform-none:disabled { transform: none; }
        .disabled\\:cursor-not-allowed:disabled { cursor: not-allowed; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .opacity-25 { opacity: 0.25; }
        .opacity-75 { opacity: 0.75; }
        .mb-8 { margin-bottom: 2rem; }
        `}
      </style>
      <div className="container">
        <div className="card">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-2 tracking-tight">
            {isLoginMode ? "Welcome Back!" : "Join the Community"}
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8 font-light">
            {isLoginMode
              ? "Please sign in to continue."
              : "Sign up to get started."}
          </p>

          {/* Login/Signup Buttons at the top */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`py-2 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                isLoginMode
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`py-2 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                !isLoginMode
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Message */}
          {message && (
            <div
              className={`p-4 rounded-xl mb-6 text-sm font-medium ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 ease-in-out">
                <UserRound className="text-gray-400 mr-3 w-5 h-5" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                  required
                />
              </div>
            </div>

            {/* Conditional Email Input for Sign Up */}
            {!isLoginMode && (
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 ease-in-out">
                  <Mail className="text-gray-400 mr-3 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                    required
                  />
                </div>
              </div>
            )}

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 ease-in-out">
                <KeyRound className="text-gray-400 mr-3 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                  required
                />
              </div>
            </div>

            {/* Conditional Confirm Password Input */}
            {!isLoginMode && (
              <div className="mb-8">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 ease-in-out">
                  <KeyRound className="text-gray-400 mr-3 w-5 h-5" />
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
                    required
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : isLoginMode ? (
                "Login"
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

