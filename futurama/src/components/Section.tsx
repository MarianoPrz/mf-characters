import React from "react";
import styled, { css } from "styled-components";

export const SectionStyles = css`
  display: flex;
  padding: 5rem 0;
`
export const SectionBg = styled.div`
  ${SectionStyles}
  background-color: ${(props) => props.theme.sectionBg};
  padding: 0 0 5rem 0;
`

export const Section: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
    return (
        <SectionBg {...props}>{children}</SectionBg>
    )
}
