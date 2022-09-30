const mainContainerQuestion = document.querySelectorAll(".mainContainerQuestion");
const mainContainerQuestionText = document.querySelectorAll(".mainContainerQuestionText")
const buttonDown = document.querySelectorAll(".buttonDown");
const mainContainerAnswer = document.querySelectorAll(".mainContainerAnswer");
let mainContainerAnswerText = document.querySelectorAll(".mainContainerAnswerText")

for (let i = 0; i < mainContainerAnswer.length; i++) {
    let heightContainer = mainContainerAnswerText[i].clientHeight;
    let change = 0;

    mainContainerQuestion[i].addEventListener("click", () => {

        if (change == 0) {
            mainContainerAnswer[i].style.height = `${heightContainer}px`;
            mainContainerQuestionText[i].style.fontWeight = "700";
            mainContainerQuestionText[i].style.color = "black";

            change++;
        } else {
            mainContainerAnswer[i].style.height = `0px`;
            mainContainerQuestionText[i].style.fontWeight = "400";
            mainContainerQuestionText[i].style.color = "var(--veryDarkGraBlue)";
            change--;
        }
        
    })
}
    