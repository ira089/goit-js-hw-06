const ulCategories = document.querySelector("#categories");
// console.dir(ulCategories);
const childCategories = ulCategories.children;
console.log(`Number of categories: ${childCategories.length}`);

const lists = document.querySelectorAll(".item");
// console.dir(lists);
lists.forEach((list) => {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
});
