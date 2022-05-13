import {useState} from "react";
import ReactMarkdown from 'react-markdown'

function UseStateHook() {
    const [counter,setCounter] =  useState(0);
    const [count,setCount] = useState({count:0})
    // regular
   const addButton = (e)=>{
       e.preventDefault()
       setCounter((prevValue)=> prevValue+1)
   }
   // regular
    const subButton = (e)=>{
        e.preventDefault()
        setCounter((prevValue)=> prevValue-1)
    }
    // object
    const addCount = (e)=>{
        e.preventDefault()
        setCount((prevValue)=>{
            return {...prevValue,count: prevValue.count + 1}
        })
    }
    //object
    const subCount = (e)=>{
        e.preventDefault()
        setCount((prevValue)=>{
            return {...prevValue,count: prevValue.count - 1}
        })
    }
  return (
    <div>
      <a href="https://blog.webdevsimplified.com/2020-04/use-state/">
        <h1>use state blog</h1>
      </a>
      <>
          <h1>without object</h1>
        <button onClick={addButton}>+</button>
        <span>{counter}</span>
        <button onClick={subButton}>-</button>
      </>
        <>
            <h1>using object</h1>
            <button onClick={addCount}>+</button>
            <span>{count.count}</span>
            <button onClick={subCount}>-</button>
        </>

    </div>
  );
}

export default UseStateHook;

