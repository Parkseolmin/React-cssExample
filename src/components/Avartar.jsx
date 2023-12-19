import React from 'react';
import '../App.css';

export default function Avartar({ image, isNew }) {
   return (
      <div className='avatar'>
         <img className='photo' src={image} alt='avatar' />
         {isNew && <span className='new'>New</span>}
      </div>
   );
}
