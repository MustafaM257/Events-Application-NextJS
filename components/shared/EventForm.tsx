"use client";
import Image from "next/image";
import locationImage from "@/public/assets/icons/location-grey.svg";
import calendarImage from "@/public/assets/icons/calendar.svg";
import dollarImage from "@/public/assets/icons/dollar.svg";
import linkImage from "@/public/assets/icons/link.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { eventFormSchema } from "@/lib/forms/validator";
import { eventDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import { FileUploader } from "./FileUploader";
import { useUploadThing } from "@/lib/uploadthing";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { createEvent, updateEvent } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/mongodb/db/models/event.model";
// Props
type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

// Event Logic

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  // console.log("user id", userId);
  // Form default values: (Note that eventDefaultValues are declared in constants dir and imported here)

  const defaultValues =
    event && type === "Update"
      ? {
          ...event,
          startDateTime: new Date(event.startDateTime),
          endDateTime: new Date(event.endDateTime),
        }
      : eventDefaultValues;
  // 1. Define your form.
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: defaultValues,
  });
  const { startUpload } = useUploadThing("imageUploader");

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    const eventData = values;
    let uploadedImageUrl = values.imageUrl;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) return;
      uploadedImageUrl = uploadedImages[0].url;
    }
    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: "/profile",
        });

        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (type === "Update") {
      if (!eventId) {
        router.back();
        return;
      }
      try {
        const updatedEvent = await updateEvent({
          userId,
          event: { ...values, imageUrl: uploadedImageUrl, _id: eventId },
          path: `/events/${eventId}`,
        });

        if (updatedEvent) {
          form.reset();
          router.push(`/events/${updatedEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Event Title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-14 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src={locationImage}
                      alt="Location icon"
                      width={25}
                      height={25}
                    />
                    <Input
                      placeholder="Event location or Online"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-14 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src={calendarImage}
                      alt="Calender icon"
                      width={25}
                      height={25}
                      className="filter-grey"
                    />
                    <p className="ml-4 whitespace-nowrap text-grey-600">
                      Start Date:
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={"MMMM d, yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-14 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src={calendarImage}
                      alt="Calender icon"
                      width={25}
                      height={25}
                      className="filter-grey"
                    />
                    <p className="ml-4 whitespace-nowrap text-grey-600">
                      End Date:
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={"MMMM d, yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-14 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src={dollarImage}
                      alt="Price icon"
                      width={25}
                      height={25}
                      className="filter-grey"
                    />
                    <Input
                      type="number"
                      placeholder="Price"
                      {...field}
                      className="input-field"
                    />
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center ">
                              <label
                                htmlFor="isFree"
                                className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Free Ticket
                              </label>
                              <Checkbox
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                id="isFree"
                                className="mr-2 h-5 w-5 border-2 border-primary-500"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-14 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src={linkImage}
                      alt="Link icon"
                      width={25}
                      height={25}
                    />
                    <Input
                      placeholder="URL"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          size={"lg"}
          className="button col-span-2 w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting.." : `${type} Event`}
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
