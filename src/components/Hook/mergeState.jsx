import React, { useState, useEffect, useCallback } from "react";
import Count from "./useCallback";

const MergeState = () => {
  //   const [count, setCount] = useState(0);

  //   const handleIncrease = useCallback(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, []);

  //   return (
  //     console.log("re-render componet MergeState"),
  //     (
  //       <>
  //         <Count onIncrease={handleIncrease} />
  //         <h1>{count}</h1>
  //       </>
  //     )
  //   );
  // };

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
    console.log("useEffect");
    // setCalculation(count * 2);
    // console.log(calculation);
    // return (()=> cleanup())
    // }, [count]);
  }, []);

  return (
    console.log("re-render in render()"),
    (
      <>
        <p>Count {count}</p>
        {/* <button onClick={() => setCount((c) => c + 1)}>+</button> */}
        <button onClick={() => setCount(count + 1)}>+</button>
        {/* setCount(count+1) */}
        {/* <p>Calculation {calculation}</p> */}
      </>
    )
  );
};
export default MergeState;
