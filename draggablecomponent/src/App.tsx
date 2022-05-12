import React from 'react';
import styled from 'styled-components';
import Draggable from './components/Draggable';

export default function App() {
    return (
    <Page>
        <Draggable/>
    </Page>
    )
}

const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: black;
    width: 1000px;
    height: 1000px;
`
