

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="flex flex-col items-start justify-start w-full pt-48 pb-52 px-40  border-amber-500 border-b-4">
          <div className=" text-mist-100 text-[70px] font-bold leading-[1.1]">
            <p> Unlock Your Financial Potential.</p>{" "}
            <p className="text-amber-300">Expert Guidance.</p>{" "}
          </div>
          <p className=" text-mist-300 text-lg mt-6 mr-60">
            Independent financial advice for a brighter future — from retirement
            planning to investments. Smart financial planning, strategic
            investments, and lasting protection for you and your family.
          </p>

          <div className="flex gap-10 flex-row mt-8 ml-18">
            <div className="flex gap-4 mt-8 border-amber-400 border text-amber-400 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300">
              <a href="#contact">
                <button> Book a Free Consultation </button>
              </a>
            </div>
            <div className="flex gap-4 mt-8 border-amber-400 border text-amber-400 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300">
              <a href="#services">
                <button> View Our Services </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
