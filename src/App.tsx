import React from 'react';


import TimerContainer from './Components/TimerContainer';

import { GlobalContainer } from './Components/TimerContainerStyles';


function App() {
  return (
   <GlobalContainer>
    <TimerContainer/>
   </GlobalContainer>
  );
}

export default App;
