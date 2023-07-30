import React from 'react';
import styled from 'styled-components';


const NavbarStyled = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NavbarStyled className="appbar">
      {children}
    </NavbarStyled>
  )
}

export default Navbar;
