import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start items-baseline">
      {[0, 1, 2, 3, 5].map(val => (
        <FontAwesomeIcon
          key={val}
          icon={faFire}
          className={`pr-1 ${
            priority > val ? "text-red-400" : "text-slate-400"
          }`}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
