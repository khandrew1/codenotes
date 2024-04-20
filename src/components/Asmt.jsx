const Asmt = ({ title, Name, points }) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[72%] bg-red-500"></div>
      <div className="w-[28%] flex items-end justify-center overflow-y-scroll">
        <div className="w-[90%] h-[97%]">
          <p className="text-2xl font-bold">Exam 3</p>
          <p>Student</p>
          <p className="text-lg font-bold">{Name}</p>
          <p>Total points</p>
          <p className="text-lg font-bold">{points}/30</p>
        </div>
      </div>
    </div>
  );
};

export default Asmt;
