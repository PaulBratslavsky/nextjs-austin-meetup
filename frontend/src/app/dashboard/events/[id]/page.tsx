import getEventDetailsByIdLoader from "@/loaders/get-event-details-by-id-loader";
import PageHeading from "@/components/PageHeading";

import { EditEventForm } from "./EditEventForm";
import { EventImageForm } from "./EventImageForm";

export default async function ProfileRoute({
  params: { id },
}: {
  readonly params: { id: string };
}) {
  const eventData = await getEventDetailsByIdLoader(id);

  return (
    <div className="space-y-6">
      <PageHeading heading="Edit Event" subheading="Edit an existing event." />
      <EventImageForm eventData={eventData} />
      <EditEventForm eventData={eventData} />
    </div>
  );
}
