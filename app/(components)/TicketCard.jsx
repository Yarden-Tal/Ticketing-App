import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Status from "./Status";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.desc}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 ">
        <div className="flex flex-col">
          <p className="text-xs my-1">{ticket.time}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <Status status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
