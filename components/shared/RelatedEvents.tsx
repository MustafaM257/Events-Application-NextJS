import { getRelatedEventsByCategory } from "@/lib/actions/event.actions";
import Collection from "./Collection";
import { string } from "zod";
const RelatedEvents = async ({
  categoryId,
  eventId,
  page,
}: {
  categoryId: string;
  eventId: string;
  page: string;
}) => {
  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: categoryId,
    eventId: eventId,
    page: page,
  });
  // Page is for the pagination
  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      {/* Events related to the one visited, like same category */}
      <h2 className="h2-bold">Related Events</h2>
      <Collection
        data={relatedEvents?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Check later"
        collectionType="All_events"
        limit={6}
        page={1}
        totalPages={2}
      />
    </section>
  );
};

export default RelatedEvents;
