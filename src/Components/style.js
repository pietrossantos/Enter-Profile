import styled from "styled-components";
import device from "../../device";

export const BackgroundThemeDark = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm380-07-knygap6j.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=0dd39c2c2b16e056202f50521b98f800);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const PartMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const ImagePietro = styled.img`
  display: flex;
  margin: auto;
  width: 115px;
  border-radius: 50%;
`;
export const EmailProfile = styled.a`
  text-decoration: none;
  opacity: 0.85;
  padding-bottom: 15px;
`;

export const Buttons = styled.button`
  min-width: 350px;
  height: 50px;
  background-color: #5d4e5c;
  opacity: 0.54;
  border-radius: 10px;
  border: 3px;

  @media ${device.tablet} {
    min-width: 280px;
  }
  &:hover {
    background-image: url(./bg-desktop-light.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transform: rotate3d(1, 0, 0, 360deg);
    transition: 1.5s;
    color: #12181e;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 20px;
  a {
    padding: 8px;
  }
  a:hover {
    display: flex;
    align-items: center;
    background: #3e3347;
    border-radius: 50%;
  }
`;
