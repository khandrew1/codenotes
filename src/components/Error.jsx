const Error = ({ type, note, description }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <>
        <p className="text-4xl">{type}</p>
        <p className="text-xl">{note}</p>
        <p>{description}</p>
      </>
    </div>
  );
};

export default Error;
