const Course = ({ course: { title, description, price, categories } }) => (
  <li className="text-center bg-teal-600 text-white py-2 px-6 shadow-md p-2 m-2 list-none">
    <h2 className="text-2xl">{title}</h2>
    <p className="text-left"> {description}</p>
    <p className="text-left"> Cost: £{price}</p>
    <ul className="flex">
      {categories.map((cat, i) => (
        <li className="pr-2 italic" key={i}>
          {cat}
        </li>
      ))}
    </ul>
  </li>
);

export default Course;
