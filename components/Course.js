const Course = ({ course: { title, description, price, categories } }) => (
  <li className="text-center bg-teal-600 text-white py-2 px-6 shadow-md p-2 m-2 list-none">
    <h2>{title}</h2>
    <p> {description}</p>
    <p> £{price}</p>
    <ul>
      {categories.map((cat, i) => (
        <li key={i}>{cat}</li>
      ))}
    </ul>
  </li>
);

export default Course;
