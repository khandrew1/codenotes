import Sidebar from "./classsidebar";
import Assignments from "./assignments";
const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-10/12 pt-6 mx-8">
        <p className="text-2xl font-bold pb-8">Your Assignments</p>
        <div className="grid grid-cols-7">
          <div className="font-bold pl-4 text-lg">Name</div>
          <div className="col-span-2 font-bold pl-4 text-lg">Status</div>
          <div className="col-span-3 font-bold pl-4 text-lg">Released</div>
          <div className="font-bold pl-4 text-lg">Due</div>
        </div>
        <div className="h-[0.5px] border border-codenotes-lightgrey mt-2" />
        <Assignments />
      </div>
    </div>
  );
};
export default Dashboard;
