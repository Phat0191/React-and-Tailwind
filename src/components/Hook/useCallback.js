import React, { memo } from "react";

const Count = ({ onIncrease }) => {
  console.log("re-render Count");

  return (
    <>
      <h1> Test Memo and use Callback</h1>
      <button onClick={onIncrease}>click</button>
    </>
  );
};

export default memo(Count);
