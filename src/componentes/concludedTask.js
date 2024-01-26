const BtnConcluded = () => {
    const btnConcluded = document.createElement('button')
    btnConcluded.classList.add('check-button')
    btnConcluded.innerText = "Concluir"
    btnConcluded.addEventListener('click', concludedTask)

    return btnConcluded
}

function concludedTask(event) {
    const btnConcluded = event.target //descubro qual elemento eu cliquei atraves do target

    const taskConcluded = btnConcluded.parentElement //essa variavel pega o pai do evento

    taskConcluded.classList.toggle('done') //o toggle me retorna um boleano, se eu tiver clicado que vai exeecutar essa classe css
}

export default BtnConcluded