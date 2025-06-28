import {
  addTaskTemplate,
  containerTemplate,
  itemCardTemplate,
  statsTemplate,
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
    container.innerHTML = containerTemplate();
  }

  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";

  const filteredTask = filterList(tasks, filter);
  filteredTask.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";
    div.innerHTML = itemCardTemplate(task, getDueLabel(task.due, false));

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
    title: "Standup Meeting",
    description: "Daily team standup on Zoom",
    priority: "High",
    due: "2025-06-28T09:00:00+07:00",
    category: "Meetings",
    isCompleted: false,
  },
  {
    title: "Update GitHub Issues",
    description: "Review and update issue statuses for sprint",
    priority: "Medium",
    due: "2025-06-28T10:30:00+07:00",
    category: "Development",
    isCompleted: false,
  },
  {
    title: "Design Review",
    description: "Review UI mockups with design team",
    priority: "High",
    due: "2025-06-28T11:15:00+07:00",
    category: "Design",
    isCompleted: false,
  },
  {
    title: "Lunch with team",
    description: "Team lunch at local restaurant",
    priority: "Low",
    due: "2025-06-28T12:30:00+07:00",
    category: "Personal",
    isCompleted: false,
  },
  {
    title: "Client Call",
    description: "Discuss project scope and deliverables",
    priority: "High",
    due: "2025-06-28T14:00:00+07:00",
    category: "Work",
    isCompleted: false,
  },
  {
    title: "Code Review",
    description: "Review pull requests and merge changes",
    priority: "Medium",
    due: "2025-06-28T15:30:00+07:00",
    category: "Development",
    isCompleted: false,
  },
  {
    title: "Prepare Report",
    description: "Compile progress report for management",
    priority: "High",
    due: "2025-06-28T16:45:00+07:00",
    category: "Finance",
    isCompleted: false,
  },
  {
    title: "Plan Weekly Tasks",
    description: "Organize next week's sprint tasks",
    priority: "Low",
    due: "2025-06-28T18:00:00+07:00",
    category: "Work",
    isCompleted: false,
  },
  {
    title: "Reply Emails",
    description: "Reply to important pending emails",
    priority: "Low",
    due: "2025-06-28T19:15:00+07:00",
    category: "Admin",
    isCompleted: false,
  },
  {
    title: "Evening Run",
    description: "Jog in the park for 30 minutes",
    priority: "Low",
    due: "2025-06-28T20:00:00+07:00",
    category: "Health",
    isCompleted: true,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  tasks.forEach((item) => {
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
    const counts = getNumbersOf(tasks, sidebarOrder[index]);
    item.querySelector(".sidebar-number").innerHTML = counts;
    if (counts === 0) {
      item.classList.add("opacity-50");
      item.classList.add("pointer-events-none");
      item.classList.add("cursor-not-allowed");
    }
  });

  const todaysTodo = tasks.filter(
    (item) => getDueLabel(item.due, true) === "Due Today"
  );
  const totalComplete = todaysTodo.filter((item) => item.isCompleted === true);
  const totalOverdue = todaysTodo.filter(
    (item) => getDueLabel(item.due, false) === "Overdue"
  );

  document.querySelector(".stats").innerHTML = statsTemplate(
    todaysTodo.length ? todaysTodo.length : 0,
    totalComplete.length ? totalComplete.length : 0,
    totalOverdue.length ? totalOverdue.length : 0
  );

  handleSidebarClick("allItem");
});

window.handleSidebarClick = handleSidebarClick;
window.createNewTask = createNewTask;
