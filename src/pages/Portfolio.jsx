import { useSelector } from "react-redux";
import CardPort from "../components/CardPort";
export default function Portfolio() {
  const data = useSelector((state) => {
    console.log(state);
    return state;
  });
  return (
    <>
      <div
        style={{
          background: "linear-gradient(#ffafbd, #ffc3a0)",
          height: "93vh",
          position: "relative",
        }}
      >
        <div
          className="grid grid-cols-3 gap-3 "
          style={{ justifyItems: "center" }}
        >
          {data.portofolio.map((el) => {
            return <CardPort data={el} key={el.id} />;
          })}
        </div>
      </div>
    </>
  );
}
