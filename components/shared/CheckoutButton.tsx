"use client";
import { IEvent } from "@/lib/mongodb/db/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";
const CheckoutButton = ({ event }: { event: IEvent }) => {
  const isEventFinished = new Date(event.endDateTime) < new Date();
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <div className="flex items-center gap-3">
      {/* Cannot buy finished events */}
      {isEventFinished ? (
        <p className="p-2 text-red-500">
          Sorry, tickets are not longer available
        </p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button rounded-full " size={"lg"}>
              <Link href="/sign-in">Sign in to buy tickets</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
