import juniorSuiteImg from "../src/assets/Images/Room-Img/Junior-Suite.png";
import executiveSuiteImg from "../src/assets/Images/Room-Img/Executive-Suite.png";
import superDeluxeImg from "../src/assets/Images/Room-Img/Super-Deluxe.png";

const Rooms = () => {
  const roomsArray = [
    {
      roomImage: juniorSuiteImg,
      roomName: "Junior Suite",
      roomPrice: "$150.00",
    },
    {
      roomImage: executiveSuiteImg,
      roomName: "Executive Suite",
      roomPrice: "$250.00",
    },
    {
      roomImage: superDeluxeImg,
      roomName: "Super Deluxe",
      roomPrice: "$350.00",
    },
  ];
  return (
    <>
      <section className="h-fit w-full font-poppins px-5 py-12 sm:px-16 sm:py-20 md:px-14 md:py-24 lg:px-20 flex flex-col gap-16 sm:gap-20 lg:gap-24 bg-gray-50">
        <div className="h-fit w-full flex flex-col justify-center items-center gap-6">
          <div className="h-fit w-fit text-neutral-800 font-semibold flex justify-center items-center gap-3">
            <hr className="w-7 lg:w-6 h-0.5 bg-neutral-800 border-none rounded-full" />
            <span>Our Rooms</span>
            <hr className="w-7 lg:w-6 h-0.5 bg-neutral-800 border-none rounded-full" />
          </div>
          <div className="h-fit w-fit text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800">
            <span>Explore Our </span>
            <span className="text-primary">Rooms</span>
          </div>
        </div>
        <div className="h-fit w-full grid gap-12 justify-center items-center grid-cols-1 md:grid-cols-3 place-items-center lg:px-20">
          {roomsArray.map((arr, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 h-fit w-full self-center cursor-pointer hover:scale-[95%] drop-shadow-xs"
            >
              <img
                src={arr.roomImage}
                alt={arr.roomName}
                className="h-auto w-full"
              />
              <div className="h-fit w-full flex flex-col justify-center items-center gap-2 px-4 py-6">
                <div className="h-fit w-fit font-medium text-base text-neutral-800">
                  {arr.roomName.toUpperCase()}
                </div>
                <div className="h-fit w-fit text-sm text-neutral-500">
                  {arr.roomPrice}
                  <span>/per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Rooms;
