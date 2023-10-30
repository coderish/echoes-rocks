import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section id="the-band" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div>
      <p className={`${styles.paragraph} ml-2`}>
      <br />
        <span className="text-yellow-400">ECHOES</span>{" "} was formed keeping in mind
        the likeability of the crowd across all ages and the paradigm-shift of today's era towards Indie Rock.
        <br /><br />
        From the heavy crunch of Rock On to the melodious vocal harmonies of the Jal band and
        from the soulful, punchy fusion of Indian Ocean to the ambient calmness of
        Agnee, we promise to take you on a musical roller coaster like no other.
        <br /><br />
      </p>
    </div>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-yellow-500">
          {stat.value}
        </h4>
        <img src={stat.img}></img><br />
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-red-500 uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
