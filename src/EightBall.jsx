import React, { useState } from 'react';

const EightBall = ({ answers }) => {
   const [currentAnswer, setCurrentAnswer] = useState({ msg: "Think of a Question", color: "black" });

   const handleClick = () => {
      const randomIndex = Math.floor(Math.random() * answers.length);
      setCurrentAnswer(answers[randomIndex]);
   };

   return (
      <div style={{ backgroundColor: currentAnswer.color, width: '200px', height: '200px', padding: '20px', borderRadius: '50%', cursor: 'pointer' }} onClick={handleClick}>
         <h4 style={{ margin: '0px', position: 'relative', top: '45%' }}>{currentAnswer.msg}</h4>
      </div>
   );
};

export default EightBall;

