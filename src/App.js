import './styledComponents.js';
import { useState } from 'react';
import { MainContainer , Button  } from './styledComponents.js';
import Clock from './components/Clock';

const App = ()=>{
  const [isMounted , setIsMounted] = useState(true)

  const onToggle = ()=>{
    setIsMounted(isMounted => !isMounted)
  }
  return(
    <>
      <MainContainer>
        <Button onClick={onToggle}> {isMounted ? "Hide Clock" : "Show Clock"} </Button>
        {isMounted && <Clock /> }
      </MainContainer>
    </>
  )
}
export default App;
