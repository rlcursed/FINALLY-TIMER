import React, {useState, useCallback} from "react";

const AppLogic = () => {
    const[minutes, setMinutes] = useState<number>(0);
    const[seconds, setSeconds] = useState<number>(0);
    const[mseconds, setMseconds] = useState<number>(0);
    const[status, setStatus] = useState<number>(0);
    const[interv, setInterv] = useState<any>()
  


    const run = useCallback(() => {
        setMseconds(prevMseconds => {
            let updatedMs = prevMseconds + 1;
            if(updatedMs === 99){
                updatedMs = 0;
                setSeconds(prevSeconds => prevSeconds + 1);
            }
            return updatedMs;
        });
        setSeconds(prevSeconds => {
            if(prevSeconds === 60){
                setMinutes(prevMinutes => prevMinutes + 1);
                return 0;
            }
            return prevSeconds;
        });
        setMinutes(prevMinutes => {
            if(prevMinutes === 60){
                return 0;
            }
            return prevMinutes;
        });
    }, []);



    const handleStart = useCallback(() => {
        setStatus(1);
        run();
        setInterv(setInterval(run, 10))
    }, [run])

    const handlePause = useCallback(() => {
        setStatus(2);
        clearInterval(interv)
    }, [interv])

    const handleResume = useCallback(() => {
        setStatus(1);
        handleStart();
    }, [handleStart])

    const handleReset = useCallback(() => {
        setStatus(0);
        clearInterval(interv);
        setMinutes(0);
        setSeconds(0);
        setMseconds(0);
    }, [interv])

    return (
        {
            handleStart,
            handlePause,
            handleResume,
            handleReset,
            status,
            seconds,
            minutes,
            mseconds,
        }
    )
}

export default AppLogic;