const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="flex flex-col items-center justify-start h-[110vh] w-full pt-16 px-40 ">
          <div className=" flex flex-col items-center justify-start  w-full pt-12 px-40 pb-6 ">
            <p className="text-[38px] font-bold font-serif text-amber-400 mb-4">
              Take Control of Your Financial Future
            </p>
            <p className="text-lg text-mist-200 mb-4">
              Book a free 30-minute consultation — no obligation, no sales
              pressure
            </p>
          </div>
          <div>
            <form>
              <div className="flex flex-col items-center justify-start h-[64vh] text-xl w-full pt-8 gap-6 px-12 text-mist-300 border-mist-400 border rounded-md">
                <input
                  type="text"
                  placeholder="Full name"
                  className=" border-amber-400 border  placeholder:text-mist-300 h-16 pr-48 pl-8 "></input>
                <input
                  type="text"
                  placeholder="Phone"
                  className=" border-amber-400 border  placeholder:text-mist-300 h-16 pr-48 pl-8 "></input>
                <input
                  type="email"
                  placeholder="Email"
                  className=" border-amber-400 border  placeholder:text-mist-300 h-16 pr-48 pl-8 "></input>
                <textarea
                  placeholder="Share Your Thoughts..."
                  className=" border-amber-400 border  placeholder:text-mist-300 h-32 pr-56 pl-8 pt-4 "></textarea>
                <button
                  type="submit"
                  className="bg-amber-500 text-slate-800 px-4 py-2 hover:scale-109  ease-in-out  text-semibold font-medium border rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
