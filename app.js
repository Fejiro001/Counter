// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    console.log(styles);
    // increase, decrease or reset displayed value
    if (styles.contains("decrease")) {
        count--;
    } else if (styles.contains("increase")) {
        count++;
    } else {
        count = 0;
    }

    // change the color when it's a negative or positive number
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else if (count === 0) {
        value.style.color = '#222';
    }
    value.textContent = count;
    });
});
