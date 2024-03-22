import { Schema, models, model, Document } from "mongoose";

// Define the interface representing the document in MongoDB
export interface IEvent {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree?: boolean;
  url?: string;
  category?: {
    _id: string;
    name: string;
  };
  organizer?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

// Define the schema for the event
const EventSchema = new Schema<IEvent>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Define and export the Event model
const Event = models.Event || model<IEvent>("Event", EventSchema);
export default Event;
