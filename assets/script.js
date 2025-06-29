import { getSelectedData, getTasks, setSelectedData } from "./mockUpData.js";
import {
  addTaskTemplate,
  containerTemplate,
  itemCardTemplate,
  statsTemplate,
  taskDetailsTemplate,
  noDataTemplate,
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

  if (window.length < 768) {
    toggleSidebar();
  }

  const container = document.querySelector(".container");
  if (container.querySelector(".task-container") === null) {
    initContainer(container, containerTemplate, getTasks(), getSelectedData());

    const dateInput = document.getElementById("date-search");
    dateInput.addEventListener("change", (event) => {
      removeActiveSidebar(true);
      const selectedDate = event.target.value;
      populateTasks(getTasks(), itemCardTemplate, noDataTemplate, selectedDate);
    });
  }

  populateTasks(getTasks(), itemCardTemplate, noDataTemplate, filter);

  document.querySelectorAll(".checkbox-state").forEach((box) => {
    box.addEventListener("change", () => {
      if (box.checked === true) {
        let selectedData = getSelectedData();
        selectedData.push(box.dataset.hash);
        setSelectedData(selectedData);
        document.querySelectorAll(`.${box.dataset.hash}`).forEach((item) => {
          localStorage.setItem("ardial", box.dataset.hash);
          item.classList.add("line-through");
        });
      } else {
        let selectedData = getSelectedData();
        setSelectedData(selectedData.filter((val) => val !== box.dataset.hash));
        document.querySelectorAll(`.${box.dataset.hash}`).forEach((item) => {
          localStorage.setItem("ardial", box.dataset.hash);
          item.classList.remove("line-through");
        });
      }
      if (getSelectedData().length === 0) {
        const item = container.querySelector(".save-button");
        item.classList.remove("cursor-pointer");
        item.classList.add("opacity-50");
        item.classList.add("pointer-events-none");
        item.classList.add("cursor-not-allowed");
      } else {
        const item = container.querySelector(".save-button");
        item.classList.add("cursor-pointer");
        item.classList.remove("cursor-not-allowed");
        item.classList.remove("opacity-50");
        item.classList.remove("pointer-events-none");
      }
    });
  });
};

const createNewTask = (hideSidebar) => {
  removeActiveSidebar(true);

  if (hideSidebar === true) {
    if (window.length < 768) {
      toggleSidebar();
    }
  }

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

const resetTasks = () => {
  const confirmReset = confirm(
    "Are you sure you want to reset all tasks? This action cannot be undone."
  );
  if (confirmReset) {
    localStorage.removeItem("tasks");
    location.reload();
  }
};

const toggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
};

const showTaskDetails = (taskId) => {
  localStorage.setItem("ardial", "1");
  const tasks = getTasks();
  const task = tasks.find((t) => t.uniqueId === taskId);

  const container = document.querySelector(".container");
  container.innerHTML = taskDetailsTemplate(task, getDueLabel(task.due, false));
};

const goBack = () => {
  location.reload();
};

const markAsCompleted = (taskId) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((t) => t.uniqueId === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].isCompleted = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.reload();
  }
};

const deleteTask = (taskId) => {
  if (confirm("Are you sure you want to delete this task?")) {
    const tasks = getTasks();
    const filteredTasks = tasks.filter((t) => t.uniqueId !== taskId);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
    location.reload();
  }
};

const formatText = (text) => {
  if (!text) return "";

  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const editProfile = () => {
  const currentName = document.getElementById("user-name").textContent;
  const currentPosition = document.getElementById("user-position").textContent;

  const newName = prompt("Enter your name (one word):", currentName);
  if (newName !== null && newName.trim() !== "") {
    const newPosition = prompt(
      "Enter your job title (max 2 words):",
      currentPosition
    );
    if (newPosition !== null) {
      const formattedName = formatText(newName.trim().split(" ")[0]);
      const formattedPosition = formatText(
        newPosition.trim().split(" ").slice(0, 2).join(" ")
      );

      localStorage.setItem("userName", formattedName);
      localStorage.setItem("userPosition", formattedPosition);

      document.getElementById("user-name").textContent = formattedName;
      document.getElementById("user-position").textContent = formattedPosition;
    }
  }
};

const loadProfile = () => {
  const savedName = localStorage.getItem("userName");
  const savedPosition = localStorage.getItem("userPosition");

  if (savedName) {
    document.getElementById("user-name").textContent = savedName;
  }
  if (savedPosition) {
    document.getElementById("user-position").textContent = savedPosition;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  loadProfile();

  if (getTasks()) {
    const updatedData = getTasks().map((item) => {
      if (getDueLabel(item.due, false) === "Overdue") {
        item.isCompleted = true;
      }
      return item;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedData));
  }

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
    createNewTask(true);
  } else {
    handleSidebarClick("allItem");
  }
});

window.handleSidebarClick = handleSidebarClick;
window.createNewTask = createNewTask;
window.toggleSidebar = toggleSidebar;
window.resetTasks = resetTasks;
window.showTaskDetails = showTaskDetails;
window.goBack = goBack;
window.markAsCompleted = markAsCompleted;
window.deleteTask = deleteTask;
window.editProfile = editProfile;
window.loadProfile = loadProfile;
