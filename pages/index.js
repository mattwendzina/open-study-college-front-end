import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Course from "../components/Course";

export default function Home() {
  const [courses, setCourses] = useState(null);
  const getAllCourses = async () => {
    const response = await fetch("http://localhost:3001/courses/all-courses", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setCourses(data.result);
  };

  const organiseCourses = async (order) => {
    const response = await fetch(
      `http://localhost:3001/courses/all-courses?sort=${order}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setCourses(data.result);
  };

  const limitCourses = async (limit) => {
    const response = await fetch(
      `http://localhost:3001/courses/all-courses?limit=${limit}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setCourses(data.result);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  if (!courses) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className={styles.container}>
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
    </div>
  );
}
