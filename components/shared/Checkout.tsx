import { IEvent } from "@/lib/mongodb/db/models/event.model";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async () => {
    console.log("Checkout");
  };
  return (
    <form action={onCheckout} method="POST">
      {/* Stripe functionality here */}
      <Button type="submit" role="link" size={"lg"} className="button sm:w-fit">
        {event.isFree ? "Get Free Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;