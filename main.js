const container = document.querySelector("#container");

const boxes = document.createElement("div");
    boxes.classList.add("box");
    boxes.addEventListener("mouseover", () => boxes.classList.add("shift"));

let boxCount = document.querySelector("#boxCount");


function boxInputCheck(value) {
    let confirmedValue;

    if (typeof value !== number) {
        alert("Your entry is not a number.");
        break;
    } else if (value < 1) {
        alert("The value you have entered is too low.");
        break;
    } else if (value > 50) {
        alert("The value you entered is too high.");
        break;
    } else {
        alert(`You have chosen ${value} rows & ${value} columns.`);
        confirmedValue = value;
    }

    boxCount.textContent = ""
    return boxCount = confirmedValue
}

function createRow(rows) {
    let numberRows = rows;



}

function createColumns(columns) {
    let numberColumns = columns;


}
