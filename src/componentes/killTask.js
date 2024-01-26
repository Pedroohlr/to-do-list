function btnKill(){
    const btnKill = document.createElement('button')

    btnKill.innerText = "Deletar"
    btnKill.classList.add('dell')
    btnKill.addEventListener('click', dellTask)
    return btnKill
}

const dellTask = (event) =>{
    const btnKill = event.target
    
    const taskConcluded = btnKill.parentElement
    taskConcluded.remove()

    return btnKill
}

export default btnKill