import { Button } from "../ui/button";
import Link from "next/link";
import Collection from "../shared/Collection";
const MyTickets = () => {
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
        {/* <Collection
          data={events?.data}
          emptyTitle="No Event Tickets Purchased Yet"
          emptyStateSubtext="That's okay! Check out some events below."
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        /> */}
      </section>
    </>
  );
};

export default MyTickets;
