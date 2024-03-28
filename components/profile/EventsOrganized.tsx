import { getEventsByUser } from "@/lib/actions/event.actions";
import { Button } from "../ui/button";
import Link from "next/link";
import Collection from "../shared/Collection";
const EventsOrganized = async ({ userId }: { userId: string }) => {
  const organizedEvents = await getEventsByUser({
    userId,
    page: 1,
  });
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold">Events Organized</h3>
          <Button asChild className="button hidden sm:flex" size={"lg"}>
            <Link href={"/events/create"}>Create New Events!</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No Events Organized Yet"
          emptyStateSubtext="Let's get started! Create an event now."
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default EventsOrganized;
