
import React, { useState } from 'react';
import logo from './assets/Fade-background.png';
import { Button } from './components/ui/button';
import { ProgressDemo } from './components/ui/demo/progressDemo';

const App = () => {
  const [showSite, setShowSite] = useState('hidden');
  const [hideButton, setHideButton] = useState(' w-[100%] h-[100%]');

  const showButton = () => {
    setShowSite('');
    setHideButton('opacity-0 hidden -z-100');
  }

  return (
    <div>
      <Button onClick={showButton} className={hideButton}>Begin</Button>
      <div className={showSite}>
        <div className=' text-center place-content-center'>
          Lorem ipsum
          <div className=''>
            <ProgressDemo></ProgressDemo>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App