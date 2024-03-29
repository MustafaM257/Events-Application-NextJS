import { Button } from "../ui/button";
import Link from "next/link";
import Collection from "../shared/Collection";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/mongodb/db/models/order.model";
const EventsOrdered = async ({ userId }: { userId: string }) => {
  const orders = await getOrdersByUser({
    userId,
    page: 1,
  });
  console.log("orders", orders?.data);
  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  console.log("orderedevents", orderedEvents);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold">My Tickets</h3>
          <Button asChild className="button hidden sm:flex" size={"lg"}>
            <Link href={"/#events"}>Explore More Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No Event Tickets Purchased Yet"
          emptyStateSubtext="That's okay! Check out some events below."
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default EventsOrdered;
