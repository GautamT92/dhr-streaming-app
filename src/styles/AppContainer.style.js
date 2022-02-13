import { Card, Container, Row } from 'react-bootstrap'
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
background-color: black !important;
`

export const StyledCard = styled(Card)`
background-color: black !important;
/* margin: 36px 30px 24px 36px; */
/* padding:    0 30px 0 30px; */
/* height:70%;  */
 /* width  :70% ; */
/* align-items: center; */
/* justify-content: center; */
`

export const MovieName = styled.div`
font-family: 'TitilliumWebLight';
font-size: 22px;
font-weight: 300;
color: #ffffff;
margin: 24px 0 90px 0;
`
export const MovieTitle = styled.h3`
color: #ffffff;
position: relative;
left:50px
`
export const MovieImage = styled.img`
width: 85%;
cursor: pointer;
box-shadow: 0 0 5px #000;
`

export const MovieSearch = styled.input`
width:90%;
margin: 0px 45px 30px 55px;
height: 30px;
`

export const StyledHeader = styled(Row)`
margin: 0 0 36px 0;
padding: 40px 0 0 0;
`