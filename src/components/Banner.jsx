const Banner = () => {
  return (
    <div className="text-center l h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>

     <div className="mt-6">
     <label className="input  flex items-center gap-2 input-success input-bordered">
     <input type="text" placeholder="Type here" className="  w-full max-w-xs" />
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        </button>
      </label>
     </div>
    </div>
  );
};

export default Banner;
