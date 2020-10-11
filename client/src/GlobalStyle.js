import { createGlobalStyle } from "styled-components";
// @import url("https://fonts.googleapis.com/css2?family=Overpass&display=swap")
export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    font-family: 'Overpass';
    font-size: 20px;

}

.app {
background: #f8c100;
height:100%;
}

h1 {
    font-family: 'Overpass';
    text-align: center;
    text-shadow: 1px 1px 2px #fdd140;
    font-size: 2em;
}
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
}

`;
