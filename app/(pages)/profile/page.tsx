import EventsOrganized from "@/components/profile/EventsOrganized";
import MyTickets from "@/components/profile/MyTickets";

const page = () => {
  return (
    <>
      {/* Tickets */}
      <MyTickets />

      {/* Events Organized */}
      <EventsOrganized />
    </>
  );
};

export default page;
