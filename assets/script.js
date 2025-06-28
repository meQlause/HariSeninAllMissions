import {
  addTaskTemplate,
  containerTemplate,
  itemCardTemplate,
} from "./template.js";
import {
  filterList,
  getDueLabel,
  removeActiveSidebar,
  getNumbersOf,
} from "./helper.js";

const handleSidebarClick = (filter) => {
  removeActiveSidebar(false);
  const container = document.querySelector(".container");
  if (container.querySelector(".task-container") === null) {
    container.innerHTML = "";
    container.innerHTML = containerTemplate();
  }
  const taskContainer = document.querySelector(".task-container");

  taskContainer.innerHTML = "";
  filterList(tasks, filter).forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";

    div.innerHTML = itemCardTemplate(task, getDueLabel(task.due));
    taskContainer.appendChild(div);
  });
};

const createNewTask = () => {
  removeActiveSidebar(true);

  const container = document.querySelector(".container");
  container.innerHTML = addTaskTemplate();
};

const tasks = [
  {
    title: "Fix broken links",
    description: "Audit and repair all 404 errors on site",
    priority: "High",
    due: "2025-06-26T14:00:00",
    category: "Development",
    isCompleted: false,
  },
  {
    title: "Review project proposals",
    description:
      "Review all submitted project proposals and provide feedback by end of day",
    priority: "High",
    due: "2025-06-28T18:00:00",
    category: "Work",
    isCompleted: false,
  },
  {
    title: "Team meeting",
    description: "Weekly sync-up with the product team",
    priority: "Medium",
    due: "2025-06-30T09:00:00",
    category: "Meetings",
    isCompleted: false,
  },
  {
    title: "Clean up workspace",
    description: "Organize desk and delete unnecessary files",
    priority: "Low",
    due: "2025-07-03T15:00:00",
    category: "Personal",
    isCompleted: false,
  },
  {
    title: "Submit report",
    description: "Submit Q2 financial report",
    priority: "High",
    due: "2025-07-10T12:00:00",
    category: "Finance",
    isCompleted: true,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  tasks.forEach((item) => {
    if (getDueLabel(item.due) === "Overdue") {
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
    const counts = getNumbersOf(tasks, sidebarOrder[index]);
    item.querySelector(".sidebar-number").innerHTML = counts;
    if (counts === 0) {
      item.classList.add("opacity-50");
      item.classList.add("pointer-events-none");
      item.classList.add("cursor-not-allowed");
    }
  });

  handleSidebarClick("allItem");
});

window.handleSidebarClick = handleSidebarClick;
window.createNewTask = createNewTask;
