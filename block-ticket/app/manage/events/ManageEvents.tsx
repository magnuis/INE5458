"use client";
import { useState } from "react";
import web3 from "../../utils/web3";
import TicketContract from "../../../contracts/build/contracts/TicketContract.json";
import { useAuth } from "@/app/context/AuthContext";
import events from "@/app/events";
import Link from "next/link";

const TicketContractAddress = process.env.NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS;
const CreateEvent: React.FC = () => {
  const { _username } = useAuth();
  const [eventName, setEventName] = useState("");

  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const createEvent = async () => {
    try {
      // Instantiate your smart contract
      const contract = new web3.eth.Contract(
        TicketContract.abi,
        TicketContractAddress
      );

      // Assuming you have a connected wallet, so using the first account
      const accounts = await web3.eth.getAccounts();
      const currentAccount = accounts[0];

      // Call the createEvent function from your contract
      console.log(_username);
      if (_username != "") {
        await contract.methods.createEvent(eventName, _username).send({
          from: currentAccount,
        });
      }

      // Clear the input field after successful event creation
      setEventName("");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="container mt-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Your events</h1>
        <ul className="divide-y divide-gray-300 w-full max-w-md">
          {events.map((event) => (
            <li key={event.id} className="py-4">
              <Link
                className="flex items-center justify-between"
                href={`manage/events/${event.id}`}
              >
                <div>
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <p className="text-gray-500">
                    Organized by: {event.organizer}
                  </p>
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
        <h1 className="text-3xl font-bold mb-4 mt-20">
          Create new event for {`${_username}`}
        </h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={handleEventNameChange}
            className="p-2 border rounded-md w-2/3"
          />
          <button
            onClick={createEvent}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
