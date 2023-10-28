import Ticket from "../../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}