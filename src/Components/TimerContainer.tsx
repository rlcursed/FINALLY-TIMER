import React from "react";

import Display from "./DisplayFolder/Display";

import ButtonGroup from "./ButtonsFolder/ButtonsGroup";

import AppLogic from "./AppLogic";

import { AppGlobalContainer } from "./TimerContainerStyles";

const TimerContainer = () => {
    const {
            handleStart,
            handlePause,
            handleResume,
            handleReset,
            status,
            seconds,
            minutes,
            mseconds,
    } = AppLogic();

    return (
        <AppGlobalContainer>
            <Display
            seconds={seconds}
            minutes={minutes}
            mseconds={mseconds}
            />
            <ButtonGroup
            status={status}
            handleStart={handleStart}
            handlePause={handlePause}
            handleResume={handleResume}
            handleReset={handleReset}
            />
        </AppGlobalContainer>
    )
}

export default React.memo(TimerContainer);