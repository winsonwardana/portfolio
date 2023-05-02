import anindo from "../../assets/anindo.png";
import cms from "../../assets/cms.png";
import mcdClone from "../../assets/mcd-clone.png";
import port from "../../assets/portofolio.png";
const defaultValue = {
  portofolio: [
    {
      title: "Gamics",
      tools:
        "Tools: Vue.js, Node.js, Express.js, JWT, Axios, Sequelize, Tailwind, Vite, VueFire, Firebase,",
      img: port,
    },
    {
      title: "Anindo",
      tools: "Tools: Laravel, HTML, CSS, Bootstrap, PHP  ",
      img: anindo,
    },
    {
      title: "MCD-clone",
      tools:
        "Tools: React.js, Redux.js, React-redux, React-router-dom, Redux-Thunk, Tailwind, Vite",
      img: mcdClone,
    },
    {
      title: "MCD-clone CMS",
      tools:
        "Tools: React.js, Redux.js, React-redux, React-router-dom, Redux-Thunk, Tailwind, Vite, Express, JWT, Axios, Sequelize",
      img: cms,
    },
  ],
};
export default function profileReducer(state = defaultValue, action) {
  if (action.payload === "profile/fetchSuccess") {
    return {
      ...state,
      profile: action.payload,
    };
  } else {
    return state;
  }
}
