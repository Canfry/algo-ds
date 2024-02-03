let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

Object.keys(instructor); // ["firstName", "isInstructor", "favoriteNumbers"]
Object.entries(instructor); // [["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", Array(4)]]
Object.values(instructor); // ["Kelly", true, [1,2,3,4]]
instructor.hasOwnProperty('firstName'); // true
