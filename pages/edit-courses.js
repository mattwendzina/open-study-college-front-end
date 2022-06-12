import { useState, useEffect } from "react";
import EditAllCourses from "../components/EditAllCourses";

const EditCourses = () => {
  const [courses, setCourses] = useState();
  const [editingCourse, setEditingCourse] = useState(null);
  const [form, setForm] = useState({
    description: "",
    title: "",
    price: "",
    categories: "",
  });

  useEffect(() => {
    getAllCourses();
  }, []);

  const newItemHandler = (e, input) => {
    switch (input) {
      case "description":
        setForm((prevState) => ({
          ...prevState,
          description: e.target.value,
        }));
        return;
      case "title":
        setForm((prevState) => ({
          ...prevState,
          title: e.target.value,
        }));
        return;
      case "price":
        setForm((prevState) => ({
          ...prevState,
          price: e.target.value,
        }));
        return;
      case "categories":
        {
          setForm((prevState) => ({
            ...prevState,
            categories: e.target.value,
          }));
        }
        return;
      default:
        return null;
    }
  };
  const editCourse = (course) => {
    setEditingCourse(course._id);
    setForm((prevState) => ({
      ...prevState,
      title: course.title,
      description: course.description,
      price: course.price,
      categories: course.categories,
      id: course._id,
    }));
  };

  const updateCourse = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3001/courses/update-course/${form.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    if (response.ok) {
      getAllCourses();
    }
    setEditingCourse();
  };

  const getAllCourses = async () => {
    const response = await fetch("http://localhost:3001/courses/all-courses", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setCourses(data.result);
  };

  const deleteCourse = async (id) => {
    const response = await fetch(
      `http://localhost:3001/courses/delete-course/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      getAllCourses();
    }
  };

  if (!courses) {
    return <h2>Loading...</h2>;
  }
  return (
    <EditAllCourses
      courses={courses}
      deleteCourse={deleteCourse}
      editingCourse={editingCourse}
      form={form}
      newItemHandler={newItemHandler}
      editCourse={editCourse}
      updateCourse={updateCourse}
      setEditingCourse={setEditingCourse}
    />
  );
};

export default EditCourses;
