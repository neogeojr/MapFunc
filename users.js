const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

const PREMIUM_MINIMUM = 100;
const updatedUsers = users.map(({ firstName, lastName, points }) => {
  const status = points > PREMIUM_MINIMUM ? "Premium" : "Standard";
  return {
    fullName: `${firstName} ${lastName}`,
    membershipStatus: status,
  };
});
console.log(updatedUsers)
