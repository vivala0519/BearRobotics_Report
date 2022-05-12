import React, { useState } from "react";
import styled from 'styled-components';
import { CanMoveFunc } from "./CanMove";
import bear from './bear.png';

const Draggable = () => {
    const [posX, setPosX] = useState<number>(0);
    const [posY, setPosY] = useState<number>(0);
    
    const dragEndHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const event = e.target as HTMLDivElement
        const ClientX: number = e.clientX
        const ClientY: number = e.clientY
        if (CanMoveFunc(ClientX, ClientY) === true){
            console.log('in here')
            event.style.left = `${ClientX}px`;
            event.style.top = `${ClientY}px`;
            setPosX(ClientX);
            setPosY(ClientY);
        } else{
            console.log('NO')
            event.style.left = `${posX}px`;
            event.style.top = `${posY}px`;
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
    border-color: skyblue;
    border-style: solid;
    background-color: white;
`
const Box = styled.div`
    position: absolute;
    width: 100px;
    height: 78px;
    background-image: url(${bear});
`
export default Draggable;