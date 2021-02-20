import {createGlobalStyle} from "styled-components";
import IRANSansMediumwebwoff2 from '../assets/fonts/iranSans/IRANSans-Medium-web.woff2';
import IRANSansMediumwebwoff from '../assets/fonts/iranSans/IRANSans-Medium-web.woff';
import IRANSansMediumwebttf from '../assets/fonts/iranSans/IRANSans-Medium-web.ttf';
import IRANSansMediumwebeot from '../assets/fonts/iranSans/IRANSans-Medium-web.eot';


export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'IRANSans-web';
    src: url(${IRANSansMediumwebeot});
    src: url(${IRANSansMediumwebeot}) format('eot'), 
    url(${IRANSansMediumwebwoff2}) format('woff2'),
    url(${IRANSansMediumwebwoff}) format('woff'),  
    url(${IRANSansMediumwebttf}) format('ttf');
    font-weight: 200;
    font-style: normal;
}
*{
    font-family: 'IRANSans-web','Roberto', sans-serif;
    direction:rtl;   
    margin:0;
    padding:0;
    box-sizing: border-box;

}
`