const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey. I'm red!";
para.setAttribute("style", "color: red");
container.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.setAttribute("style", "color: blue");
container.appendChild(head3);

const divider = document.createElement("div");
divider.setAttribute("style", "border: 2px solid black; background-color: pink");
container.appendChild(divider);

    const divH1 = document.createElement("h1");
    divH1.textContent = "I'm in a div";
    divider.appendChild(divH1);
    
    const divPara = document.createElement("p");
    divPara.textContent = "ME TOO!";
    divider.appendChild(divPara);

    const btnSwitch = document.createElement("button");
    btnSwitch.classList.add("btn");
    btnSwitch.textContent = "I'm a button! Press Me!";
    divider.appendChild(btnSwitch);

    btnSwitch.onclick = () => container.removeChild(container.firstElementChild);

