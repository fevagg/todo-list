function Nav() {
  return (
    <nav className="flex flex-row justify-end items-center w-auto h-10">
      <ul className="inline-flex">
        <li>
          <a href="/" className="text-indigo-500 font-semibold mx-5">
            Home
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fevagg/todo-list/blob/master/README.md"
            rel="noreferrer"
            target="_blank"
            className="text-indigo-500 font-semibold mx-5"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fevagg"
            className="inline-flex items-center text-indigo-500 font-semibold mx-5"
            rel="noreferrer"
            target="_blank"
          >
            Github
            <i className="fa fa-github-square mx-2" aria-hidden="true"></i>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
