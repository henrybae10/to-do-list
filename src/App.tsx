import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

/*
유저가 커스텀 카테고리를 생성할 수 있는 기능.
localStorage를 사용하여, 새로고침을 했을 때 이전의 데이터가 유지되는 기능(persistance).
*/

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');

    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    //word-spacing: -4px;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  * {
    box-sizing: border-box;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    background-color: ${(props) => props.theme.defaultBackgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: "Reddit Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table, th, tr {
    border: 1px solid black;
    border-collapse: collapse;
    border-spacing: 0;
  }
  table {
    width: 100%;
  }
  tr {
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<ToDoList />
		</>
	);
}

export default App;
