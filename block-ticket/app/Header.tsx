import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center">
          <img
            src="./favicon.ico"
            alt=""
            className="w-16 h-16 object-cover rounded-full"
          />
          <p>BlickTicket</p>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:underline">
              <Link href="/register">Register</Link>
            </li>
            <li className="hover:underline">
              <Link href="/login">Log in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
