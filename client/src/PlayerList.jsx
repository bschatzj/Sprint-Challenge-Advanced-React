import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 50%;
background: green;
color: purple;

`


export default function PlayerList(props){
    return (
        <Card>
            <h1>Name: {props.name}</h1>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
        </Card>
    )
}