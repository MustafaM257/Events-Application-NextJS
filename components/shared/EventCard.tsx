import { IEvent } from "@/lib/mongodb/db/models/event.model";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import arrowImage from "@/public/assets/icons/arrow.svg";
import editImage from "@/public/assets/icons/edit.svg";
import { auth } from "@clerk/nextjs";
import { EventDelete } from "./EventDelete";

type EventCardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};
const EventCard = ({ event, hasOrderLink, hidePrice }: EventCardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = event.organizer?._id.toString() === userId;
  return (
    <div className="group relative flex min-h-72 w-full max-w-96  flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-0 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT  CREATOR */}
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-grey-50 p-3 shadow-2xl transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src={editImage} alt="Edit Event" width={20} height={20} />
          </Link>
          <EventDelete eventId={event._id} />
        </div>
      )}
      <Link
        href={`/events/${event._id}`}
        className="flex min-h-56 flex-col gap-3 p-5 md:gap-4"
      >
        {!hidePrice && (
          <div className="flex gap-2 ">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
              {event.category?.name}
            </p>
          </div>
        )}
        <p className="p-medium-16 md:p-medium-18 text-gret-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.title}
        </p>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>
          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2 ">
              <p className="text-primary-500 ">View order details</p>
              <Image src={arrowImage} alt="View Order" width={10} height={10} />
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
