const createTask = (event)=>{
    
    event.preventDefault()

    let list = document.querySelector('#tasks-list')
    let value = document.querySelector('#new-task')

    let task = document.createElement('li')
    const content = `<p class="content">${value.value}</p>`
    
    task.innerHTML = content 
    list.appendChild(task)

    value.value = ""
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)