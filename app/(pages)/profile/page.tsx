import EventsOrganized from "@/components/profile/EventsOrganized";
import EventsOrdered from "@/components/profile/EventsOrdered";
import { auth } from "@clerk/nextjs";

const page = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      {/* Events Ordered */}
      <EventsOrdered userId={userId} />

      {/* Events Organized */}
      <EventsOrganized userId={userId} />
    </>
  );
};

export default page;
