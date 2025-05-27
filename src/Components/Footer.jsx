const Footer = () => {
  const quickLinks = ["Home", "About-Us", "Rooms", "Contact-Us"];
  const otherLinks = ["Help Center", "Privacy Policy", "Terms and Conditions"];
  const contactLinks = ["hello@world.com", "+91-1200100000"];

  const LinkCard = ({ link, label }) => (
    <a href={link} tabIndex="0" className="">
      <div className="" />
      <span className="">{label}</span>
    </a>
  );

  return (
    <>
      <footer
        id="footer"
        className="h-fit w-full font-poppins flex flex-col justify-center items-center px-5 pt-12 pb-8 gap-12 sm:px-10 sm:pt-14 sm:pb-9 sm:gap-14 md:px-14 md:pt-16 md:pb-9 md:gap-16 lg:px-20"
      >
        <div className="upper-container w-full h-fit grid gap-12 grid-cols-2 lg:flex justify-between items-start sm:grid-cols-3 lg:gap-0">
          <div className="h-full lg:w-100 col-span-2 sm:col-span-3 flex flex-col gap-4 sm:gap-6 items-start">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-neutral-900">Just</span>
              <span className="text-primary">Stay</span>
            </div>
            <div className="text-sm w-full h-fit text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit facere, ad quae nesciunt nostrum, quam, adipisci ipsum magnam
              rem deserunt.
            </div>
          </div>
          <div className="h-fit sm:w-[200px] flex flex-col gap-6 items-start">
            <div className="text-lg md:text-xl font-semibold text-neutral-900">
              Quick Links
            </div>
            <div className=" text-xs sm:text-sm flex flex-col gap-4 text-neutral-600">
              {quickLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="h-fit sm:w-[200px] flex flex-col gap-6 items-start">
            <div className="text-lg md:text-xl font-semibold text-neutral-900">
              Other Links
            </div>
            <div className=" text-xs sm:text-sm flex flex-col gap-4 text-neutral-600">
              {otherLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="h-fit sm:w-[200px] flex flex-col gap-6 items-start">
            <div className="text-lg md:text-xl font-semibold text-neutral-900">
              Get in Touch
            </div>
            <div className=" text-xs sm:text-sm flex flex-col gap-4 text-neutral-600">
              {contactLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lower-container h-fit w-full text-center text-base">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/saad-shaikh-256"
            target="_blank"
            className="text-primary"
            rel="noopener noreferrer"
          >
            Saad Shaikh
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
