import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-teal-600 text-white">
        <ul className="flex justify-between">
          <div className=" p-2 m-2">
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
          </div>

          <div className="flex p-2 m-2">
            <Link href="/new-course">
              <a className="px-2">
                <li>New course</li>
              </a>
            </Link>
            <Link href="/edit-courses">
              <a className="px-2">
                <li>Edit Courses</li>
              </a>
            </Link>
            <Link href="/react">
              <a className="px-2">
                <li>React Courses</li>
              </a>
            </Link>
          </div>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Layout;
