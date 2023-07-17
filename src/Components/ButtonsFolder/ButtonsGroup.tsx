import React from "react";

import { ButtonContainer } from "./ButtonStyle";

import Button from "./Button";

interface ButtonsGroupProps {
    status: number;
    handleStart: () => void;
    handlePause: () => void;
    handleReset: () => void;
    handleResume: () => void;
}

const ButtonGroup: React.FC<ButtonsGroupProps> = ({status, handleStart, handlePause , handleReset, handleResume}) => {
    return (
        <ButtonContainer>
            {status === 0 ?
             <Button onClick={handleStart} title="START"></Button>
            :
            ""}
            {status === 1 ?
            <ButtonContainer>
             <Button onClick={handlePause} title="PAUSE"></Button>
             <Button onClick={handleReset} title="RESET"></Button>
            </ButtonContainer>
            :
            ""}
            {status === 2 ?
            <ButtonContainer>
             <Button onClick={handleResume} title="RESUME"></Button>
             <Button onClick={handleReset} title="RESET"></Button>
            </ButtonContainer>
            :
            ""}
        </ButtonContainer>
    )
}

export default React.memo(ButtonGroup);