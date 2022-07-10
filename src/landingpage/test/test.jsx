import React, { useState } from "react";

const IsClick = () => {
  const [isCheck, setIsCheck] = useState(true);
  return (
    <div>
      <button onClick={() => setIsCheck(!isCheck)}>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
};

export default IsClick;
