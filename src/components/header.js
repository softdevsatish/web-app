import React, { useState } from "react";

const Header = () => {
    const state = useState();

    const [count, setCount] = useState(0);

const addCount = () => {
    setCount( count+1);
console.log('Count Added');
}
const decCount = () => {
    setCount( count-1);
console.log('Count Decreased');
}

    return(
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Project Structure</h2>
                <h4 className="countDown">{count}</h4>
               <div className="countParent">  
               <button className="btnCount" onClick={addCount}>Plus</button>
               <button className="btnCount" onClick={decCount}>Minus</button>
               </div>
            </div>
        </div>
        
    );
}
export default Header;