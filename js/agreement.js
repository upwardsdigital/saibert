function handleOpenCloseQuestion(event) {
    const currentQuestion = event.currentTarget.parentElement
    const allQuestions = document.getElementsByClassName('question')
    for (let i=0;i< allQuestions.length; i++){
        if(allQuestions[i] !== currentQuestion){
            allQuestions[i].classList.remove('question_opened')
        }
    }
    if(currentQuestion.classList.contains('question_opened')){
        currentQuestion.classList.remove('question_opened')
    }
    else{
        currentQuestion.classList.add('question_opened')
    }
}