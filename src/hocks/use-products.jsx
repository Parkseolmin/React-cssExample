import { useEffect, useState } from 'react';

// 커스텀 훅 만들기
export default function useProducts({ checked }) {
   const [loading, setLoading] = useState(false); // 새로운 로딩 상태 변수 추가
   const [error, setError] = useState();
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setLoading(true);
      setError(undefined);
      fetch(`data/${checked ? 'sale_' : ''}products.json`)
         .then((res) => res.json())
         .then((data) => {
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
            setLoading(false);
         })
         .catch((error) => {
            setError(`${error}`);
         })
         .finally(() => setLoading(false));
      return () => {
         console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
      };
   }, [checked]);
   return [loading, error, products];
}
