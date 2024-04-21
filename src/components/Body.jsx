import React from "react";
import people from "../../public/students.jpg";
import Image from "next/image";

const Classcard = () => {
  return (
    <div className="w-full">
      <div className="py-8 grid grid-cols-2 bg-codenotes-black-400">
        <div className="pl-16 -bold py-8">
          <p className="text-codenotes-offwhite text-4xl text">
            Why CodeNotes?
          </p>
          <p className="text-codenotes-offwhite">
            Bullshit please help me chatgpt
          </p>
        </div>
        <div className="flex justify-end pr-16">
          <Image src={people} alt={"people"} className="w-8/12 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Classcard;
