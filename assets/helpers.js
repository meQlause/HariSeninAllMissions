export function getNumbersOf(tasks, filter) {
  return filterList(tasks, filter).length;
}

export function removeActiveSidebar(isAll) {
  if (isAll === true) {
    document.querySelectorAll(".sidebar-item").forEach((item) => {
      item.classList.remove("active");
    });
  } else {
    document.querySelectorAll(".sidebar-item").forEach((item) => {
      item.addEventListener("click", () => {
        document
          .querySelectorAll(".sidebar-item")
          .forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }
}

export function filterList(tasks, filter) {
  const activeTask = tasks.filter((item) => item.isCompleted === false);
  switch (filter) {
    case "allItem":
      return activeTask;
    case "completed":
      return tasks.filter(
        (item) =>
          item.isCompleted === true &&
          getDueLabel(item.due, false) !== "Overdue"
      );
    case "overdue":
      return tasks.filter((item) => getDueLabel(item.due, false) === "Overdue");
    case "important":
      return activeTask.filter((item) => item.priority === "High");
    case "today":
      return activeTask.filter(
        (item) => getDueLabel(item.due, false) === "Due Today"
      );
    case "upcoming":
      return activeTask.filter(
        (item) => getDueLabel(item.due, false) === "Upcoming"
      );
  }
}

export function getDueLabel(dueDateStr, passHour) {
  const now = new Date();
  const due = new Date(dueDateStr);

  const dueDateOnly = new Date(
    due.getFullYear(),
    due.getMonth(),
    due.getDate()
  );
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffDays = Math.floor((dueDateOnly - today) / (1000 * 60 * 60 * 24));
  if (passHour === true) {
    if (diffDays === 0);
    return "Due Today";
  }

  if (due < now) {
    return "Overdue";
  } else if (diffDays === 0) {
    return "Due Today";
  } else if (diffDays === 1) {
    return "Due Tomorrow";
  } else if (diffDays < 7) {
    return "This Week";
  } else {
    return "Upcoming";
  }
}

export function initContainer(container, template, task, selectedtask) {
  container.innerHTML = template();
  container.querySelector(".save-button").addEventListener("click", () => {
    selectedtask.forEach((hash) => {
      task.forEach((task) => {
        if (task.uniqueId === hash) {
          task.isCompleted = true;
        }
      });
    });
    purgethenSaveToLocalStorage(task);
    location.reload();
  });
}

function purgethenSaveToLocalStorage(dataToSave) {
  localStorage.setItem("tasks", JSON.stringify(dataToSave));
}

export function populateTasks(tasks, cardTemplate, filter) {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";

  const filteredTask = filterList(tasks, filter);
  filteredTask.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";
    div.innerHTML = cardTemplate(task, getDueLabel(task.due, false));

    taskContainer.appendChild(div);
  });
}

export function generateTimestampId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 11);
}

export function saveTask(formData) {
  const dueDate = new Date(`${formData.dueDate}T${formData.dueTime}:00`);
  const timezoneOffset = dueDate.getTimezoneOffset() * 60000;
  const localDate = new Date(dueDate.getTime() - timezoneOffset);
  const formattedDue = localDate.toISOString().slice(0, 19) + "+07:00";

  const dataToSave = {
    title: formData.title.trim(),
    description: formData.description.trim(),
    priority:
      formData.priority.trim().charAt(0).toUpperCase() +
      formData.priority.trim().slice(1).toLowerCase(),
    due: formattedDue,
    category: formData.category.trim(),
    isCompleted: false,
    uniqueId: formData.uniqueId,
  };

  saveToLocalStorage(dataToSave);
}

function saveToLocalStorage(dataToSave) {
  const data = localStorage.getItem("tasks");

  if (data) {
    const tasks = JSON.parse(data);
    tasks.push(dataToSave);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    localStorage.setItem("tasks", JSON.stringify([dataToSave]));
  }
}
