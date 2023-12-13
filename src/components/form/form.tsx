import React, {useState} from "react";

function Form({changeWatches}: {changeWatches:  React.Dispatch<React.SetStateAction<[] | {name: string, timezone: string}[]>>}) {
    const [data, setData] = useState({name: '', timezone:''})
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setData({...data, [id]: value})
    }
    return (
        <form className={'flex justify-center gap-2 py-5'} onSubmit={(event) => {event.preventDefault();changeWatches((prevState) => [...prevState, data])}}>
            <label htmlFor={'name'}>Название</label>
            <input onChange={handleInput} placeholder={'Moscow'} required={true} id={'name'} value={data.name}/>
            <label htmlFor={'timezone'}>Временная зона</label>
            <input onChange={handleInput} placeholder={'+03:00'} required={true} id={'timezone'} value={data.timezone}/>
            <button type={'submit'}>Добавить</button>
        </form>
    );
}

export default Form;