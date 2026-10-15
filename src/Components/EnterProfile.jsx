import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import Youtube from "../assets/YouTube.svg";
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
    <BackgroundThemeDark>
      <PartMain>
        <ImagePietro src="/PietroProfile.png" alt="Foto de perfil de Pietro Candido" />
        <EmailProfile href="mailto:pietro.candido.work@gmail.com">
          @pietrocandido
        </EmailProfile>

        <Buttons href="https://www.instagram.com/c.s.pietro" target="_blank" rel="noopener noreferrer">
          Instagram
        </Buttons>
        <Buttons href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Buttons>
        <Buttons href="https://github.com/pietrossantos" target="_blank" rel="noopener noreferrer">
          GitHub
        </Buttons>
        <Buttons href="https://my-portifolio-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
          Meu Portfólio
        </Buttons>

        <Icons aria-label="Redes sociais e contato">
          <a href="https://www.instagram.com/c.s.pietro" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://wa.me/21991909820" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src={Whatsapp} alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCItZsns3QAVtu7X0YBeLonA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src={Youtube} alt="" />
          </a>
        </Icons>
      </PartMain>
    </BackgroundThemeDark>
  );
}

export default EnterProfile;
