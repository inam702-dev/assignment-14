import { IoAddSharp } from "react-icons/io5";
const About = () => {
  return (
    <>
      <section id="about">
        <div className=" flex flex-col items-center justify-start min-h-screen w-full pt-20 ">
          <div
            className="flex items-center justify-center text-amber-400 text-xl border border-amber-400  px-4
        py-2">
            <p>About Us</p>
          </div>

          <p className=" mt-8 text-mist-50 text-[48px] gap-4 px-58 font-semibold font-serif text-warm ">
            Independent Advice. Clear Direction.
          </p>
          <div className="flex flex-row pb-12 ">
            <div className="flex items-start pl-12 pr-36 mt-8 text-mist-200 text-[20px] gap-4 w-2xl font-medium font-serif text-warm ">
              <p>
                <span className="text-4xl">At</span> Vance Advisory, we believe
                that every financial decision shapes your future. Our mission is
                to make financial planning simpler, smarter, and more accessible
                for individuals and families.
                <br />
                We provide thoughtful financial guidance across retirement
                planning, investment strategies, and wealth protection. By
                understanding your unique goals and financial needs, we help you
                make informed decisions with confidence.
                <br /> <br />
                Our approach is built on trust, transparency, and long-term
                relationships. We focus on creating practical financial
                strategies that support your ambitions and help secure a more
                confident future.
                <br /> <br />
                <span className="text-[28px]">Vance Advisory</span> —
                <span className="text-amber-400 text-[20px] font-bold">
                  Your Wealth, Our Vision.
                </span>
              </p>
            </div>
            <div className=" mt-16 w-150 ">
              <img fetchPriority="high"
                className="border rounded-md"
                src="\office.webp"
                alt="Office pic"
              />
            </div>
          </div>
          <div className="bg-slate-900 w-full py-12 mt-8">
            <div className="flex flex-row items-center justify-evenly text-yellow-600 w-full font-semibold text-4xl">
              <p className="flex items-center ">
                <span className="text-5xl">$500M</span> <IoAddSharp />
              </p>
              <p className="flex items-center ">
                <span className="text-5xl">200</span> <IoAddSharp />
              </p>
              <p className="flex items-center ">
                <span className="text-5xl">15</span> <IoAddSharp />
              </p>
              <p className="text-5xl">FCA</p>
            </div>
            <div className="flex flex-row items-center justify-evenly mt-1 text-lg text-mist-400 font-semibold">
              <p className="text-center pl-8">Assets Advised</p>
              <p className="text-center pl-16 ">Clients Served</p>
              <p className="text-center">Years Experience</p>
              <p className="text-center pr-6">Regulated </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
