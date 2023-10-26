import styles from "../style";
import { discount, band_image } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">10%</span> Discount For{" "}
            <span className="text-white">3 bookings</span> a Month
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Performing Songs <br className="sm:block hidden" />{" "}
            for all
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        <span className="text-gradient">Generations</span>{" "}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of 5 expert musicians carrying 15+ years of experience in performing on stage 
          covering all genres of music.<br/>The project <span className="text-gradient">ECHOES</span>{" "} was created keeping in mind 
          the likeability of the crowd across all ages and the paradigm-shift of the genre towards Indie Rock.
          {/* <br/><br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum voluptatum unde fugit excepturi 
          eveniet nam officia a adipisci itaque autem asperiores neque quas sunt ad consequatur vel, esse dicta? */}
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={band_image} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
