
import React, { useState } from 'react';
import logo from './assets/Fade-background.png';
import { Button } from './components/ui/button';
import { ProgressDemo } from './components/ui/demo/progressDemo';

const App = () => {
  const [showSite, setShowSite] = useState(false);

  const showButton = () => {
    setShowSite(true);
  }

  return (
    <div>
      <Button onClick={showButton}>Begin</Button>
      <div className=' sticky z-50 place-content-center'>
        <ProgressDemo></ProgressDemo>
      </div>
    </div>
  )
}

export default App