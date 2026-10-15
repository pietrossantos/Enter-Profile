# Enter-Profile | Página de links pessoais

Projeto pessoal desenvolvido por **Pietro Candido** para praticar criação de interfaces em **React**, estilização com **Styled-components** e organização de uma página de links para redes sociais.

## Sobre o projeto

O Enter-Profile apresenta uma foto de perfil, identificação do autor, botões de acesso a redes sociais e uma área com ícones de contato. A interface utiliza fundo ilustrado, efeitos de hover e uma adaptação básica para telas menores.

## Funcionalidades presentes no código

- Foto e identificação do perfil
- Links para Instagram, LinkedIn e GitHub
- Ícones de acesso a redes sociais e contato
- Efeitos visuais ao passar o cursor sobre os botões
- Media query para ajustar a largura dos botões em telas menores

> **Estado atual:** projeto de estudo em revisão. Os links, os imports dos ícones e alguns aspectos de acessibilidade foram corrigidos. O funcionamento completo ainda precisa ser validado por execução.

## Tecnologias

- React 18
- JavaScript
- Styled-components
- Vite 4
- CSS e media queries

## Executar localmente

**Pré-requisitos:** Node.js e npm.

```bash
git clone https://github.com/pietrossantos/Enter-Profile.git
cd Enter-Profile
npm install
npm run dev
```

Abra o endereço indicado pelo Vite no terminal.

## Comandos disponíveis

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Estrutura principal

- `main.jsx` — entrada da aplicação React
- `src/Components/EnterProfile.jsx` — interface e links do perfil
- `src/Components/style.js` — componentes estilizados
- `src/assets/` — ícones SVG
- `public/` — foto de perfil e imagens
- `device.js` — pontos de quebra para estilos responsivos

## Melhorias planejadas

- [x] Corrigir a capitalização dos imports SVG
- [x] Conectar o botão de portfólio ao site publicado
- [x] Adicionar `rel="noopener noreferrer"` aos links externos com `target="_blank"`
- Revisar responsividade, acessibilidade e execução do build
- Atualizar dependências após verificar compatibilidade

## Autor

**Pietro Candido** — [GitHub](https://github.com/pietrossantos) · [LinkedIn](https://www.linkedin.com/in/pietrocandidocs/) · [Portfólio](https://my-portifolio-drab.vercel.app/)
