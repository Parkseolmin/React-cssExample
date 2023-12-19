import React, { useState } from 'react';

const obj = {
   name: '설민',
   title: '개발자',
   mentor: {
      name: '엘리',
      title: '시니어개발자',
   },
};
const name = '업데이트 이름';
const update = {
   ...obj,
   mentor: {
      ...obj.mentor,
      name,
   },
};

console.log(update);

export default function AppMentor() {
   const [person, setPerson] = useState({
      name: '설민',
      title: '개발자',
      mentor: {
         name: '엘리',
         title: '시니어개발자',
      },
   });
   return (
      <div>
         <h1>
            {person.name}는 {person.title}
         </h1>
         <p>
            {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
         </p>
         <button
            onClick={() => {
               const name = prompt(`what's your mentor's name?`);
               setPerson({
                  ...person,
                  mentor: {
                     ...person.mentor,
                     name,
                  },
               });
            }}
         >
            멘토 이름 바꾸기
         </button>
         <button
            onClick={() => {
               const title = prompt(`what's your mentor's title?`);
               setPerson({
                  ...person,
                  mentor: {
                     ...person.mentor,
                     title,
                  },
               });
            }}
         >
            멘토 타이틀 바꾸기
         </button>
      </div>
   );
}
