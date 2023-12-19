import React, { useState } from 'react';

export default function test() {
   const initialPerson = {
      name: 'John',
      title: '개발자',
      mentors: [
         {
            name: '밥',
            title: '시니어개발자',
         },
         {
            name: '제임스',
            title: '주니어개발자',
         },
      ],
   };
   const [person, setPerson] = useState(initialPerson);
   const handleUpdate = () => {
      const prevName = prompt('누구의 이름을 바꾸고 싶으쇼?');
      const current = prompt('이름 뭐로 할꺼요?');
      setPerson((prev) => ({
         ...prev,
         mentors: prev.mentors.map((mentor) =>
            mentor.name === prevName ? { ...mentor, name: current } : mentor
         ),
      }));
   };

   const handleDelete = () => {
      const delName = prompt('누구 삭제할거요?');
      setPerson((prev) => ({
         ...prev,
         mentors: prev.mentors.filter((mentor) => mentor.name !== delName),
      }));
   };

   const handleAdd = () => {
      const newName = prompt(`추가할 멘토의 이름을 적어주세요.`);
      const newTitle = prompt(`추가할 멘토의 타이틀을 적어주세요.`);
      setPerson((prev) => ({
         ...prev,
         mentors: [prev.mentors, { newName, newTitle }],
      }));
   };
   return (
      <div>
         <h1>
            {person.name}는 {person.title}
         </h1>
         <p>{person.name}의 멘토는 :</p>
         <ul>
            {person.mentors.map((mentor, index) => (
               <li key={index}>
                  {mentor.name} ({mentor.title})
               </li>
            ))}
         </ul>
         <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
         <button onClick={handleAdd}>멘토 추가하기</button>
         <button onClick={handleDelete}>멘토 삭제하기</button>
      </div>
   );
}
