import Link from "next/link";
const Classcard = ({ name, id, link }) => {
  return (
    <div className=" h-1/12 bg-codenotes-offwhite rounded-lg">
      <Link href={link}>
        <div className="">
          <div className="w-full h-36" />
          <div>
            <p className="text-lg text-white bg-codenotes-green-100 px-4 font-bold py-4 rounded-t-md">
              {name}
            </p>
            <p className="text-white bg-codenotes-green-100 px-4 pb-4 rounded-b">
              {id}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Classcard;
