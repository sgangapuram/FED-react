import React from 'react';

const CounterDumbComponent = ({counter, dispatchIncrementCounterAction, dispatchDecrementCounterAction}) =>
 <p>
     <button onClick= {
         ()=>{  console.log('increased store by 1');
                dispatchIncrementCounterAction();
            }    
     }>Increment</button>

     counter: {counter} 
     
     <button onClick= {
         ()=>{console.log('decreased store by 1');
                 dispatchDecrementCounterAction();
            }
     }>Decrement</button>
     </p>

export default CounterDumbComponent;
