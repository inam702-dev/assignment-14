

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-24 fixed top-0 left-0 w-full bg-slate-800 text-amber-300 border-b border-amber-400 border-dotted z-1000">
        <a
          href="#home"
          className="flex justify-start items-center space-x-2 ml-2">
          <span className="font-semibold text-2xl flex items-center gap-1.5">
            <p className="font-semibold text-mist-200 ">Vance</p>
            <p className="text-amber-500 ">Advisory</p>
          </span>
        </a>
        <div className="flex justify-end items-center space-x-4 pl-8 pr-16 gap-6">
          <a
            href="#home"
            className="ml-4 text-xl hover:text-amber-500 transition-colors duration-300 ">
            Home
          </a>
          <a
            href="#about"
            className="ml-4 text-xl hover:text-amber-500 transition-colors duration-300 ">
            About
          </a>
          <a
            href="#services"
            className="ml-4 text-xl hover:text-amber-500 transition-colors duration-300 ">
            Services
          </a>
          <a
            href="#contact"
            className="ml-4 text-xl hover:text-amber-500 transition-colors duration-300">
            Contact
          </a>
        </div>
        <div className="flex items-center w-40 ml-6 mr-2 ">
          <a href="#contact">
            <button className="bg-amber-500 text-slate-800 px-4 py-2 ease-in-out  hover:scale-106  hover:text-slate-700 text-semibold font-medium transition-colors duration-300">
              Free Consultation
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
