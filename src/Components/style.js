import styled from "styled-components";

export const BackgroundThemeDark = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 48px 16px;
  box-sizing: border-box;
  background: linear-gradient(rgba(16, 18, 29, 0.72), rgba(16, 18, 29, 0.82)),
    url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm380-07-knygap6j.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=0dd39c2c2b16e056202f50521b98f800") center / cover no-repeat;
  color: #ffffff;
`;

export const PartMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 380px;
`;

export const ImagePietro = styled.img`
  display: block;
  width: 116px;
  height: 116px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
`;

export const EmailProfile = styled.a`
  color: #f4f4f7;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 10px;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid #fff; outline-offset: 4px; border-radius: 3px; }
`;

export const Buttons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 52px;
  padding: 12px 20px;
  color: #ffffff;
  background: rgba(93, 78, 92, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    background: #78637a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.24);
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

export const Icons = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 12px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transition: background-color 200ms ease, transform 200ms ease;
  }

  a:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: translateY(-2px);
  }

  a:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }

  img { width: 24px; height: 24px; }

  @media (prefers-reduced-motion: reduce) {
    a { transition: none; }
    a:hover { transform: none; }
  }
`;
