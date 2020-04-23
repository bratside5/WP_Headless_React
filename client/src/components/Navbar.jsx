import React from "react";
import tw from "twin.macro";

const Nav = tw.nav`flex bg-gray-900 min-w-full w-full max-h-full mx-auto justify-between overflow-hidden`;

const NavBrandContainer = tw.div`py-4 px-4 `;
const NavBrand = tw.a`text-lg text-gray-100`;

const NavLinkContainer = tw.div`py-4 px-4 items-center`;
const NavLink = tw.a`text-sm text-gray-100`;
const NavButton = tw.button`cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`;

const Navbar = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Nav>
      <NavBrandContainer>
        <NavBrand>
          Logo{" "}
          <span role="img" aria-label="jsx-a11y/aria-proptypes">
            🔥
          </span>
        </NavBrand>
      </NavBrandContainer>
      <NavLinkContainer>
        <NavLink>Link 1</NavLink>
        <NavButton>{/* <i className=""></i> */}</NavButton>
      </NavLinkContainer>
    </Nav>
  );
};

export default Navbar;
