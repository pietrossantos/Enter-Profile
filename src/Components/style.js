import styled from "styled-components";

export const BackgroundThemeDark = styled.main`
display: flex;
align-items:center;
justify-content: center;
background-image: url(./public/bg-desktop.jpg);
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
`;

export const PartMain = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 20px;



`
export const ImagePietro = styled.img`
display: flex;
margin: auto;
width: 100px;
border-radius: 50%;
`
export const EmailProfile = styled.a`
text-decoration: none;
opacity: 0.75;


`

export const Buttons = styled.button`
min-width: 350px;
height: 50px;
background-color: #5D4E5C;
opacity: 0.35;
border-radius: 10px;
border: 3px;

&:hover{
    background-image: url(./public/bg-desktop-light.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transform: rotate3d(1,0,0, 360deg);
    transition: 1.5s;
    color: #12181E;
}


`