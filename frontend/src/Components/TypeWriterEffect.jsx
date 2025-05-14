import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterEffect = () => {
  return (
    <div >
      {/* Top Line */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Typewriter
          words={["Bringing you Flavors from Around the World"]}
          loop={0}         
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          cursor
          cursorStyle="|"
        />
      </div>
      {/* Bottom Line */}
      <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        <Typewriter
          words={[" - Enjoy our diverse menu."]}
          loop={0}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={3000} 
          cursor
          cursorStyle="|"
        />
      </div>
    </div>
  );
};

export default TypeWriterEffect;
