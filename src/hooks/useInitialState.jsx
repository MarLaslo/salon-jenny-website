import { useState, useEffect } from "react";

function useInitialState(){
const [intialState, setIntialState] = useState(false);

useEffect(() => {
  const timeout = setTimeout(() => {
    setIntialState(true);
  }, 100);
  return () => clearTimeout(timeout);
}, []);


  return intialState;
};

export default useInitialState;