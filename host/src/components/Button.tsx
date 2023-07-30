import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const ButtonDefault = styled.button`
  padding: .85rem 1.3rem;
  border-radius: .25rem;
  border: 2px solid transparent;
  font-weight: 500;
  font-family: ${theme.fonts.body};
  font-size: .95rem;
  background-color: transparent;
  color: #000;
  border-color: #000;
  transition: all .2s ease-in-out;
`

const ButtonPrimaryStyled = styled(ButtonDefault)`
  background-color: ${(props) => props.theme.buttons.primary.backgroundColor};
  color: ${(props) => props.theme.buttons.primary.color};
  border-color: ${(props) => props.theme.buttons.primary.borderColor};
  &:hover{
    background-color: ${(props) => props.theme.buttons.primary.borderColor};
    color: white;
  }
`

const ButtonSecondaryStyled = styled(ButtonDefault)`
  background-color: ${(props) => props.theme.buttons.secondary.backgroundColor};
  color: ${(props) => props.theme.buttons.secondary.color};
  border-color: ${(props) => props.theme.buttons.secondary.borderColor};
`

export const ButtonPrimary: React.FC<{
    children: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}> = ({ children, onClick }) => {
    return (
        <ButtonPrimaryStyled onClick={onClick}>{children}</ButtonPrimaryStyled>
    )
}
export const ButtonSecondary: React.FC<{
    children: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}> = ({ children, onClick }) => {
    return (
        <ButtonSecondaryStyled onClick={onClick}>{children}</ButtonSecondaryStyled>
    )
}

