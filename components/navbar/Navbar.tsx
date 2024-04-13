import Link from "next/link";
import Header from "../ui/Header";

const Navbar = () => {
  return (
    <nav>
      <div className="sticky top-0 bg-blue-500 px-5 py-5 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          Hotel App
        </Link>
        <Header />
        <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
          <li className="hover:-translate-y-1 duration-500 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:-translate-y-1 duration-500 transition-all">
            <Link href="/rooms">Rooms</Link>
          </li>
          <li className="hover:-translate-y-1 duration-500 transition-all">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
