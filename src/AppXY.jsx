import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
   // const [x, setX] = useState(0);
   // const [y, setY] = useState(0);
   const [position, setPosition] = useState({ x: 0, y: 0 });

   const handleMove = (e) => {
      // setX(e.clientX);
      // setY(e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
   };
   return (
      <div className='container' onMouseMove={handleMove}>
         <div
            className='pointer'
            // style={{ transform: `translate(${x}px, ${y}px)` }}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
         ></div>
      </div>
   );
}
