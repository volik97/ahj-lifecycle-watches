import React, {useEffect, useState} from "react";
import moment from "moment";
function Watch({name, timezone, index, watches, changeWatches}:{changeWatches:  React.Dispatch<React.SetStateAction<[] | {name: string, timezone: string}[]>>, watches: [] | {name: string, timezone: string}[], name: string, timezone:string, index: number}) {
    const now = () => moment().utcOffset(timezone).format('LTS')
    const [currentTime, setCurrentTime] = useState(now())
    useEffect(() => {
            setInterval(() => setCurrentTime(now), 1000)
            return clearInterval(setInterval(() => setCurrentTime(now), 1000))
        }, []);
    const watchesDelete = (name: string) => {
        changeWatches(watches.filter((item) => item.name !== name))
    }
    return (
        <div className='relative group flex flex-col p-5 items-center gap-4' id={`${index}`}>
            <span className={'group-hover:block hidden self-end absolute cursor-pointer'} onClick={() => watchesDelete(name)}>X</span>
            <span>{name}</span>
            <span>{currentTime}</span>
        </div>
    )
}

export default Watch;