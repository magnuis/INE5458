"use client";
import events from "@/app/events";
import React from "react";

const EventPage: React.FC = () => {
  const event = events[Math.floor(Math.random() * 6)];

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-lg">
        <img
          src={event.image} // Replace with the actual image URL or path
          alt="Event Image"
          className="w-full h-64 object-cover rounded mb-6"
        />

        <h1 className="text-3xl font-semibold mb-4">{event.name}</h1>
        <p className="text-gray-600 mb-4">
          Organized by: {`${event.organizer}`}
        </p>

        <p className="text-lg mb-6">{event.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-blue-500">
            {`Ticket Price: R$${event.price}`}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // onClick={handleBuyTicket} // Add your buy ticket logic here
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
