import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import AllCourses from "../components/AllCourses";

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
      <AllCourses
        courses={courses}
        organiseCourses={organiseCourses}
        limitCourses={limitCourses}
      />
    </div>
  );
}
