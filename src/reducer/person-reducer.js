import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
   const initialPerson = {
      name: '엘리',
      title: '개발자',
      mentors: [
         {
            name: '밥',
            title: '시니어개발자',
         },
         {
            name: '제임스',
            title: '시니어개발자',
         },
      ],
   };
   // const [person, setPerson] = useState(initialPerson);
   const [person, dispatch] = useReducer(personReducer, initialPerson);

   // const handleUpdate = () => {
   //    const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
   //    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
   //    setPerson((prev) => ({
   //       ...prev,
   //       mentors: prev.mentors.map((mentor) =>
   //          mentor.name === prevName ? { ...mentor, name: current } : mentor
   //       ),
   //    }));
   // };
   const handleUpdate = () => {
      const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
      const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
      // setPerson((person) => ({
      //    ...person,
      //    mentors: person.mentors.map((mentor) => {
      //       if (mentor.name === prevName) {
      //          return { ...mentor, name: current };
      //       }
      //       return mentor;
      //    }),
      // }));
      dispatch({ type: 'updated', prevName, current });
   };

   const handleAdd = () => {
      const name = prompt(`추가할 멘토의 이름을 적어주세요.`);
      const title = prompt(`추가할 멘토의 타이틀을 적어주세요.`);

      // setPerson((person) => ({
      //    ...person,
      //    mentors: [...person.mentors, { name, title }],
      // }));
      dispatch({ type: 'added', name, title });
   };
   const handleDelete = () => {
      const name = prompt(`어떤 멘토를 삭제하고 싶은가요?`);
      // setPerson((person) => ({
      //    ...person,
      //    mentors: person.mentors.filter((mentor) => mentor.name !== name),
      // }));
      dispatch({ type: 'deleted', name });
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
