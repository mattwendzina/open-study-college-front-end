import { useState } from "react";
import Course from "./Course";

const EditAllCourses = ({
  courses,
  deleteCourse,
  editingCourse,
  form,
  newItemHandler,
  editCourse,
  updateCourse,
  setEditingCourse,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl"> Edit Courses </h2>

      {courses.map((course, i) => (
        <div key={i} className="m-2 w-1/2 ">
          <div className="flex justify-around">
            <button
              className="h-min self-center"
              onClick={() => deleteCourse(course._id)}
            >
              Delete Course
            </button>
            <ul className="text-center bg-teal-600 text-white py-2 px-6 shadow-md">
              {editingCourse === course._id ? (
                <form onSubmit={(e) => updateCourse(e)}>
                  <div className="flex">
                    <label className="px-2 font-semibold" htmlFor="title">
                      Title:
                    </label>
                    <input
                      className="bg-teal-600"
                      placeholder="title"
                      id="title"
                      onChange={(e) => newItemHandler(e, "title")}
                      value={form.title}
                    />
                  </div>
                  <div className="flex">
                    <label className="px-2 font-semibold" htmlFor="description">
                      Description:
                    </label>
                    <input
                      className="bg-teal-600"
                      placeholder="description"
                      id="description"
                      onChange={(e) => newItemHandler(e, "description")}
                      value={form.description}
                    />
                  </div>
                  <div className="flex">
                    <label className="px-2 font-semibold" htmlFor="price">
                      Price:
                    </label>
                    <input
                      className="bg-teal-600"
                      placeholder="price"
                      id="price"
                      value={form.price}
                      onChange={(e) => newItemHandler(e, "price")}
                    />
                  </div>
                  <div className="flex">
                    <label className="px-2 font-semibold" htmlFor="categories">
                      Categories:
                    </label>
                    <input
                      className="bg-teal-600 basis-4"
                      placeholder="categories"
                      id="categories"
                      value={form.categories.join(", ")}
                      onChange={(e) => newItemHandler(e, "categories")}
                    />
                  </div>
                  <div className="p-2">
                    <button
                      className="p-2 m-2 bg-teal-500 rounded-md"
                      type="submit"
                    >
                      Update Course
                    </button>
                    <button
                      className="p-2 m-2 bg-red-500 rounded-md"
                      onClick={() => setEditingCourse(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <Course course={course} />
              )}
            </ul>
            <button onClick={() => editCourse(course)}>Edit Course</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditAllCourses;
