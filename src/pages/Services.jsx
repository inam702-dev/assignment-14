
import { MdMoreTime } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import { TbHomeStats } from "react-icons/tb";
const Services = () => {
  return (
    <>
      <section id="services">
        <div className="flex flex-col items-center justify-start h-[142vh] pt-32 px-40">
          <div className="flex flex-col items-center justify-center text-amber-400 text-xl border border-amber-400 py-2 px-4">
            <p>What We Offer</p>
          </div>
          <div className="mt-8 text-mist-50 text-[50px] gap-4 pr-42 pl-60 font-semibold font-serif text-warm ">
            <p>Expert Advice Across Every Area of Your Financial Life</p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 items-center justify-center">
            <div className="flex flex-col items-start justify-center w-full h-84 gap-6 mt-12 text-lg text-mist-300 font-semibold border border-mist-500 p-8 rounded-lg hover:scale-105 hover:border-amber-300 transition-transform duration-300 ease-in-out">
              <MdMoreTime className="text-amber-400 text-3xl" />
              <p className="text-mist-50 font-bold text-2xl ">
                Retirement Planning
              </p>
              <p className="text-mist-200 text-lg mt-2">
                Understand exactly how much you need, when you can retire, and
                how to make your money last. We model multiple scenarios so you
                retire with confidence, not guesswork.
              </p>
              <a href="#contact">
                <button className="flex items-center  text-amber-300 hover:text-amber-500 font-bold">
                  Learn More <IoIosArrowRoundForward className="size-8" />{" "}
                </button>
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-84 gap-4 mt-12 text-lg text-mist-300 font-semibold border border-mist-500 p-8 rounded-lg hover:scale-105 hover:border-amber-300 transition-transform duration-300 ease-in-out">
              <FaArrowTrendUp className="text-amber-400 text-3xl" />
              <p className="text-mist-50 font-bold text-2xl ">
                Investment Management
              </p>
              <p className="text-mist-200 text-lg mt-2">
                Build a diversified portfolio aligned to your goals, timeline,
                and attitude to risk. Independent advice means we recommend
                what's right for you — not what earns us the highest commission.
              </p>
              <a href="#contact">
                <button className="flex items-center  text-amber-300 hover:text-amber-500 font-bold">
                  Learn More <IoIosArrowRoundForward className="size-8" />{" "}
                </button>
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-84 gap-4 mt-12 text-lg text-mist-300 font-semibold border border-mist-500 p-8 rounded-lg hover:scale-105 hover:border-amber-300 transition-transform duration-300 ease-in-out">
              <AiOutlineFileProtect className="text-amber-400 text-3xl" />
              <p className="text-mist-50 font-bold text-2xl ">
                Protection Insurance
              </p>
              <p className="text-mist-200 text-lg mt-2">
                Ensure your family and income are protected if the unexpected
                happens. We review the market to find the right level of cover
                at the right price.
              </p>
              <a href="#contact">
                <button className="flex items-center  text-amber-300 hover:text-amber-500 font-bold">
                  Learn More <IoIosArrowRoundForward className="size-8" />{" "}
                </button>
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-84 gap-4 mt-12 text-lg text-mist-300 font-semibold border border-mist-500 p-8 rounded-lg hover:scale-105 hover:border-amber-300 transition-transform duration-300 ease-in-out">
              <TbHomeStats className="text-amber-400 text-3xl" />
              <p className="text-mist-50 font-bold text-2xl ">
                Estate Planning
              </p>
              <p className="text-mist-200 text-lg mt-2">
                Minimize inheritance tax and ensure your assets go exactly where
                you intend. We work alongside solicitors to make sure your
                wishes are legally protected.
              </p>
              <a href="#contact">
                <button className="flex items-center  text-amber-300 hover:text-amber-500 font-bold">
                  Learn More <IoIosArrowRoundForward className="size-8" />{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
