import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const AppButtonsContainer = styled.div`
    display: flex;
    margin-left: 1rem;
    gap: 2rem;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

  ${theme.breakpoints.sm}{ max-width: 540px  }
  ${theme.breakpoints.md}{ max-width: 720px  }
  ${theme.breakpoints.lg}{ max-width: 960px  }
  ${theme.breakpoints.xl}{ max-width: 1140px }
    
`

const ButtonsContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <AppButtonsContainer>
        {children}
    </AppButtonsContainer>
);

export default ButtonsContainer;