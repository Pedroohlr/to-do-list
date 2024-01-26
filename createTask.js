(() => {
    const createTask = (event) => {

        event.preventDefault()

        let list = document.querySelector('#tasks-list')
        let value = document.querySelector('#new-task')

        if (value.value === "") {
            alert("Digite uma tarefa valida")
            return 0
        }

        let task = document.createElement('li')
        const content = `<p class="content">${value.value}</p>`

        task.innerHTML = content
        task.appendChild(BtnConcluded())
        task.appendChild(btnKill())
        list.appendChild(task)
        value.value = ""
    }

    const newTask = document.querySelector('[data-form-button]')

    newTask.addEventListener('click', createTask)

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
})()