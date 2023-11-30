import Link from "next/link";
import events from "../events";

export default function Events() {
  return (
    <div className="max-w-2xl mx-auto mt-24">
      <h1 className="text-5xl font-bold mb-4">Upcoming events</h1>
      <ul className="divide-y divide-gray-300 w-full ">
        {events.map((event) => (
          <li key={event.id} className="py-4">
            <Link
              className="flex items-center justify-between"
              href={`events/${event.id}`}
            >
              <div>
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-gray-500">Organized by: {event.organizer}</p>
              </div>
              <img
                src={event.image}
                alt={`Image for ${event.name}`}
                className="w-16 h-16 object-cover rounded-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
