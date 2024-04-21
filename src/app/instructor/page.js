import ProtectedPage from "@/components/ProtectedPage";
import Dashboard from "@/components/instructor/dashboard/dashboard";
const Page = () => {
  return (
    <div>
      <ProtectedPage title="Instructor Dashboard" restriction="instructor">
        <Dashboard />
      </ProtectedPage>
    </div>
  );
};
export default Page;
