import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia, previousFolks } from "../constants";

const Footer = () => (
  <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h2 className={styles.heading2} text-center>
          Our Previous Band Members and our Backbone
        </h2>
        <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
          {previousFolks.map((prevFolk) => (
            <div key={prevFolk.id} className={`flex-1 flex justify-start items-center flex-col m-3`} >
              <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-yellow-400">
                {prevFolk.value}
              </h4>
              <img src={prevFolk.img}></img>
              <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-red-400 uppercase ml-3">
                {prevFolk.title}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div> */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /> */}
        <p className={`${styles.paragraph} text-yellow-400 mt-4 max-w-[312px]`}>Echoes</p>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          The performance that will echo in your mind and linger for a lifetime.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div id="copyright" className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 <span className="text-yellow-400">Echoes.Rocks</span>. All Rights Reserved.<br />
      </p>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        <span className="text-yellow-400">Email</span>{" "} : <a href="mailto:echoestheband18@gmail.com?subject=Query to book echoes from Contact Us Page&body=Dear Echoes, Requesting your updated schedule and your next available dates!">echoestheband18@gmail.com</a><br />
        <span className="text-yellow-400">Whatsapp</span>{" "} : <a href="https://wa.me/918939005436">wa.me/918939005436</a><br />
        <span className="text-yellow-400">Phone</span>{" "} :  <a href="tel:+91-8939005436">+91-8939005436</a>
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
    {/* <a href="#home"><br/><br/><br/><div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-red-600"></div></a> */}
    <br/><br/><br/>
    <a href="#home"><span className="text-red-400 cursor-n-resize">home</span></a>
  </section>
);

export default Footer;
