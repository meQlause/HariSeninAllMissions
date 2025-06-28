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
  };

  saveToLocalStorage(dataToSave);
}

function saveToLocalStorage(dataToSave) {
  const data = localStorage.getItem("tasks");

  if (data) {
    const tasks = JSON.parse(data);
    tasks.push(JSON.stringify(dataToSave));
  } else {
    localStorage.setItem("tasks", JSON.stringify([dataToSave]));
  }
}
