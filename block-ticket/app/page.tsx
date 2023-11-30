import Web3Comp from "./web3Comp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-5xl">Welcome to BlickTicket!</p>
        <p className="mt-12 text-lg">
          BlickTicket is an innovative blockchain-powered ticketing company that
          is revolutionizing the way events are organized and tickets are
          distributed. Leveraging the transparency, security, and
          decentralization features of blockchain technology, BlickTicket
          ensures a seamless and fraud-resistant ticketing experience for both
          event organizers and attendees.
        </p>
        <p className="mt-8 text-lg">
          The core strength of BlickTicket lies in its use of smart contracts on
          the blockchain. These self-executing contracts automate the ticketing
          process, eliminating the need for intermediaries and reducing the risk
          of fraud. Event organizers can create, manage, and customize events
          effortlessly, while attendees benefit from a transparent and secure
          ticket purchase process.{" "}
        </p>
        <p className="mt-8 text-lg">
          With BlickTicket, every event is assigned a unique digital identity on
          the blockchain, making it easy to verify the authenticity of tickets.
          This not only prevents counterfeit tickets but also reduces the
          likelihood of scalping. Additionally, the decentralized nature of the
          blockchain ensures that ticket data is stored securely and cannot be
          tampered with.{" "}
        </p>
        <p className="mt-8 text-lg">
          BlickTicket is committed to providing a user-friendly platform, making
          it simple for event organizers to sell tickets and for attendees to
          purchase them. The platform supports various events, from concerts and
          sports matches to conferences and festivals, catering to a diverse
          range of entertainment and business needs.{" "}
        </p>
        <p className="mt-8 text-lg">
          By embracing blockchain technology, BlickTicket is reshaping the
          ticketing industry, promoting fairness, security, and trust in the
          event ecosystem. Attendees can enjoy a hassle-free experience, knowing
          that their tickets are genuine, while organizers benefit from a more
          efficient and cost-effective ticketing solution. BlickTicket is at the
          forefront of ushering in a new era of integrity and efficiency in
          event ticketing.
        </p>
      </div>
    </main>
  );
}
