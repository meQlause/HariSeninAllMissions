import { getSelectedData, getTasks, setSelectedData } from "./mockUpData.js";
import {
  addTaskTemplate,
  containerTemplate,
  itemCardTemplate,
  statsTemplate,
} from "./templates.js";
import {
  filterList,
  getDueLabel,
  removeActiveSidebar,
  getNumbersOf,
  saveTask,
  initContainer,
  generateTimestampId,
  populateTasks,
} from "./helpers.js";

const handleSidebarClick = (filter) => {
  removeActiveSidebar(false);

  const container = document.querySelector(".container");
  if (container.querySelector(".task-container") === null) {
    initContainer(container, containerTemplate, getTasks(), getSelectedData());
  }

  populateTasks(getTasks(), itemCardTemplate, filter);

  document.querySelectorAll(".checkbox-state").forEach((box) => {
    box.addEventListener("change", () => {
      if (box.checked === true) {
        let selectedData = getSelectedData();
        selectedData.push(box.dataset.index);
        setSelectedData(selectedData);
      } else {
        let selectedData = getSelectedData();
        setSelectedData(
          selectedData.filter((val) => val !== box.dataset.index)
        );
      }
    });
  });
};

const createNewTask = () => {
  removeActiveSidebar(true);

  const container = document.querySelector(".container");
  container.innerHTML = addTaskTemplate();

  const form = container.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      title: document.getElementById("task-title").value,
      description: document.getElementById("task-description").value,
      priority: document.getElementById("priority").value,
      category: document.getElementById("category").value,
      dueDate: document.getElementById("due-date").value,
      dueTime: document.getElementById("due-time").value,
      uniqueId: generateTimestampId(),
    };

    saveTask(formData);
    location.reload();
  });
};

document.addEventListener("DOMContentLoaded", function () {
  getTasks().forEach((item) => {
    if (getDueLabel(item.due, false) === "Overdue") {
      item.isCompleted = true;
    }
  });

  const sidebarOrder = [
    "allItem",
    "important",
    "today",
    "upcoming",
    "completed",
    "overdue",
  ];

  document.querySelectorAll(".sidebar-item").forEach((item, index) => {
    const counts = getNumbersOf(getTasks(), sidebarOrder[index]);
    item.querySelector(".sidebar-number").innerHTML = counts;
    if (counts === 0) {
      item.classList.add("opacity-50");
      item.classList.add("pointer-events-none");
      item.classList.add("cursor-not-allowed");
    }
  });

  const todaysTodo = getTasks().filter(
    (item) => getDueLabel(item.due, true) === "Due Today"
  );
  const totalOverdue = todaysTodo.filter(
    (item) => getDueLabel(item.due, false) === "Overdue"
  );
  const totalComplete = todaysTodo.filter((item) => item.isCompleted === true);

  document.querySelector(".stats").innerHTML = statsTemplate(
    todaysTodo.length ? todaysTodo.length : 0,
    totalComplete.length ? totalComplete.length : 0,
    totalOverdue.length ? totalOverdue.length : 0
  );

  if (filterList(getTasks(), "allItem").length === 0) {
    createNewTask();
  } else {
    handleSidebarClick("allItem");
  }
});

window.handleSidebarClick = handleSidebarClick;
window.createNewTask = createNewTask;
