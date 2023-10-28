import TicketForm from "../../(components)/TicketForm";

const getTicketById = async id => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
      method: "GET",
    });
    if (res) return res.json();
  } catch (error) {
    console.error(error);
  }
};

const TicketPage = async ({ params }) => {
  const isEditMode = params.id === "new" ? false : true;
  let updatedTicketData = {};
  if (isEditMode) {
    const data = await getTicketById(params.id);
    updatedTicketData = data.ticket;
  } else {
    updatedTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updatedTicketData} />;
};

export default TicketPage;
