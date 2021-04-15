function randomWord() {
    var words = [
        "football",
        "route",
        "A10",
        "avion",
        "voiture",
        "ordinateur"
    ];
    var index = Math.floor(Math.random() * words.length);

    return (words[index]);
}

function randomColor(){
    var colors = [
        "green",
        "yellow",
        "white",
        "blue",
        "grey"
    ];
    var color = colors[Math.floor(Math.random() * colors.length)];

    return (color);
}

function slide(wordContainer, start, width, items, span, info) {
    var timerID = 0;
    var i = 0;
    var el = items.pop();

    info.isAnimate = true;
    timerID = setInterval(function () {
        if (i >= 100) {
            el.remove();

            document.querySelector("body").style.backgroundColor = randomColor();
            items.unshift(span);
            wordContainer.prepend(span);
            span.style.left = start + "px";
            info.isAnimate = false;
            document.querySelector(".error").textContent = "";
            clearInterval(timerID);
        }
        el.style.left = (start + (width / 100) * i) + "px";
        i++;
    }, 10);
}

function createRandomElementWord(){
    var text = randomWord();
    var span = document.createElement("span");
    var leftBeforeShow = -90;

    span.innerHTML = text;
    span.style.position = "relative";
    span.style.left = leftBeforeShow + "px";
    return (span);
}

function main() {
    var btn = document.querySelector("button");
    var wordContainer = document.querySelector("#word");
    var items = [];
    var leftAfterShow = 90;
    var info = {
        isAnimate: false
    };

    btn.addEventListener("click", function (event) {
        if (items.length && !info.isAnimate) {
            info.isAnimate = true;
            slide(wordContainer, leftAfterShow, window.innerWidth, items, createRandomElementWord(), info);
        } else if(!info.isAnimate) {
            var span = createRandomElementWord();

            span.style.left = leftAfterShow + "px";
            wordContainer.prepend(span);
            items.unshift(span);
            document.querySelector("body").style.backgroundColor = randomColor();
        }
        else if (info.isAnimate){
            document.querySelector(".error").textContent = "Wait !";
        }
    });
}

window.addEventListener("load", main);