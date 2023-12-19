import React, { useState } from 'react';
import useProducts from '../hocks/use-products';

export default function Products() {
   const [checked, setChecked] = useState(false);
   const [loading, error, products] = useProducts({
      checked: checked,
   });
   const handleChange = () => setChecked((prev) => !prev);

   return (
      <>
         <input
            id='checkbox'
            type='checkbox'
            value={checked}
            onChange={handleChange}
         />
         <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
         {loading ? (
            <p>Loading...</p>
         ) : (
            <ul>
               {products.map((product) => (
                  <li key={product.id}>
                     <article>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                     </article>
                  </li>
               ))}
            </ul>
         )}
      </>
   );
}
