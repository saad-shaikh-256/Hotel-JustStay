const Testimonial = () => {
  const testimonialArray = [
    {
      testimonialMessage:
        "Nobis voluptatem magni doloribus voluptate culpa dolor est neque ",
      testimonialName: "Sarah Johnson",
      testimonialEmail: "sarah.johnson@example.com",
    },
    {
      testimonialMessage:
        "Nobis voluptatem magni doloribus voluptate culpa dolor est neque ",
      testimonialName: "Michael Davis",
      testimonialEmail: "michael.davis@example.net",
    },
    {
      testimonialMessage:
        "Nobis voluptatem magni doloribus voluptate culpa dolor est neque ",
      testimonialName: "David Lee",
      testimonialEmail: "david.lee@example.com",
    },
    {
      testimonialMessage:
        "Nobis voluptatem magni doloribus voluptate culpa dolor est neque ",
      testimonialName: "Emily White",
      testimonialEmail: " emily.white@example.org",
    },
  ];
  return (
    <>
      <section className="h-fit w-full font-poppins px-5 py-12 sm:px-16 sm:py-20 md:px-14 md:py-24 lg:px-20 flex flex-col gap-16 sm:gap-20 lg:gap-24">
        <div className="h-fit w-full flex flex-col justify-center items-center gap-6">
          <div className="h-fit w-fit text-neutral-800 font-semibold flex justify-center items-center gap-3">
            <hr className="w-7 lg:w-6 h-0.5 bg-neutral-800 border-none rounded-full" />
            <span>Testimonial</span>
            <hr className="w-7 lg:w-6 h-0.5 bg-neutral-800 border-none rounded-full" />
          </div>
          <div className="h-fit w-fit text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800">
            <span>What People </span>
            <span className="text-primary">Say?</span>
          </div>
        </div>
        <div className="h-fit w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  content-center">
          {testimonialArray.map((arr, index) => (
            <div
              key={index}
              className="h-fit w-full lg:max-w-[298px] px-6 py-4 flex flex-col gap-7 justify-center items-center"
            >
              <div className="h-fit w-full flex flex-col justify-center items-center gap-5">
                <img
                  src="/src/assets/Icons/quoteIcon.svg"
                  alt="Quote-Icon"
                  className="h-auto w-auto"
                />
                <span className="h-fit w-full text-center text-base  text-neutral-800 flex justify-center">
                  {arr.testimonialMessage}
                </span>
              </div>
              <div className="h-fit w-full flex flex-col justify-center items-center gap-2">
                <span className="h-fit w-full text-center text-base font-semibold text-neutral-800">
                  {arr.testimonialName}
                </span>
                <span className="h-fit w-full text-center text-xs text-neutral-600">
                  {arr.testimonialEmail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
