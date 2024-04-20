import { assignments } from "@/data/assignments";
import Assignment from "./assignment";
const Assignments = () => {
  return (
    <div>
      {assignments.map((ASSIGNMENT, index) => (
        <Assignment
          key={index}
          name={ASSIGNMENT.name}
          status={ASSIGNMENT.status}
          released={ASSIGNMENT.released}
          due={ASSIGNMENT.due}
          link={ASSIGNMENT.link}
        />
      ))}
    </div>
  );
};
export default Assignments;
