import EventsOrganized from "@/components/profile/EventsOrganized";
import MyTickets from "@/components/profile/MyTickets";
import { auth } from "@clerk/nextjs";

const page = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      {/* Tickets */}
      {/* <MyTickets userId={userId} /> */}

      {/* Events Organized */}
      <EventsOrganized userId={userId} />
    </>
  );
};

export default page;
