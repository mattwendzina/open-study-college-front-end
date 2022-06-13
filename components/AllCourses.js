import styles from "../styles/Home.module.css";
import Course from "./Course";

const AllCourses = ({ courses, organiseCourses, limitCourses }) => {
  return (
    <>
      <h2> Sort By</h2>
      <ul>
        <li className="hover:cursor-pointer" onClick={() => organiseCourses(1)}>
          Ascending
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => organiseCourses(-1)}
        >
          Descending
        </li>
        <li className="hover:cursor-pointer">
          Limit
          <input
            className="px-2"
            placeholder="number"
            onChange={(e) => limitCourses(e.target.value)}
          />
        </li>
      </ul>
      <main className={styles.main}>
        {courses.map((course, i) => (
          <Course key={i} course={course} />
        ))}
      </main>
    </>
  );
};

export default AllCourses;
