import { useState, useEffect } from "react";
import Course from "../components/Course";

const React = () => {
  const [coursesByCat, setCoursesByCat] = useState(null);
  const getCoursesByCategory = async (category) => {
    const response = await fetch(
      `http://localhost:3001/courses/all-courses?category=${category}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setCoursesByCat(data.result);
  };

  useEffect(() => {
    getCoursesByCategory("React", 2);
  }, []);

  if (!coursesByCat) {
    return (
      <div>
        <h2> Loading Courses...</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl text-center p-4"> React Courses</h2>
      <ul className=" flex flex-col items-center">
        {coursesByCat.map((course, i) => {
          return <Course key={i} course={course} />;
        })}
      </ul>
    </div>
  );
};

export default React;
