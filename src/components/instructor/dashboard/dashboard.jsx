import Classes from "@/components/classes";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-10/12 flex justify-center items-center">
        <div className="w-[94%] h-[90%]">
          <p className="text-2xl font-semibold">Your Courses</p>
          <p className="py-6">Spring 2024</p>
          <Classes />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
