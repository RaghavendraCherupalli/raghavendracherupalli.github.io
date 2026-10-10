
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md bg-opacity-90 backdrop-blur">
      <div className="flex-1">
        {/* Clicking this scrolls back to the very top */}
        <a href="#" className="btn btn-ghost normal-case text-xl font-bold">
          Research Portfolio
        </a>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><a href="#about">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#talks_and_teaching">Talks & Teaching</a></li>
          
          <li><a href='cv.pdf' target="_blank" rel="noreferrer" className="text-primary border border-primary ml-2">CV (PDF)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;