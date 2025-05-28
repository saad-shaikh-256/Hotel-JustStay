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
                
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8333 10C12.8333 12.357 12.8333 13.5355 12.1011 14.2677C11.3689 15 10.1903 15 7.83331 15C5.47629 15 4.29778 15 3.56555 14.2677C2.83331 13.5355 2.83331 12.357 2.83331 10C2.83331 7.64298 2.83331 6.46446 3.56555 5.73224C4.29778 5 5.47629 5 7.83331 5C10.1903 5 11.3689 5 12.1011 5.73224C12.8333 6.46446 12.8333 7.64298 12.8333 10Z"
                    fill="#FF8D41"
                    stroke="#FF8D41"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12.8333 8.75V14.3526C12.8333 19.3184 9.68868 23.5296 5.33331 25"
                    stroke="#FF8D41"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M27.8333 10C27.8333 12.357 27.8333 13.5355 27.1011 14.2677C26.3688 15 25.1903 15 22.8333 15C20.4763 15 19.2978 15 18.5656 14.2677C17.8333 13.5355 17.8333 12.357 17.8333 10C17.8333 7.64298 17.8333 6.46446 18.5656 5.73224C19.2978 5 20.4763 5 22.8333 5C25.1903 5 26.3688 5 27.1011 5.73224C27.8333 6.46446 27.8333 7.64298 27.8333 10Z"
                    fill="#FF8D41"
                    stroke="#FF8D41"
                    stroke-width="1.5"
                  />
                  <path
                    d="M27.8333 8.75V14.3526C27.8333 19.3184 24.6887 23.5296 20.3333 25"
                    stroke="#FF8D41"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

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
