const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "It's Raining!";
container.appendChild(content);

const weather = document.createElement("div");
weather.classList.add("update");
weather.textContent = "Liar! Look out your frikkin' window!";
container.appendChild(weather);

const swapUp = document.createElement("button");
swapUp.classList.add("btn");
swapUp.textContent = "Change the Weather!!!";
container.appendChild(swapUp);
swapUp.onclick = () => content.textContent = "It's SUNNY!";
