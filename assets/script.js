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
  const sidebarOrder = [
    "allItem",
    "important",
    "today",
    "upcoming",
    "completed",
    "overdue",
  ];
  document.querySelectorAll(".sidebar-item").forEach((item, index) => {
    const counts = getNumbersOf(sidebarOrder[index]);
    console.log(counts);
    item.querySelector(".sidebar-number").innerHTML = counts;
    if (counts === 0) {
      console.log(counts);
      item.classList.add("opacity-50");
      item.classList.add("pointer-events-none");
      item.classList.add("cursor-not-allowed");
    }
  });

  tasks.forEach((item) => {
    if (getDueLabel(item.due) === "Overdue") {
      item.isCompleted = true;
    }
  });

  handleSidebarClick("allItem");
});

function handleSidebarClick(filter) {
  removeActiveSidebar();

  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";

  const filteredList = filterList(tasks, filter);
  filteredList.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";

    div.innerHTML = `
            <div class="flex items-start">
                <input type="checkbox" class="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3 flex-1">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium text-gray-800">
                        ${task.title}
                        </h3>
                        <div class="flex items-center">
                            <span class="priority-${task.priority.toLocaleLowerCase()} text-xs px-2 py-1 rounded-full font-medium border">
                            ${task.priority}
                            </span>
                            ${generateBadge(task)}
                        </div>
                    </div>
                    <p class="text-gray-600 mt-1">${task.description}</p>
                    <div class="flex items-center mt-3 text-sm text-gray-500">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>   
                        </svg>
                        ${getDueLabel(task.due)}
                        <span class="mx-2">•</span>
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                        </svg>
                        ${task.category}
                    </div>
                </div>
            </div>
      `;
    taskContainer.appendChild(div);
  });
}

function getNumbersOf(filter) {
  return filterList(tasks, filter).length;
}

function removeActiveSidebar() {
  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelectorAll(".sidebar-item")
        .forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

function filterList(tasks, filter) {
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

function generateBadge(task) {
  let toReturn = "";
  if (task.isCompleted === true) {
    toReturn = `
      <span class="text-xs px-2 bg-green-800 text-white py-1 rounded-full font-medium border ml-2">
        Completed
      </span>
    `;
  }
  if (getDueLabel(task.due) === "Overdue") {
    toReturn = `
      <span class="text-xs px-2 bg-red-800 text-white py-1 rounded-full font-medium border ml-2">
        Failed
      </span>
    `;
  }

  return toReturn;
}

function getDueLabel(dueDateStr) {
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
