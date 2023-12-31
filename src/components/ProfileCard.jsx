import React, { Component } from "react";
import '../App.css';
import styled, {css} from 'styled-components';

const CardContainer = styled.div`
  width: 650px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => props.background && css`
  background: ${(props) =>props.background}; `};
`;

const CardImage = styled.img`
    width: 250px;
    height: 250px; 
    border-radius: 10%;
    margin: 10px;
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
  outline: none;

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
            <CardDescription>{props.email}</CardDescription>
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
                    email="jordanoid@students.undi.ac.id"
                    avatar="https://avatars.githubusercontent.com/u/79011617?v=4"
                    github="jordanoid"
                    background="#33333f"
                />
                <ProfileCard
                    name="Siti Sholekah"
                    nim="21120120120003"
                    email="sitisholekah@students.undip.ac.id"
                    avatar="https://avatars.githubusercontent.com/u/82700460?v=4"
                    github="sholekahh"
                    background="#141E46" 
                />
                <ProfileCard
                    name="Ariz Muhammad Fajar"
                    nim="21120120140171"
                    email="arizmuhammadfajar@students.undip.ac.id"
                    avatar="https://avatars.githubusercontent.com/u/82720584?v=4"
                    github="Ariz-99"
                    background="#d9e2e3"
                />
                <ProfileCard
                    name="Muhammad Ridwan"
                    nim="21120120140149"
                    email="muhammadridwan07@students.undip.ac.id"
                    avatar="https://avatars.githubusercontent.com/u/82718745?v=4"
                    github="mridwann7"
                    background="#6fa8dc"
                />
            </div> 
            
        )
    }
}

