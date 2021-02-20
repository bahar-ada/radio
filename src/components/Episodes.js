import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { AiFillAudio, AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { RiStopCircleFill } from 'react-icons/ri';
//import AudioPlayer, { handlePause } from "react-modular-audio-player";
import AudioFile from './assets/mp3/AutumnWalt.mp3'

let audio;
let audioFlag= false;
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


const Episodes = ({ heading }) => {
    const data = useStaticQuery(graphql`
    query TripQuery {
        allEpisodesJson {
          edges {
            node {
              alt              
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      
    `)

    function handleDownload() {
        console.log("clicked");
    }
    function handlePlayer() {
      audio = new Audio(AudioFile);
        audio.play();
        audioFlag= true;
    }
    function handlePause() {

        audio.pause();
    }    
    function handleStop() {

        audio.stop();
    }


    function getTrips(data) {
        const tripsArray = []
        data.allEpisodesJson.edges.forEach((item, index) => {
            tripsArray.push(
                <EpisodeCard key={index}>
                    <EpisodeImg
                        //src={item.node.img.childImageSharp.fluid.src} 
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid} />
                    <EpisodeInfo>
                        <TextWrap>
                            <AiFillAudio />
                            <EpisodeTitle>
                                {item.node.name}
                            </EpisodeTitle>
                            <DownloadButton>
                                <BsDownload onClick={handleDownload} />
                            </DownloadButton>

                        </TextWrap>
                       
                        <PlayWrap  >
                            <PlayButton>

                                <AiFillPlayCircle onClick={handlePlayer} />
                            </PlayButton>
                            
                            <PauseButton>

                                <AiFillPauseCircle onClick={handlePause} />
                            </PauseButton>
                     {/*        <StopButton>
                                <RiStopCircleFill onClick={handleStop}/>
                            </StopButton> */}

                        </PlayWrap>
                     
                    </EpisodeInfo>
                </EpisodeCard>

            )
        })
        return tripsArray
    }
    return (
        <EpisodeContainer>
            <EpisodesHeading>
                {heading}
            </EpisodesHeading>
            <EpisodeWrapper>
                {getTrips(data)}
            </EpisodeWrapper>
        </EpisodeContainer>
    )
}

export default Episodes

const EpisodeContainer = styled.div`
min-height:100vh;
padding: 5rem calc((100vw - 1300px)/2);
background:#fff;
color:#fff;
`
const EpisodesHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-align:center;
margin-bottom:5rem;
color:#000;
`
const EpisodeWrapper = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:10px;
justify-items:center;
padding: 0 2rem;

@media screen and (max-width: 1200px){
    grid - template - columns: 1fr 1fr;
}

@media screen and (max-width: 868px){
    grid - template - columns: 1fr ;
}
`
const EpisodeCard = styled.div`
line-height:2;
width:100%;
height:500px;
position:relative;
border-radius:10px;
transition:0.2s ease;
`
const EpisodeImg = styled(Img)`
height:100%;
max-width:100%;
position:relative;
border-radius:10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165,1);

&:hover{
     filter:brightness(100%)
}
`
const EpisodeInfo = styled.div`
display:flex;
flex-direction:column;
align-itrems:flex-start;
padding: 0 2rem;

@media screen and (max-width:280px){
    padding: 0 1rem;
}
`
const TextWrap = styled.div`
display:flex;
align-items:center;
position:absolute;
top:375px;
`
const EpisodeTitle = styled.div`
font-weight:400;
font-size:1rem;
margin-left:0.5rem
`
const PlayWrap = styled.div`
display:flex;
background:#F26A2E;
flex-direction:row;
align-itrems:center;
padding: 0 3rem;
border-radius:50px;
position:absolute;
top:420px;
font-size:12px;
right:85px

@media screen and (max-width:280px){
    padding: 0 1rem;
}
`

const PlayButton = styled.button`
background:transparent;
display: flex;
padding:5px;
color:#fff;
border:aliceblue;
font-size:40px;
cursor:pointer;

&:hover{
    filter:  invert(25%);   
    transform: translateY(-2px);
}
`
const PauseButton = styled.button`
background:transparent;
display: flex;
align-items:center;
padding:5px;
color:#fff;
border:aliceblue;
font-size:40px;
cursor:pointer;

&:hover{
    filter:  invert(25%);   
    transform: translateY(-2px);
}
`
const StopButton = styled.button`
background:transparent;
display: flex;
align-items:center;
padding:5px;
color:#fff;
border:aliceblue;
font-size:40px;
cursor:pointer;

&:hover{
    filter:  invert(25%);   
    transform: translateY(-2px);
}
`
const DownloadButton = styled.button`
background:transparent;
display: flex;
flex-direction:row;
align-items:center;
padding:5px;
color:#fff;
border:aliceblue;
font-size:20px;
cursor:pointer;

&:hover{
                        filter:  invert(25%);   
    transform: translateY(-2px);
}
`



