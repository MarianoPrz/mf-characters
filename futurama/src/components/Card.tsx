import React from "react"
import styled from "styled-components"
import Typography from "./Typography";
import { theme } from "../theme"

const CardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.cardBg};
  background-clip: border-box;
  border-radius: .8rem;
  overflow: hidden;
  margin-bottom: 1rem;
`
const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  color: ${(props) => props.theme.color};
  h5 {
    font-size: 1rem;
    font-weight: 700;
  }
`
const CardImage = styled.img`
  /* max-height: 14rem; */
  width: 100%;
`


const Card: React.FC<{ name: string, image: string, gender: string, species: string }> = ({ name, image, gender, species }) => {
  return (
    <CardStyled className="card">
      <CardImage src={image} alt={image}></CardImage>
      <CardBody>
        <Typography tag="h5">{name}</Typography>
        <Typography tag="p">{gender}</Typography>
        <Typography tag="p">{species}</Typography>
      </CardBody>
    </CardStyled>
  )
}


export default Card;