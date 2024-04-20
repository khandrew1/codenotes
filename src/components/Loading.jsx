import { CgSpinner } from "react-icons/cg";

const Loading = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-1.5">
      <p className="text-2xl">Loading...</p>
      <CgSpinner className="text-3xl animate-spin" />
    </div>
  );
};

export default Loading;
