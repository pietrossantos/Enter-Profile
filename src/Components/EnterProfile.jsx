import { BackgroundThemeDark, ImagePietro, EmailProfile, PartMain, Buttons } from "./style";


function EnterProfile() {


  return <>
  <BackgroundThemeDark >
    <PartMain>
     < ImagePietro src="./public/PietroProfile.png" alt="Image of Pietro" />
     <EmailProfile href="mailto: pietrosilva.0305@gmail.com">@pietrocandido</EmailProfile>
    
     <Buttons>Instagram</Buttons>
     <Buttons>LinkedIn </Buttons>
     <Buttons>GitHub</Buttons>
     <Buttons>Meu Portfolio</Buttons> </PartMain>
  </BackgroundThemeDark >

  </>;
}

export default EnterProfile;
