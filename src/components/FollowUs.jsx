import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const FollowUs = () => {
  const socials = [
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
  ];

  return (
    <section className="w-full  to-white py-15">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Follow Us
        </h2>

        {/* Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-[#e33131] text-white
                text-2xl
                shadow-md
                transition-all duration-300
                hover:scale-110 hover:shadow-xl
              "
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
