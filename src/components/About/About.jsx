import "./About.css";
import profilePhoto from "../../assets/profile-photo.jpeg";

function About() {
  return (
    <div className="about">
      <div className="about__photo-container">
        <img src={profilePhoto} alt="Profile Photo" className="about__photo" />
      </div>
      <div className="about__text">
        <h2 className="about__heading">About the author</h2>
        <p className="about__description">
          Hello, I'm Johanna Schnell, a web developer skilled in technologies
          like HTML, CSS, JavaScript, React, and Node.js. I gained valuable
          experience at TripleTen, where I worked on full-stack projects and
          refined my problem-solving and development skills. I'm passionate
          about helping clients bring their ideas to life with clean, efficient
          code and user-friendly web solutions. Let’s collaborate and build
          something great!
        </p>
      </div>
    </div>
  );
}

export default About;
