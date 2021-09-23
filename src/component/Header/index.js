import React from "react";
import styled from "styled-components";
import gambar from "./Search.png";

const Container = styled.div`
    margin: auto;
    max-width: 1200px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
   h1{
       fontSize: 20px;
       color: #de950c;
   }    
`;

const Link = styled.div`
    a{
        text-decoration: none;
        margin-right: 15px;
        color: grey;
        &:hover{
            color: black;
        }
    } 
`;

const Search = styled.div`
    input {
        margin-right: 10px;
        outline: 0;
        border-width: 0 0 1px;
        border-color: blue
        &:focus{
            border-color: green
        }
    }
    button{
        padding: 0;
        border: none;
        background: none;
    }
    img{
        width:20px;
    }
`;

class Header extends React.Component{
    render(){
        return(
          <Container>
              <Logo>
                  <h1>Bombon</h1>
              </Logo>
              <Link>
                  <a href="https://google.com">Home</a>
                  <a href="https://google.com">About</a>
                  <a href="https://google.com">Program</a>
                  <a href="https://google.com">Contact</a>
              </Link>
              <Search>
                  <input/><button><img src={gambar} alt="Search"/></button>
              </Search>
          </Container>
        );
    }
}

export default Header;