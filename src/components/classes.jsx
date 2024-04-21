import { classes } from "@/data/classes";
import Classcard from "@/components/classcard";

const Classes = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {classes.map((CLASS, index) => (
        <Classcard
          key={index}
          name={CLASS.name}
          id={CLASS.id}
          link={CLASS.link}
        />
      ))}
    </div>
  );
};

export default Classes;
