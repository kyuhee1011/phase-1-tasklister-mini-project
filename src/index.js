document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    let priority = document.getElementById("taskPriority")
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      createToDoList(e.target['new-task-description'].value)
      form.reset()
    })
  });
  
  
  function createToDoList(todo) {
    let list = document.createElement('li')
    let butn = document.createElement('button')
    let priority = document.getElementById("taskPriority")
    //priority.addEventListener('click', setColor)
    console.log(priority.value)
    butn.addEventListener('click', deleteButton)
    butn.textContent = "X"
    list.textContent = `${todo}  `
    list.style.color = priority.value         
    list.appendChild(butn)
    document.querySelector("#tasks").appendChild(list)
    
  }
  // to remove the buttong we need to remove the todo also which 
  // Which is the parent of the button.
  function deleteButton(e) {
     e.target.parentNode.remove()
  }
  

});
