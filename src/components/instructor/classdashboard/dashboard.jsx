import Sidebar from "../dashboard/sidebar";
import { assignments } from "@/data/instructorasmts";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-10/12 flex flex-col items-center overflow-y-scroll">
        <div className="w-[95%] flex mt-10 m-5 items-center justify-start">
          <p className="text-2xl font-semibold">CS_010_C</p>
          <p className="text-2xl text-gray-200 mx-3">|</p>
          <p className="">Spring 2024</p>
        </div>
        <div className="w-[95%] grid grid-cols-9">
          <p className="col-span-2">Active Assignments</p>
          <p>Points</p>
          <div className="col-span-2 flex justify-between">
            <p>Released</p>
            <p className="mr-7">Due</p>
          </div>
          <p>Submissions</p>
          <p>% Graded</p>
          <p>Published</p>
          <p>Regrades</p>
        </div>
        <hr className="w-[95%]" />
        <div className="w-[95%] grid grid-cols-9 font-light">
          {assignments.map((assignment, index) =>
            Object.entries(assignment).map(([key, value], idx) => (
              <div
                key={idx}
                className={`border-y-[1px] py-5 ${key === "name" ? "col-span-2" : ""}`}
              >
                {value}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
