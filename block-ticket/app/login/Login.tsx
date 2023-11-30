"use client";

import React, { useState } from "react";
import TicketContract from "../../contracts/build/contracts/TicketContract.json";
import web3 from "../utils/web3";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const TicketContractAddress = process.env.NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS;

const Login: React.FC = () => {
  const { _username, _isOrganiser, login } = useAuth();
  const [isOrganiser, setIsOrganiser] = useState(true);
  const [username, setUsername] = useState("");
  // const [isSuccessful, setIsSuccessful] = useState(true);

  const toggleIsOrganiser = (isOrganiser: boolean) => {
    setIsOrganiser(isOrganiser);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkUserExistence();
  };

  const checkUserExistence = async () => {
    try {
      const contract = new web3.eth.Contract(
        TicketContract.abi,
        TicketContractAddress // Replace with your contract address
      );

      // Call the function from your smart contract that checks user existence
      const userExists = await contract.methods
        .checkUserExistence(username)
        .call();

      // setIsSuccessful(userExists[0]);
      console.log(userExists);
      if (userExists[0]) {
        login(username, !isOrganiser);
      }

      // setIsSuccessful(userExists);
    } catch (error) {
      console.error("Error checking user existence:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {_username == "" && (
        <span className="flex flex-row mx-auto max-w-xl justify-between">
          <span
            onClick={() => {
              toggleIsOrganiser(true);
            }}
            className={`pr-10 w-full p-4 ${
              isOrganiser ? "bg-slate-300" : "text-slate-300 "
            } hover:cursor-pointer rounded-l-lg`}
          >
            <p>I am a user</p>
          </span>
          <span
            onClick={() => {
              toggleIsOrganiser(false);
            }}
            className={` w-full p-4 ${
              isOrganiser ? "text-slate-300" : "bg-slate-300"
            } hover:cursor-pointer rounded-r-lg`}
          >
            <p>I am an event organiser</p>
          </span>
        </span>
      )}
      <span className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-semibold mt-10 mb-20">
          {_username != "" ? `Welcome ${_username}!` : "Log in"}
        </h1>
      </span>
      {_username != "" && (
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-xl">
              You have successfully logged in. What do you want to do?
            </p>
          </div>

          <ul className="text-xl mt-12">
            <li>
              <Link href="/user-profile" className="underline">
                Your profile
              </Link>
              <p className="text-base">
                Change password, update contact information, edit payment
                credentials.
              </p>
            </li>
            {!_isOrganiser && (
              <li className="mt-8">
                <Link href="/events">
                  <p className="underline">Browse events</p>
                  <p className="text-base">
                    Look for fun, new events! Maybe a concert is you next
                    adventure..?
                  </p>
                </Link>
              </li>
            )}
            {_isOrganiser && (
              <li className="mt-8">
                <Link href="/manage/events">
                  <p className="underline">Manage your events</p>
                  <p className="text-base">
                    Manage number of tickets, ticket types, event description
                    etc.
                  </p>
                </Link>
              </li>
            )}
            <li className="mt-8">
              <Link href="/contact">
                <p className="underline">Customer service</p>
                <p className="text-base">
                  Do you need any help or assistance? Here you find all the
                  information you need!
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {_username == "" && (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                type="password"
                onChange={() => {}}
              />
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
