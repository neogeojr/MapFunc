const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

const premiumMembers = users.some(({ points }) => {
  return points > 100;
});

console.log(`Any premium members:`, (premium = premiumMembers ? "yes" : "no"));

const premiumMembers2 = users.every(({ points }) => {
  return points > 100;
});
console.log(`All premium members:`, (premium = premiumMembers2 ? "yes" : "no"));

const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  const checkboxes = document.querySelectorAll('input[type = "checkbox"]');
  console.log(checkboxes);

  const allChecked = Array.from(checkboxes).every(function (checkbox) {
    return checkbox.checked;
  });
  console.log(`All Checked: ${allChecked}`);
  if (!allChecked) alert("Please agree to everything!");
});
