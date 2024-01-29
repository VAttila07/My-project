
import React from 'react';
import logo from './assets/Fade-background.png';
import { Button } from './components/ui/button';

const App = () => {
  return (
    <><h1 className='text-9xl uppercase underline font-thunder'>
      Hello world!
    </h1>
    <Button>Hello Button</Button>
    <h1 className='text-9xl font-voyage'>
      Voyage
    </h1>
    </>
  )
}

export default App