import { useState } from "react";

const Count = () => {

    const [Counting, setcounting] = useState(0);
    // const [dCount, setDcount] = useState(10);

    const increment = () => setcounting(Counting + 1)
    const decrement = () => setcounting(Counting - 1)
    const reset = () => setcounting(0)

        console.log(Counting, 'increment');

    return (

        <div>
            <h1>Counter {Counting}</h1>
            <button style={{ color: "blue", background: "gray", margin: '10px' }} onClick={increment} >+</button>
            <button style={{ color: "blue", background: "gray" }} onClick={decrement}>-</button>
            <button style={{ color: "blue", background: "gray", margin: '10px' }} onClick={reset}>reset button</button>
                        

        </div>
    )
}

export default Count;