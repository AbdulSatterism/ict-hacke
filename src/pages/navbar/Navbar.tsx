import { Link } from "react-router-dom";

const navbar = () => {
  const navItem = (
    <>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/">Home</Link>
      </li>

      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/h">Home</Link>
      </li>

      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/hh">Home</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-[#184d81]  max-w-screen-xl mx-auto print:hidden">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-[#184d81] z-10 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="avatar text-white items-center">
            <h1 className="text-xl font-semibold">Bangladesh ICT</h1>
          </div>
        </div>
        <div className="hidden navbar-center  lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default navbar;
