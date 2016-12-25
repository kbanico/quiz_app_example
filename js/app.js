function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;
    if (question1.toLowerCase() == "barduk") {
        correct++;
    }
    if (question2 == "charmeleon") {
        correct++;
    }
    if (question3 == "kaiba") {
        correct++;
    }
    var messages = ["Great Job", "That's just ok", "You really need to do better"];
    var pictures = ["image/win.gif", "image/ok.gif", "image/lose.gif"];
    var range;
    if (correct < 1) {
        range = 2
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }
    document.getElementById("after-submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number-correct").innerHTML = "You got " + correct + " correct";
    document.getElementById("picture").src = pictures[range];
}