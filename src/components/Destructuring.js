//Destructuring is a convenient way of extracting multiple
// values from data stored in (possibly nested) objects and arrays.
// for destruction the values and properties name are exactly same
// Destructuring is a powerful feature in JavaScript that allows you to extract-
// values from arrays and objects in a concise and readable manner

export default function Destructuring() {
  // Array Example
  const user = ["izzah", 4, "admin"];
  const [name, course, role] = user;
  console.log(name); // we dont need to extract the value like that user[1]
  console.log(role);
  console.log(course);

  // Object Example
  const info = {
    id: 1,
    degree: "Cs",
    School: "IBA",
  };

  const { id, degree, School } = info;
  console.log(degree); // wo dont need to extract value like info.degree
  console.log(id);
  console.log(School);
}
