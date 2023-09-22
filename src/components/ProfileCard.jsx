import React, { Component } from "react";
import '../App.css';
import styled, {css} from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  display: flex;
  flex-direction: column;
  ${(props) => props.background && css`
  background: ${(props) =>props.background}; `};
`;

const CardImage = styled.img`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-radius: 60px;
  margin-top: 10px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  outline: none; /* Remove the button outline on focus */

  &:hover {
    background-color: #0056b3;
  }
`;

function ProfileCard(props){
    const handleButtonClick = () => {
        window.open("https://github.com/"+props.github, "_blank");
      };
    
    return (
    <CardContainer background={props.background}>
        <CardImage src={props.avatar} />
        <CardContent>
            <CardTitle>{props.name}</CardTitle>
            <CardDescription>{props.nim}</CardDescription>
            <CardDescription>Github : {props.github}</CardDescription>
            <StyledButton onClick={handleButtonClick}>Github Profile</StyledButton>
        </CardContent>
    </CardContainer>
    );
}

export default class Profile extends Component{
    render(){
        return(
            <div className="User-info">
                <ProfileCard
                    name="Jordano Iqbal Darmawan"
                    nim="21120120130073"
                    avatar="https://avatars.githubusercontent.com/u/79011617?v=4"
                    github="jordanoid"
                    background="#33333f"
                />
            </div> 
        )
    }
}

