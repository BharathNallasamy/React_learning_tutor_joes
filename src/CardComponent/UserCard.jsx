import PropTypes from "prop-types";
import { useState } from "react";

const userData = [
  {
    name: "Bharath",
    city: "Dindigul",
    description: "Front End Developer",
    skills: [
      "Ui / UX",
      "Front end Developement",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
    ],
    online: false,
    profile: "images/bulb_image.png",
  },
  {
    name: "Bharathi",
    city: "Palani",
    description: "Teacher",
    skills: ["Teaching", "Gaining Knowledge"],
    online: true,
    profile: "images/customer_image.png",
  },
  {
    name: "Naveen",
    city: "Coimbatore",
    description: "Full Stack Developer",
    skills: [
      "Front end Developement",
      "Back End Developement",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
    ],
    online: true,
    profile: "images/CustomerCentric.png",
  },
];

function User(props) {
  const [buttonText, setButtonText] = useState("Follow");
  const handleClick = () => {
    setButtonText("Following");
  };

  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONline" : "OFFLINE"}
      </span>
      <img className="img" src={props.profile} alt="" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => {
        return (
          <User
            key={index}
            name={user.name}
            city={user.city}
            description={user.description}
            skills={user.skills}
            online={user.online}
            profile={user.profile}
          />
        );
      })}
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};
