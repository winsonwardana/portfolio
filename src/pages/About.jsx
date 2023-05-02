import "../assets/index.css";
import { TagCloud } from "react-tagcloud";

function About() {
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: "blinker 3s linear infinite",
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `3px solid ${color}`,
        margin: "5px",
        padding: "3px",
        display: "inline-block",
        color: "black",
      }}
    >
      {tag.value}
    </span>
  );
  const data = [
    { value: "jQuery", count: 25 },
    { value: "MongoDB", count: 18 },
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "CSS3", count: 20 },
    { value: "EJS", count: 22 },
    { value: "React", count: 17 },
    { value: "Python", count: 25 },
    { value: "Jest", count: 15 },
    { value: "MySql", count: 17 },
    { value: "React Native", count: 27 },
    { value: "Postgresql", count: 30 },
    { value: "MongoDB", count: 15 },
    { value: "AWS", count: 30 },
    { value: "NPM", count: 18 },
    { value: "Vue", count: 21 },
  ];
  return (
    <>
      <div
        style={{
          background: "linear-gradient(#ffafbd, #ffc3a0)",
          height: "93vh",
          position: "relative",
          userSelect: "none",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div style={{ color: "white", padding: 50 }}>
            <h1 style={{ fontSize: 60 }}>About me</h1>
            <p style={{ fontSize: 23 }}>
              A developer who loves learning new technology also enthusiastic
              and motivated to constantly expand my knowledge and skills in the
              field of software development also eager to explore new
              programming languages, frameworks, tools, and methodologies, and
              are always seeking out new challenges to push themselves further.
            </p>
          </div>
          <TagCloud
            style={{ alignSelf: "center" }}
            tags={data}
            minSize={1}
            maxSize={5}
            renderer={customRenderer}
          />
        </div>
      </div>
    </>
  );
}

export default About;
