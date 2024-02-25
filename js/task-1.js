const list = document.querySelector("#categories");
const categoriesList = list.children;
console.log("Number of categories: " + categoriesList.length);
for (const item of categoriesList) {
  console.log(`Category : ${item.firstElementChild.textContent}`);

  console.log(`Elements : ${item.children[1].children.length}`);
}
