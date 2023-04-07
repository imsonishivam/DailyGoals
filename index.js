const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

// console.log(tasks);

const showAllTasks = () => {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);
    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);
    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.innerText = "-";

    deleteBtn.addEventListener("click", () => {
        // div.style.display = 'none';
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });

    div.append(deleteBtn);
    container.append(div);
  });
};

showAllTasks();

const removeTasks = () => {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllTasks();
});
