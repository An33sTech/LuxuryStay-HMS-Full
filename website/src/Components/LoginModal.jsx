export default function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg px-4 h-full md:h-auto rounded-lg shadow bg-[#121313] border"
                onClick={(e) => e.stopPropagation()}
            >

                {/* close button */}
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {/* login form */}
                <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                    <h3 className="text-4xl font-medium text-white">
                        Sign In
                    </h3>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-sm font-medium block mb-2 text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border sm:text-sm rounded-lg outline-none block w-full p-2.5 bg-[#313135] border-gray-500 placeholder-gray-400 text-white"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="text-sm font-medium block mb-2 text-gray-300"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="border sm:text-sm rounded-lg outline-none block w-full p-2.5 bg-[#313135] border-gray-500 placeholder-gray-400 text-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center "
                    >
                            Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <a href="#" className="text-[#CDB9FF] hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

