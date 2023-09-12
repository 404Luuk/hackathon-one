import Link from "next/link";

const Navigation = () => {
  return (
    <div className="shadow-md h-full">
      <ul>
        <li>
          <Link href="/">Personal training</Link>
        </li>
        <li>
          <Link href="/">Courses</Link>
        </li>
        <li>
          <Link href="/">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
