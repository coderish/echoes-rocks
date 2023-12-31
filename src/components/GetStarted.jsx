import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="#copyright">
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-red-500 p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-red-400">Contact Us</span>
          </p>
        </div>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-red-400">For Bookings</span>
        </p>
      </div>
    </div>
  </a>

);

export default GetStarted;
