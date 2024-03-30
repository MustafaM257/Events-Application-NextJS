import EventsOrganized from "@/components/profile/EventsOrganized";
import EventsOrdered from "@/components/profile/EventsOrdered";
import { auth } from "@clerk/nextjs";
import { SearchParamProps } from "@/types";

const page = ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.orderPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;
  console.log("this is the type of ordersPage: ", typeof ordersPage);
  return (
    <>
      {/* Events Ordered */}
      <EventsOrdered userId={userId} page={ordersPage} />

      {/* Events Organized */}
      <EventsOrganized userId={userId} page={eventsPage} />
    </>
  );
};

export default page;
