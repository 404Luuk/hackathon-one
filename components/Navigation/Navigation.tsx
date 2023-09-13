import Link from "next/link";

const Navigation = () => {
  return (
    <div className="shadow-md h-full">
      <div className="ml-5 mt-5">
        <h1 className="text-2xl font-bold">Welcome (name)</h1>
        <h3>(Member type)</h3>
      </div>
      <ul className="ml-5 mt-14 flex flex-col gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/personal-training" className="hover:underline">
            Personal training
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/settings" className="hover:underline">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
