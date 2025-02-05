const container = document.querySelector("#container");

const box = document.createElement("div");
box.classList.add("box");
box.setAttribute("style", "height:1em; width:1em; border: 1px solid black; background-color:teal");
container.appendChild(box);

const addBox = document.createElement("button");
addBox.classList.add("btn");
addBox.textContent = "Add Box";
addBox.addEventListener("click", () => container.insertBefore(box, addBox));
container.appendChild(addBox);

