import React, {useEffect} from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 40%;
background: green;
color: purple;
margin: 10px;

`


export default function PlayerList(props){
    useEffect(() => {
       console.log(document.body.class)
      }, [document.body.class]);
    return (
        <Card className ='Cards'>
            <h1>Name: {props.name}</h1>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
        </Card>
    )
}