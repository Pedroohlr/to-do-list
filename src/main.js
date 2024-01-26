import BtnConcluded from "./componentes/concludedTask.js"
import btnKill from "./componentes/killTask.js"

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
