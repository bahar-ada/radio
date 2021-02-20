import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import MSC from './assets/images/msclogo.jpg';
import Video from './assets/videos/Radio Videos.mp4';
//import Video from '../assets/videos/video.mp4'

const RadioVideo = () => {
    return (
        <VideoContainer>
            <VBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />

            </VBg>
            <VideoContent>
                <VideoItems>
                    <VideoH1>رادیو فولاد</VideoH1>
                    <VideoP> </VideoP>
                    <Button primary="true" big="true" round="true" to="/episodes">آرشیو</Button>
 
                </VideoItems>
            </VideoContent>
            <LogoContent>
                 <h1 color={'#fff'}>test</h1>
            </LogoContent>
        </VideoContainer>
    )
}

export default RadioVideo

const VideoContainer = styled.div`
background:#0c0c0c;
display: flex;
justify-content: center;
align-items:center;
height:110vh;
padding:0.1rem;
position:relative;
margin-top:-20px;
color:#fff

:before{
    content:"";
    position: absolute;
    top:0;
botton:0;
right:0;
left:0;
z-index:2;
background:linear-gradient(
    180deg, 
    rgba(0,0,0,0.2) 0% ,
    rgba(0,0,0,0.6) 100%), 
    linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0% ,
         transparent 100%)
}

`

const VBg = styled.div`
position: absolute;
top:0;
botton:0;
right:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`

const VideoContent = styled.div`
z-index:3;
height:calc(100vh - 80px);
max-height:100%;
padding: 0rem calc((100vw- 1300px)/2)
`
const LogoContent = styled.div`
z-index:4;
height:calc(100vh - 80px);
max-height:100%;
padding: 0rem calc((100vw- 1300px)/2)
`

const VideoItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height:100vh;
max-height:100%;
padding:0;
color:#fff;
line-height:1.1;
font-weight:bold;
`

const VideoH1 = styled.h1`
font-size:clamp(1.5rem, 6vw, 4rem);
margin-bottom:1.5rem;
letter-spacing:3px;
padding: 0 1rem;
`

const VideoP = styled.p`
font-size: clamp(1rem, 3vw, 3rem);
margin-bottom: 2rem;
font-weight:400;


`
