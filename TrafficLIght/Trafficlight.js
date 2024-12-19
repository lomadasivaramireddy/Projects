let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");
let stopSignal = document.getElementById("stopLight");
let readySignal = document.getElementById("readyLight");
let goSignal = document.getElementById("goLight");

function stop() {
    stopButton.style.backgroundColor = "#cf1124";
    stopSignal.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#1f1d41";
    readySignal.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#1f1d41";
    goSignal.style.backgroundColor = "#4b5069";
}

function ready() {
    stopButton.style.backgroundColor = "#1f1d41";
    stopSignal.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#f7c948";
    readySignal.style.backgroundColor = "#f7c948";
    goButton.style.backgroundColor = "#1f1d41";
    goSignal.style.backgroundColor = "#4b5069";
}

function go() {
    stopButton.style.backgroundColor = "#1f1d41";
    stopSignal.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#1f1d41";
    readySignal.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#199473";
    goSignal.style.backgroundColor = "#199473";
}