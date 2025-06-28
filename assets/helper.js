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
      return tasks;
    case "completed":
      return tasks.filter(
        (item) =>
          item.isCompleted === true && getDueLabel(item.due) !== "Overdue"
      );
    case "overdue":
      return tasks.filter((item) => getDueLabel(item.due) === "Overdue");
    case "important":
      return activeTask.filter((item) => item.priority === "High");
    case "today":
      return activeTask.filter((item) => getDueLabel(item.due) === "Due Today");
    case "upcoming":
      return activeTask.filter((item) => getDueLabel(item.due) === "Upcoming");
  }
}

export function getDueLabel(dueDateStr) {
  const now = new Date();
  const due = new Date(dueDateStr);
  const diffMs = due - now;
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (diffMs < 0) {
    return "Overdue";
  } else if (diffHours < 24) {
    return "Due Today";
  } else if (diffHours < 48) {
    return "Due Tomorrow";
  } else if (diffDays <= 7) {
    return "This Week";
  } else {
    return "Upcoming";
  }
}
