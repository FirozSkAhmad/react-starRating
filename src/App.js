import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [rating, setRating] = useState(0);

  function clickHandler(starInd) {
    setRating(()=>starInd);
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((starInd) => {
        return (
          <span
            key={starInd}
            style={{
              color:
                starInd <= rating
                  ? starInd === rating
                    ? 'blue'
                    : 'red'
                  : 'black',
            }}
            onClick={() => clickHandler(starInd)}
          >
            *
          </span>
        );
      })}
    </div>
  );
}
