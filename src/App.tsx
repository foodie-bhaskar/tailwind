// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FC, useState } from 'react';
import { AppProps, Option  } from './App.type';


const App: FC<AppProps> = ({ title }) => {
  let sample = [ { name: 'Karnataka', value: 'KA' }, { name: 'Andhra Pradesh', value: 'AP' }];
  const [options, setOptions] = useState<Option[]>(sample);

  // setOptions();

  return (<>
    <h1 className="text-3xl font-bold underline">
      Hello world! {title}
    </h1>
    <ul>
      {options.map(o => <div>{o.name} : {o.value}</div>)}
    </ul>
    </>
  )
}

export default App
