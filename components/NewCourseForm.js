import { useState } from "react";

const NewCourseForm = (props) => {
  const [form, setForm] = useState({
    description: "",
    title: "",
    price: "",
    categories: "",
  });
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

  const saveNewCourse = async (e) => {
    e.preventDefault();
    const formattedCategories = form.categories.split(", ");
    const formattedForm = {
      ...form,
      categories: formattedCategories,
    };
    const response = await fetch(
      `http://localhost:3001/courses/add-new-course`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedForm),
      }
    );
    const data = await response.json();
  };
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl p-2"> Add a New Course</h2>
      <form className="flex flex-col p-2" onSubmit={saveNewCourse}>
        <div className="flex">
          <label className="px-2 font-semibold" htmlFor="title">
            Title
          </label>
          <input
            placeholder="title"
            id="title"
            onChange={(e) => newItemHandler(e, "title")}
          />
        </div>
        <div>
          <label className="px-2 font-semibold" htmlFor="description">
            Description
          </label>
          <input
            placeholder="description"
            id="description"
            onChange={(e) => newItemHandler(e, "description")}
          />
        </div>
        <div>
          <label className="px-2 font-semibold" htmlFor="price">
            Price
          </label>
          <input
            placeholder="price"
            id="price"
            onChange={(e) => newItemHandler(e, "price")}
          />
        </div>
        <div>
          <label className="px-2 font-semibold" htmlFor="categories">
            Categories
          </label>
          <input
            placeholder="categories"
            id="categories"
            onChange={(e) => newItemHandler(e, "categories")}
          />
        </div>
        <button
          className="mx-auto p-2 m-4 bg-teal-500 rounded-md"
          type="submit"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default NewCourseForm;
