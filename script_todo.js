const form = document.getElementById('form');
const formText = document.getElementById('text');
const formDay = document.getElementById('day');
const formReminder = document.getElementById('reminder');

const submitBtn = document.getElementById('submitBtn');
const tasks = document.getElementById('tasks');


const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    if(form.style.display != 'none'){
        addBtn.style.backgroundColor = 'green';
        form.style.display = 'none';
        addBtn.textContent = 'Add';
    }else{
        addBtn.style.backgroundColor = 'red';
        addBtn.textContent = 'Close';
        form.style.display = 'block';
    }
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(!formText.value && !formDay.value){
        alert('Uzupełnij brakujące pola !');
        return;
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_input_el = document.createElement('div');
    task_input_el.innerHTML = "<p style='font-weight: bold'>" + formText.value + "<p>" + formDay.value + "</p>";
    task_el.appendChild(task_input_el);

    const task_delete_el = document.createElement('button');
    task_delete_el.innerHTML = 'X';
    task_delete_el.classList = 'deleteBtn';
    task_delete_el.addEventListener('click', () => {
        tasks.removeChild(task_el)
    })

    task_el.appendChild(task_delete_el);

    tasks.appendChild(task_el);
})

