const Stats = () => {
  const statsArray = [
    {
      statsNumber: "8",
      statsHeading: "Years of Service",
    },
    {
      statsNumber: "459",
      statsHeading: "Sq. Meter Area",
    },
    {
      statsNumber: "50",
      statsHeading: "Nice Rooms",
    },
    {
      statsNumber: "3786",
      statsHeading: "Happy Visitors",
    },
  ];
  return (
    <>
      <section className="h-fit w-full font-poppins bg-primary text-white px-5 py-8 gap-12 sm:px-10 sm:py-9 sm:gap-14 md:px-14 md:py-10 md:gap-16 lg:px-20 grid grid-cols-2 sm:grid-cols-4 justify-center items-center text-center">
        {statsArray.map((arr, index) => (
          <div key={index} className="w-full h-full justify-center items-start">
            <div className="w-full h-fit text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              {arr.statsNumber}
            </div>
            <div className="w-full h-fit text-xs sm:text-sm md:text-base font-medium">
              {arr.statsHeading}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Stats;
