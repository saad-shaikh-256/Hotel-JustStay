import aboutImage from "../assets/Images/aboutImage.png";
const About = () => {
  return (
    <>
      <section className="h-fit w-full font-poppins px-5 py-12 sm:px-16 sm:py-20 md:px-14 md:py-24 lg:px-20 flex flex-col gap-16 sm:gap-20 lg:gap-24 bg-gray-50">
        <div className="h-fit w-full flex flex-col justify-center items-center gap-6">
          <div className="h-fit w-fit text-neutral-800 font-semibold flex justify-center items-center gap-3">
            <hr className="w-7 lg:w-6 h-0.5 bg-neutral-800 border-none rounded-full" />
            <span>About Us</span>
            <hr className="w-7 lg:w-6 h-0.5 bg-neutral-800 border-none rounded-full" />
          </div>
        </div>
        <div className="h-fit w-full grid grid-cols-1 justify-center items-center gap-12 sm:16 md:20 lg:gap-24">
          <div className="upperContainer h-fit w-full flex flex-row flex-wrap lg:flex-nowrap gap-10 sm:gap-14 md:gap-20 lg:gap-28 justify-center items-center place-items-center">
            <div className="imageContainer h-full w-full">
              <div className="h-fit w-full p-4 border-[1.5px] border-gray-300 rounded-[48px]">
                <img
                  src={aboutImage}
                  alt="About Image"
                  className="w-full h-auto max-h-[350px] rounded-4xl"
                />
              </div>
            </div>
            <div className="textContainer h-fit w-full flex flex-col gap-6 sm:gap-8">
              <div className="headingContainer text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800">
                History of Just<span className="text-primary">Stay</span>
              </div>
              <div
                className="bodyContainer flex flex-col gap-3
               sm:gap-4"
              >
                <div className="paraContainer text-sm sm:text-base text-neutral-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque assumenda incidunt id cum. Fugiat repellat cumque
                  delectus, at ipsum ad iure explicabo perferendis. If you're
                  still reading this, congrats, you're officially a masochist.
                </div>
                <div className="paraContainer text-sm sm:text-base text-neutral-700">
                  Autem temporibus, neque voluptas officiis molestiae. At vero
                  eos et accusamus et iusto odio dignissimos ducimus. But hey,
                  at least you’re not stuck in traffic, or worse, listening to a
                  never-ending sales pitch, right?
                </div>
              </div>
              <div className="buttonContainer text-primary">
                <button className="text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 border-[1.5px] border-primary rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="upperContainer h-fit w-full flex flex-row flex-wrap lg:flex-nowrap gap-10 sm:gap-14 md:gap-20 lg:gap-28 justify-center items-center place-items-center">
            <div className="imageContainer h-full w-full order-1 lg:order-2">
              <div className="h-fit w-full p-4 border-[1.5px] border-gray-300 rounded-[48px]">
                <img
                  src={aboutImage}
                  alt="About Image"
                  className="w-full h-auto max-h-[350px] rounded-4xl"
                />
              </div>
            </div>
            <div className="textContainer h-fit w-full flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
              <div className="headingContainer text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800">
                Why Choose us?
              </div>
              <div
                className="bodyContainer flex flex-col gap-3
               sm:gap-4"
              >
                <div className="paraContainer text-sm sm:text-base text-neutral-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque assumenda incidunt id cum. Fugiat repellat cumque
                  delectus, at ipsum ad iure explicabo perferendis. If you're
                  still reading this, congrats, you're officially a masochist.
                </div>
                <div className="paraContainer text-sm sm:text-base text-neutral-700">
                  Autem temporibus, neque voluptas officiis molestiae. At vero
                  eos et accusamus et iusto odio dignissimos ducimus. But hey,
                  at least you’re not stuck in traffic, or worse, listening to a
                  never-ending sales pitch, right?
                </div>
              </div>
              <div className="buttonContainer text-primary">
                <button className="text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 border-[1.5px] border-primary rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
