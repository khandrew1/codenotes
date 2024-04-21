import Dashboard from "@/components/instructor/classdashboard/dashboard";

export default function Page({ params }) {
  return (
    <div>
      {/* My Post: {params.slug} */}
      <Dashboard />
    </div>
  );
}
