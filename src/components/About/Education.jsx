import React from 'react'
import Education_item from './Education_item';

const Education = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl	font-medium font-roboto text-primary pb-9	">
          Education / Experiences
        </h2>
        <div className="grid grid-cols-2 gap-8 pb-24	">
          <Education_item year="2015 - 2016" border="border-b pb-5">
            I am a graduate of the design at the Newyork University.
          </Education_item>
          <Education_item year="2015 - 2016" border="border-b pb-5">
            I am a graduate of the design at the Newyork University.
          </Education_item>
          <Education_item year="2015 - 2016">
            I am a graduate of the design at the Newyork University.
          </Education_item>
          <Education_item year="2015 - 2016">
            I am a graduate of the design at the Newyork University.
          </Education_item>
        </div>
      </div>
    </section>
  );
}

export default Education