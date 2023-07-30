import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export const CardLayoutStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const CardLayoutColStyle = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  ${CardLayoutStyle} & {
    position: relative;
    width: 100%;
    ${theme.breakpoints.sm} {
      flex: 0 0 100%;
      max-width: 100%;
    }
    ${theme.breakpoints.md} {
      flex: 0 0 50%;
      max-width: 50%;
    }
    ${theme.breakpoints.lg} {
      flex: 0 0 25%;
      max-width: 25%;
    }
    ${theme.breakpoints.xl} {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
`;

export const CardLayoutCol: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <CardLayoutColStyle>{children}</CardLayoutColStyle>;
};

export const CardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CardLayoutStyle className="card-container">{children}</CardLayoutStyle>
    );
};
