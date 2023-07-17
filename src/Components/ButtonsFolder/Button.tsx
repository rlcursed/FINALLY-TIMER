import React from "react";

import { ButtonStyle } from "./ButtonStyle";

interface ButtonProps {
    onClick:() => void;
    title: string;
}

const Button: React.FC<ButtonProps> = ({onClick, title}) => {
    return (
            <ButtonStyle onClick={onClick}>{title}</ButtonStyle>   
    )
}

export default React.memo(Button);