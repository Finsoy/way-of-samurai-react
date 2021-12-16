import React, { useState } from 'react';

const News = (props) => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((prevState) => prevState + 1);


    return (
        <div>
            News
          <h1>{count}</h1>
          <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default News;
