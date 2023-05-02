import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <div
        className="navbar bg-base-100"
        style={{ backgroundColor: "#ffafbd", position: "relative", zIndex: 1 }}
      >
        <div className="navbar-start">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} style={{ color: "#fafafa" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/about`} style={{ color: "#fafafa" }}>
                About
              </Link>
            </li>

            <li>
              <Link to={`/portfolio`} style={{ color: "#fafafa" }}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
