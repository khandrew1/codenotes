import React from "react";
import people from "../../public/students.jpg";
import Image from "next/image";
import canvas from "../../public/Excalidraw.png";
import Link from "next/link";
const Classcard = () => {
  return (
    <div className="w-full">
      <div
        id="about"
        className="py-8 grid grid-cols-2 bg-codenotes-black-400 z-15"
      >
        <div className="pl-16 -bold py-8">
          <p className="text-codenotes-offwhite text-4xl text">
            Why CodeNotes?
          </p>
          <p className="text-codenotes-offwhite pt-4">
            {
              "With at least 25,000 universities and 60,000 high schools in the world, thousands of realms of paper are used daily to print exams and in-class worksheets. That's why we created Codenotes. With the growing prevalence of iPads and tablets for note-taking and education, Codenotes allows students to hand-write code on a digital canvas, and then converts the hand-written code into computer-text to be compiled."
            }
          </p>
        </div>
        <div className="flex justify-end pr-16">
          <Image src={people} alt={"people"} className="w-8/12 rounded-lg" />
        </div>
      </div>
      <div
        id="features"
        className="bg-codenotes-black-400 text-codenotes-offwhite font-bold pt-4 flex justify-center text-4xl"
      >
        <p className="pb-2 border-b-2 border-codenotes-offwhite">Features</p>
      </div>
      <div className="py-8 grid grid-cols-2 bg-codenotes-black-400">
        <div className="flex justify-center pr-16">
          <Image src={canvas} alt={"canvas"} className="w-8/12" />
        </div>
        <div className="pl-16 -bold py-8">
          <p className="text-codenotes-offwhite text-4xl text">
            Integrated Canvas & Code Compiler
          </p>
          <p className="w-5/6 text-codenotes-offwhite pt-4">
            Codenotes integrates Excalidraw, a widely popular drawing canvas
            application, with a machine learning model that can accurately
            convert all written text to computer code. The code can then be
            automatically compiled. Click below to check it out.
          </p>
          <div className="bg-codenotes-black-100 rounded-full w-3/12 text-center p-2 transition ease-in-out hover:!bg-opacity-60 hover:scale-[1.2] duration-300">
            <Link
              href="/canvas"
              className="no-underline text-codenotes-offwhite"
            >
              Canvas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classcard;
