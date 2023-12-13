import Form from "../components/form/form.tsx";
import {useState} from "react";
import Watch from "../components/watch/watch.tsx";

function App() {
    const [watches, setWatches] = useState<[] | {name: string, timezone: string}[]>([])
    return (
    <>
      <Form changeWatches={setWatches}/>
        <div className={'flex flex-row justify-center'}>
            {!!watches && watches.map((item, index) => <Watch watches={watches} changeWatches={setWatches} key={index} index={index} name={item.name} timezone={item.timezone}/>)}
        </div>
    </>
  )
}

export default App
