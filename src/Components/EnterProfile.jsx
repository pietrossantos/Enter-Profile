import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Youtube from "../assets/youtube.svg";
import {
  BackgroundThemeDark,
  ImagePietro,
  EmailProfile,
  PartMain,
  Buttons,
  Icons,
} from "./style";

function EnterProfile() {
  return (
    <>
      <BackgroundThemeDark>
        <PartMain>
          <ImagePietro src="./PietroProfile.png" alt="Image of Pietro" />
          <EmailProfile href="mailto: pietrosilva.0305@gmail.com">
            @pietrocandido
          </EmailProfile>
          <a href="https://www.instagram.com/pisilva_devguitar/" target="_blank">
            <Buttons>Instagram</Buttons>
          </a>
          <a href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank">
            <Buttons>LinkedIn </Buttons>
          </a>
          <a href="https://github.com/pietrossantos" target="_blank">
            <Buttons>GitHub</Buttons>
          </a>
          <Buttons>Meu Portfolio</Buttons>
          <Icons>
            <a href="https://www.instagram.com/pisilva_devguitar/" target="_blank">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="http://wa.me/21991909820" target="_blank">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCItZsns3QAVtu7X0YBeLonA" target="_blank">
              <img src={Youtube} alt="" />
            </a>
          </Icons>
        </PartMain>
      </BackgroundThemeDark>
    </>
  );
}

export default EnterProfile;
