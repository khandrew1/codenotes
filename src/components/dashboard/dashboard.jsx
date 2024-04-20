import Sidebar from "./sidebar";
import Classes from "./classes";
const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-10/12 pt-6 mx-8">
        <p className="text-4xl font-bold pb-8">Your Courses</p>
        <Classes />
      </div>
    </div>
  );
};
export default Dashboard;
