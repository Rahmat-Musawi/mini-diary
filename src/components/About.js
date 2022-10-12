import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <h2>Mini Diary & Quotes</h2>
      <p>
        This is just a tiny project developed using React. Originally I wanted
        to develop this project in order to collect and store diaries of
        students, who lost their lives in Kaaj Education Center in Kabul.
      </p>
      <Link id="link" to="/">
        Back to the homepage...
      </Link>
    </div>
  );
};

export default About;
