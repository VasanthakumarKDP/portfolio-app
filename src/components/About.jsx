/* eslint-disable react/no-unescaped-entities */

import Headline from "../shared/Headline";
import skills from "../../public/skills.js";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <div>
        <Headline
          title={"ABOUT US"}
          subtitle={
            "Here you will find more information about us, what we do, and our current skills mostly in terms of programming and technology"
          }
        />
      </div>

      {/* About content */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* left side */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 my-8"
        >
          <h4 className="text-2xl font-bold mb-8">Get to know more !</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5 font-bold underline">Murugan Paraparam</p>

            <p className="mb-5  text-justify">
              With over 20 years of experience, Murugan is a seasoned expert in
              project management, cost and project scheduling, and report
              writing. His extensive background ensures that every aspect of
              your project is meticulously planned and executed. Murugan excels
              in creating top-notch analytics reports, providing you with
              insightful data that drives informed decision-making.{" "}
            </p>
            <p className="mb-5 font-bold underline">Vasanthakumar</p>
            <p className="mb-5  text-justify">
              Vasanthakumar brings over 8 years of experience in Website and
              Mobile App development. His expertise lies in building
              user-friendly, responsive interfaces and robust applications that
              enhance user experience and drive engagement. Vasanthakumar is
              passionate about leveraging the latest technologies to deliver
              high-quality digital solutions.
            </p>
          </div>

          {/* <button className='btn py-4 px-14'>Contact</button> */}
        </motion.div>

        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2 my-8"
        >
          <h4 className="text-2xl font-bold mb-8">What We Offer</h4>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-300 text-light py-2 px-4 rounded"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
