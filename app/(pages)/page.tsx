// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Event Manager",
//   description: "Event Management Platform",
//   icons: {
//     icon: "/assets/images/logo.svg",
//   },
// };
import Collection from "@/components/shared/Collection";
import Hero from "@/components/home/Hero";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home() {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });
  console.log(events);
  return (
    <>
      <Hero />
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Hundreds of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search Categroies
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Check later"
          collectionType="All_events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
}
