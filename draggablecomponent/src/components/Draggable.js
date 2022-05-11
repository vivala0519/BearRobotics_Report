import React, { useState } from "react";
import styled from 'styled-components';

const Draggable = () => {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    
    const dragEndHandler = e => {
        if (750 < e.clientX && e.clientX < 1550 && 100 < e.clientY && e.clientY < 900){
            e.target.style.left = `${e.clientX}px`;
            e.target.style.top = `${e.clientY}px`;
            setPosX(e.clientX);
            setPosY(e.clientY);
        } else{
            e.target.style.left = `${posX}px`;
            e.target.style.top = `${posY}px`;
        }
    };

    return(
        <DraggableContainer>
            <Box draggable='true' onDragEnd={dragEndHandler}/>
        </DraggableContainer>
    )
}
  
const DraggableContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 800px;
    height: 800px;
    border-width: 5px;
    border-color: red;
    border-style: solid;
    background-color: white;
`
const Box = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: blue;
`
export default Draggable;