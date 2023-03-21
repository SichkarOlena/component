import React, {Component, useEffect, useState} from 'react';

const LearnHooks = ()=> {
    const [coords, setCoords] = useState({x:0, y:0});
    const [amount, setAmount] = useState(0);
    const handleMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY,
        });
    };
    const handleClick = () => {
        setAmount((amount) => amount + 1);
    };
    // window.addEventListener('click' handleClick)
    // document.body.addEventListener('click', handleClick)
useEffect(()=> {
    document.body.addEventListener('click', handleClick);
});
        return (
            <div onMouseMove={handleMove} onClick={handleClick} style = {{backgroundColor: "pink"}}>
                <p>coords x: {coords.x} </p>
                <p>coords y: {coords.y} </p>
                <p> amount click: {amount} </p>
            </div>
        );

};
// LearnHooks.propTypes = {};
export default LearnHooks;








// const LearnHooks = ()=> {
//     const [count, setCount] = useState(0);
//     const [step, setStep] = useState(1);
//
//
//     const  add = () => {
//        setCount((count)=> count+step)
//    };
//     const  sub = () => {
//         setCount((count)=> count-step)
//     };
//
//     const handleInput = ({target: {value}}) => {setStep (value)}
//         return (
//             <div>
//                 <h2>Count: {count}</h2>
//                 <button onClick={add}>+</button>
//                 <button onClick={sub}>-</button>
//                 <input type="number" value = {step} onChange={handleInput}/>
//             </div>
//         );
//
// }
// LearnHooks.propTypes = {};
// export default LearnHooks;