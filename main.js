const container = document.querySelector("#container");

const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => box.classList.add("shift"));

const addBox = document.createElement("button");
    addBox.classList.add("btn");
    addBox.textContent = "Add Box";
    addBox.addEventListener("click", () => container.insertBefore(box, addBox));

container.appendChild(addBox);

const container2 = document.createElement("div");
    container.appendChild(container2);

const megaBox = document.createElement("div");
    megaBox.classList.add("box", "mega");
    megaBox.addEventListener("click", () => megaBox.classList.add("shift"));

container2.appendChild(megaBox);



