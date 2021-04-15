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

function randomColor() {
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
    var el = items.pop();

    $(el).animate({
        left: width + start
    }, "slow", function () {
        el.remove();
        $("body").css("backgroundColor", randomColor());
        $(span).css("left", start);
        wordContainer.prepend(span);
        items.unshift(span);
        info.isAnimate = false;
        $(".error").text("");
    });
}


function createRandomElementWord() {
    var text = randomWord();
    var span = $("<span>");
    var leftBeforeShow = -90;

    span.text(text)
        .css({
            position: "relative",
            left: leftBeforeShow
        });
    return (span);
}


function main() {
    var btn = $("button");
    var wordContainer = $("#word");
    var items = [];
    var leftAfterShow = 90;
    var info = {
        isAnimate: false
    };

    btn.on("click", function (event) {
        event.preventDefault();
        if (items.length && !info.isAnimate) {
            info.isAnimate = true;
            slide(wordContainer, leftAfterShow, window.innerWidth, items, createRandomElementWord(), info);
        } else if (!info.isAnimate) {
            var span = createRandomElementWord();

            $(span).css("left", leftAfterShow);
            items.unshift(span);
            wordContainer.prepend(span);
            $("body").css("backgroundColor", randomColor());
        } else if (info.isAnimate) {
            $(".error").text("Wait !");
        }
    });
}

$(document).ready(main);