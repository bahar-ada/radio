import React from 'react';
import styled from 'styled-components';
import TodayEpisodeBG from './assets/images/radio1.jpg';
import { Button } from './Button';
import AudioPlayer from "react-modular-audio-player";

let audioFiles = [
    {
        src: './assets/mp3/AutumnWalt.mp3',
        title: "AutumnWaltz",
        artist: "The Beatles"
    },

];

const rearrangedPlayer = [
    {
        className: "adele",
        innerComponents: [
            {
                type: "play",
                style: {
                    width: "100%",
                    justifyContent: "center",
                    filter: "invert(100%)",
                    opacity: "0.4"
                }
            }
        ]
    }
];

const TodayEpisode = () => {
    return (
        <TodayEpisodeContainer>
            <TodayEpisodeContent>
            <h1>امروز</h1>
                <p>
                     29 بهمن ماه 1399
                </p>
            <AudioPlayer
                    audioFiles={audioFiles}
                    rearrange={rearrangedPlayer}
                    playerWidth="5rem"
                    iconSize="3rem"

            />
            </TodayEpisodeContent>
        </TodayEpisodeContainer>
    )
}

export default TodayEpisode

const TodayEpisodeContainer = styled.div`
background:linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%), url(${TodayEpisodeBG}) no-repeat center;
background-size: cover;
height:450px;
width:50%;
padding:5rem calc((100vw- 1300px)/2);
color: #fff;
display:relative;
justify-content:center;
align-items:center;
border-radius:15px;
margin: 25px auto;
`
const TodayEpisodeContent = styled.div`
display:flex;
flex-direction: column;
align-items:center;

h1 {
    text-align:center;
    margin-bottom: 1rem;
    font-size:clamp(1rem, 5vw, 3rem);
    padding:0 1 rem;
}

p {
    text-align:center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom:2rem;
}

form {
    z-index:10;
}
`
const FormWrap = styled.div`
input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right:1rem;
}

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
        margin-bottom:1rem;
        width: 100%;
        margin-right:0;
    }
}`
const PlayWrap = styled.div`
display:flex;
background:#F26A2E;
flex-direction:column;
align-itrems:center;
padding: 0 5rem;
border-radius:50px;
position:absolute;
top:420px;
font-size:12px;
right:70px

@media screen and (max-width:280px){
    padding: 0 1rem;
}
`
