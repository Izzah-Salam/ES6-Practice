// map , filter , find , some, every, inlcudes, indexOf, findIndex

export default function ArrayMethods() {
  //>>>>>>>>>>.......Map Function .......<<<<<<<<
  //The map method takes an array, applies a function to each item in the array,
  // and then creates a new array with the results of that function for each item.

  const persons = [
    {
      name: "person1",
      age: 20,
    },
    {
      name: "person2",
      age: 40,
    },
    {
      name: "person3",
      age: 10,
    },
  ];

  let getAllName = persons.map((person, index) => {
    console.log(`Person : ${person.name} Age: ${person.age} `, index);
    return person.name;
  });

  console.log(getAllName);

  //>>>>>>>>>>.......Find Function .......<<<<<<<<
  //The find method looks through an array to find the first item that matches
  // a condition you specify. If it finds a matching item, it gives you that item
  //. If it doesn't find any matching item, it gives you undefined

  let arr = [2, 4, 1, 6, 3, 7, 9];

  const found = arr.find((num) => num > 6);
  console.log(found); // it gives 7

  //>>>>>>>>>>.......Filter Function .......<<<<<<<<
  //The filter method creates a new array with all elements
  //that pass the test implemented by the provided function.

  const filterValue = arr.filter((num) => num > 6);
  console.log(filterValue); // it gives array of [7,9]

  //>>>>>>>>>>.......Some Function .......<<<<<<<<
  //The some method tests whether at least one element in the array
  //passes the test implemented by the provided function. It returns a Boolean value.

  const hasEvenNumber = arr.some((num) => num % 2 == 0);
  console.log(hasEvenNumber); // it gives true

  //>>>>>>>>>>.......Every Function .......<<<<<<<<

  //The every method tests whether all elements in the array
  //pass the test implemented by the provided function. It returns a Boolean value.

  const AllEven = arr.every((num) => num % 2 == 0);
  console.log(AllEven); // it gives false because not every item in the array is even

  //>>>>>>>>>>.......includes Function .......<<<<<<<<
  //The includes method determines whether an array
  // includes a certain value among its entries, returning true or false as appropriate.

  const HaveValue = arr.includes(5);
  console.log(HaveValue); // return false

  //>>>>>>>>>>.......indexOf Function .......<<<<<<<<
  //The indexOf method returns the first
  //index at which a given element can be found in the array, or -1 if it is not present.

  console.log(arr.indexOf(5)); // it gives -1
  console.log(arr.indexOf(2)); // it gives 0

  //>>>>>>>>>>.......findIndex Function .......<<<<<<<<
}
