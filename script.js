let second = document.getElementById("second");
var minute = document.getElementById("minute");
let switch_btn = document.getElementById("paradoma-button");
var hour = document.getElementById("hour");
var watch,
    variable = 0,
    s = 1,
    h = 0,
    m = 25;

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let alarm = new Audio("alarm.mp3");

pause.addEventListener("click", () => {
    pause.innerHTML == "pause"
        ? (pause.innerHTML = "continue")
        : (pause.innerHTML = "pause");
});
let stopwatchrunning = () => {
    start.style.visibility = "hidden";
    variable = 0;
    watch = setInterval(() => {
        if (pause.innerHTML == "pause" && variable == 0) {
            second.innerHTML = s;
            s--;
            if (s == -1) {
                m--;
                s = 59;
            }
            if (m == -1) {
                h--;
                m = 59;
            }
            second.innerHTML = `<h1>${s}</h1>`;
            minute.innerHTML = `<h1>${m}</h1>`;
            hour.innerHTML = `<h1>${h}</h1>`;
        }
        if (s == 0 && m == 0) {
            alarm.play();
            reset_function();
        }
    }, 1000);
};
start.addEventListener("click", () => {
    stopwatchrunning();
});
reset.addEventListener("click", () => {
    reset_function();
});
let reset_function = (min) => {
    start.style.visibility = "visible";
    s = 0;
    m = min;
    h = 0;
    variable = 1;
    second.innerHTML = `<h1>${s}</h1>`;
    minute.innerHTML = `<h1>${m}</h1>`;
    hour.innerHTML = `<h1>${h}</h1>`;
    clearInterval(watch);
};
window.addEventListener("click", () => {
    alarm.pause();
});
switch_btn.onclick = () => {
    if (switch_btn.innerHTML == "Switch To Break") {
        switch_btn.classList.toggle("break");
        switch_btn.innerHTML = "Switch To Focus";
        reset_function(5);
    } else {
        switch_btn.classList.toggle("break");
        switch_btn.innerHTML = "Switch To Break";
        reset_function(25);
    }
};
