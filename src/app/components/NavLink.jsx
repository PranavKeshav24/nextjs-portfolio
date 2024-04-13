import Link from "next/link";
import { Link as Linky } from "react-scroll";
{
  /* <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
            Go to first element inside container
        </Link>

          <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
            Go to second element inside container
        </Link> */
}
const NavLink = ({ title }) => {
  return (
    <Linky
      activeClass="active"
      to={title}
      spy={true}
      smooth={true}
      duration={500}
      className="block cursor-pointer py-2 pl-3 pr-4 dark:text-white sm:text-md rounded md:p-0 hover:text-secondary-500  text-black"
    >
      {title}
    </Linky>
  );
};

export default NavLink;
