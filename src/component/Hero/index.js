import React from 'react';
import styled from 'styled-components';
import AssetHero from './AssetHero.png';


const Container = styled.div`
    margin: auto;
    max-width: 1200px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroRight = styled.div`
    margin: auto;
    button{
        border-radius: 5px;
        font-weight: bold;
        background: grey;
        color: white;
        padding: 10px 40px;
        margin-right: 10px;
        &:hover{
            background: #de950c;
            color: white;
            border-radius: 5px;
        }
    }
`;

const HeroLeft = styled.div`
      img{
          width:80%;
      }
`;

class HeroComponent extends React.Component{

    render(){
        return(
            <Container>
                <HeroLeft>
                    <img src={AssetHero}/>
                </HeroLeft>
                <HeroRight>
                    <h4>Halloween Charity 2021</h4>
                    <h1>Help Bombon Share Happiness Candy!</h1>
                    <p>Halloween is perfect for anyone looking for large-scale fundraising event ideas. let's share happiness candy with bombon</p>
                    <button>Join as a volunteer</button>
                    <button>Join as a donor</button>
                </HeroRight>
            </Container>
        );
    }
}

export default HeroComponent;