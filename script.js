const mainContainerQuestion = document.querySelectorAll(".mainContainerQuestion");
const mainContainerQuestionText = document.querySelectorAll(".mainContainerQuestionText")
const buttonDown = document.querySelectorAll(".buttonDown");
const mainContainerAnswer = document.querySelectorAll(".mainContainerAnswer");
let mainContainerAnswerText = document.querySelectorAll(".mainContainerAnswerText")
const imageBox = document.querySelector(".imageBox")

const mainContainerFAQ = document.querySelectorAll(".mainContainerFAQ")

for (let i = 0; i < mainContainerAnswer.length; i++) {
    let heightContainer = mainContainerAnswerText[i].clientHeight;
    let change = 0;

    mainContainerQuestionText[i].addEventListener("mouseover", () => {
        mainContainerQuestionText[i].style.color = ("var(--softRed)");
        imageBox.style.left = ("-125px");

    })
    mainContainerQuestionText[i].addEventListener("mouseout", () => {
        mainContainerQuestionText[i].style.color = ("var(--veryDarkGraBlue)")
        imageBox.style.left = ("-100px");
    })

    mainContainerQuestion[i].addEventListener("click", () => {

        if (change == 0) {
            mainContainerAnswer[i].style.height = `${heightContainer}px`;
            mainContainerQuestionText[i].style.fontWeight = "700";
            mainContainerQuestionText[i].style.color = "black";
            buttonDown[i].style.rotate = "180deg"
            
            mainContainerQuestionText[i].addEventListener("mouseout", () => {
                mainContainerQuestionText[i].style.color = ("black")
            })
            
            change++;
        } else {
            mainContainerAnswer[i].style.height = `0px`;
            mainContainerQuestionText[i].style.fontWeight = "400";
            mainContainerQuestionText[i].style.color = "var(--veryDarkGraBlue)";
            buttonDown[i].style.rotate = "0deg"

            mainContainerQuestionText[i].addEventListener("mouseout", () => {
                mainContainerQuestionText[i].style.color = ("var(--veryDarkGraBlue)")
            })
            
            change--;
        }
        
    })
    
}
    