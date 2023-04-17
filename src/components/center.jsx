import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Center() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-grow">
      <header>
        <div className="flex items-center bg-gray-400 space-x-3 transition duration-300 ease-in-out hover:opacity-70 cursor-pointer rounded-full p-1 pr-2 m-4">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt={session?.user.name}
          />
          <h2>{session?.user.name}</h2>
          <ChevronDoubleDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  );
}

export default Center;
