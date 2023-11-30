"use client";

import React, { useState } from "react";
import web3 from "../utils/web3";
import TicketContract from "../../contracts/build/contracts/TicketContract.json";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const TicketContractAddress = process.env.NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS;

const AddUserForm: React.FC = () => {
  const { _username, login } = useAuth();

  const [showUser, setShowUser] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Instantiate your smart contract
    const contract = new web3.eth.Contract(
      TicketContract.abi,
      TicketContractAddress
    );

    // Get the current Ethereum account
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];

    // Perform user registration on the smart contract
    try {
      const transaction = await contract.methods
        .registerUser(username, showUser)
        .send({ from: currentAccount });

      // // Get user details after successful registration
      // const userDetails = await contract.methods
      //   .getUserDetails(currentAccount)
      //   .call();

      // Update the transaction hash in the state
      setTransactionHash(transaction.transactionHash);

      // // Update the state with the registered user's credentials
      // setRegisteredUser({
      //   username: userDetails[0],
      //   address: userDetails[1],
      //   secretKeyHash: userDetails[2],
      // });

      // Reset form fields after successful registration
      setEmail("");
      setRegistered(true);
      login("", showUser);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const toggleShowUser = (showUser: boolean) => {
    setShowUser(showUser);
    setEmail("");
    setUsername("");
    setTransactionHash("");
  };

  return (
    <div className="mt-20">
      {registered ? (
        <span className="text-center flex flex-col items-center">
          <h1 className="text-5xl font-semibold mt-10 mb-20">
            {`Successfully registered ${
              showUser ? "user" : "event organiser"
            }!`}
          </h1>
          <p>
            We successfully registered user with username {`${_username}`}.
            Please proceed to{" "}
            {
              <Link className="underline" href={"login"}>
                login
              </Link>
            }{" "}
          </p>
        </span>
      ) : (
        <>
          <span className="flex flex-row mx-auto max-w-xl justify-between">
            <span
              onClick={() => {
                toggleShowUser(true);
              }}
              className={`pr-10 w-full p-4 ${
                showUser ? "bg-slate-300" : "text-slate-300 "
              } hover:cursor-pointer rounded-l-lg`}
            >
              <p>I am a user</p>
            </span>
            <span
              onClick={() => {
                toggleShowUser(false);
              }}
              className={` w-full p-4 ${
                showUser ? "text-slate-300" : "bg-slate-300"
              } hover:cursor-pointer rounded-r-lg`}
            >
              <p>I am an event organiser</p>
            </span>
          </span>
          <span className="text-center">
            <h1 className="text-5xl font-semibold mt-10">
              {" "}
              {`Register ${showUser ? "user" : "event organiser"}`}
            </h1>
          </span>
          <div className="font-mono mt-20 mx-auto max-w-lg">
            {showUser ? (
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      Username:
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
                      Email:
                    </label>
                    <input
                      className="mt-1 p-2 w-full border rounded-md"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      Password:
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
                    Regiser user
                  </button>
                </form>
                {transactionHash && (
                  <div className="mt-4">
                    <p className="text-green-500 font-semibold">
                      Transaction successful!
                    </p>
                    <p className="text-gray-600">
                      Transaction Hash: {transactionHash}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      Organizer Name:
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
                      Password:
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
                    Create Organizer
                  </button>
                </form>
                {transactionHash && (
                  <div className="mt-4">
                    <p className="text-green-500 font-semibold">
                      Transaction successful!
                    </p>
                    <p className="text-gray-600">
                      Transaction Hash: {transactionHash}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AddUserForm;
