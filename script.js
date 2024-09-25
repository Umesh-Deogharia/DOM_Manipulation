let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let clear = document.getElementById("clear");
let error = document.getElementById("error");
function calc(e) {
  let counter = document.getElementById("para2");
  let count = Number(counter.innerText);
  // console.log(count);
  console.log(e.target.id);
  const { id } = e.target;
  if (id === "increment") {
    count++;
  } else if (id === "decrement") {
    if (count > 0) {
      count--;
    }
  } else {
    count = 0;
  }
  counter.innerText = count;
  if (count === 0) {
    error.style.display = "block";
    decrement.style.backgroundColor = "LightBlue";
    decrement.style.color = "gray";
    clear.style.display = "none";
    decrement.style.cursor = "not-allowed";
    decrement.disabled = true;
  } else {
    error.style.display = "none";
    clear.style.display = "block";
    decrement.style.backgroundColor = "white";
    decrement.style.color = "black";
    decrement.style.cursor = "auto";
    decrement.disabled = false;
  }
}
document.getElementById("decrement").addEventListener("click", calc);
document.getElementById("increment").addEventListener("click", calc);
document.getElementById("clear").addEventListener("click", calc);
