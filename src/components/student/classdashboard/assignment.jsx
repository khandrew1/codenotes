import Link from "next/link";
const Assignment = ({ name, status, released, due, link }) => {
  return (
    <div>
      <div className="grid grid-cols-7 my-4">
        <Link href={link} className="underline">
          <div className="font-bold pl-4">{name}</div>
        </Link>
        <div className="col-span-2 font-bold pl-4">{status}</div>
        <div className="col-span-3 font-bold pl-4">{released}</div>
        <div className="font-bold pl-4">{due}</div>
      </div>
      <div className="h-[0.5px] border border-codenotes-lightgrey" />
    </div>
  );
};
export default Assignment;
