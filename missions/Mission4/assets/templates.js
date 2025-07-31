const truncateText = (text, mobileLimit, desktopLimit) => {
  if (!text) return "";

  const mobileText =
    text.length > mobileLimit ? text.substring(0, mobileLimit) + "..." : text;

  const desktopText =
    text.length > desktopLimit ? text.substring(0, desktopLimit) + "..." : text;

  return {
    mobile: mobileText,
    desktop: desktopText,
  };
};

const generateBadge = (task, dueLabel) => {
  let toReturn = "";
  if (task.isCompleted === true) {
    toReturn = `
      <span class="text-xs px-2 bg-green-800 text-white py-1 rounded-full font-medium border ml-2">
        Completed
      </span>
    `;
  }
  if (dueLabel === "Overdue") {
    toReturn = `
      <span class="text-xs px-2 bg-red-800 text-white py-1 rounded-full font-medium border ml-2">
        Failed
      </span>
    `;
  }
  return toReturn;
};

export const itemCardTemplate = (task, dueLabel) => {
  const checkbox =
    task.isCompleted === false
      ? `<input type="checkbox" data-hash="${task.uniqueId}" class="checkbox-state mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500">`
      : "";

  const truncatedTitle = truncateText(task.title, 20, 40);
  const truncatedDescription = truncateText(task.description, 40, 80);

  return `
        <div class="text-card">
        <div class="flex items-start">
        ${checkbox}
            <div class="flex flex-col ml-3 flex-1 min-w-0 cursor-pointer" onclick="showTaskDetails('${
              task.uniqueId
            }')">
                <div class="flex items-center justify-between w-full gap-3">
                    <h3 class="${
                      task.uniqueId
                    } text-lg font-medium text-gray-800 break-words flex-1 min-w-0">
                    <span class="md:hidden">${truncatedTitle.mobile}</span>
                    <span class="hidden md:block">${
                      truncatedTitle.desktop
                    }</span>
                    </h3>
                    <div class="flex items-center flex-shrink-0">
                        <span class="priority-${task.priority.toLocaleLowerCase()} text-xs px-2 py-1 rounded-full font-medium border truncate max-w-full">
                        ${task.priority}
                        </span>
                        ${generateBadge(task, dueLabel)}
                    </div>
                </div>
                <p class="${task.uniqueId} text-gray-600 mt-1 break-words">
                  <span class="md:hidden">${truncatedDescription.mobile}</span>
                  <span class="hidden md:block">${
                    truncatedDescription.desktop
                  }</span>
                </p>
                <div class="flex md:flex-row flex-col gap-2 items-start mt-3 text-sm text-gray-500">
                  <div class="flex flex-1 w-full flex-row items-center justify-center">  
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>   
                    </svg>
                    <div class="flex flex-1 w-full flex-col gap-0 md:gap-1 md:flex-row"> 
                      <p class="break-words"> ${dueLabel}</p> 
                      <span class="md:block hidden">-</span>
                      <p class="break-words">${task.due
                        .split("+")[0]
                        .split("T")
                        .join(", ")} </p>
                    </div>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="mr-2 ml-1 md:mx-2">•</span>
                    <svg class="w-4 h-4 mr-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                    </svg>
                    <p class="break-words">${task.category}</p> 
                  </div>
                </div>
            </div>
        </div>
        </div>
      `;
};

export const statsTemplate = (todaysTodo, totalComplete, totalOverdue) => {
  const completePercetage = todaysTodo
    ? Math.round(((totalComplete - totalOverdue) / todaysTodo) * 100)
    : 0;
  const overduePercetage = todaysTodo
    ? Math.round((totalOverdue / todaysTodo) * 100)
    : 0;

  return `
  <div class="mx-auto text-sm text-shadow-amber-400 text-gray-700"> Today's Progress : </div>
    <div class="flex items-center justify-between text-sm">
      <span class="text-gray-600">Completed</span>
      <span class="font-medium text-green-600">
        ${totalComplete - totalOverdue} of 
        ${todaysTodo}</span>
      <span class="text-gray-600">Overdue</span>
      <span class="font-medium text-red-600">
        ${totalOverdue} of 
        ${todaysTodo}</span>
    </div>
    <div class="flex flex-row w-full bg-gray-200 rounded-full h-2">
      <div
        class="bg-red-500 h-2 rounded-l-full"
        style="width: ${overduePercetage}%"
      ></div>
      <div
        class="bg-green-500 h-2 rounded-r-full"
        style="width: ${completePercetage}%"
      ></div>
    </div>
    `;
};

export const containerTemplate = () => {
  return `
    <!-- Header -->
          <header class="md:block flex flex-row justify-between bg-white shadow-sm border-b border-gray-200 p-6">
            <div class="flex flex-col gap-5 items-center justify-between md:mb-4 md:flex-row">
              <div class="mr-auto mb-2 md:mb-0 md:mr-0">
                <h2 class="text-2xl font-bold text-gray-800">All Tasks</h2>
                <p class="text-gray-600 mt-1">Bellow is all your To do list</p>
              </div>
        
              <div class="flex flex-col gap-3 md:flex-row md:mr-0 mr-auto items-center space-x-4">
                <!-- Search Bar -->
                <div class="relative -z-0 m-auto">
                  <input
                    type="date"
                    id="date-search"
                    name="date-search"
                    placeholder="Search tasks by date..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg
                    class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>

                <div
                  class="flex flex-row  items-center justify-center px-3 w-full py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white font-medium save-button opacity-50 pointer-events-none cursor-not-allowed"
                >
                  <svg
                    class="w-5 h-5 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  Mark as Completed
                </div>
              </div>
            </div>
              <button id="hamburger-btn" class="p-2 rounded hover:bg-gray-200 h-10 block md:hidden cursor-pointer" onClick="toggleSidebar()">
                <i class="fa fa-bars text-[1.5rem]"></i>
              </button>
            </header>

          <!-- Task List -->
          <main class="flex-1 overflow-y-auto p-6">
            <div class="space-y-4 max-w-4xl mx-auto task-container">
              <!-- Content -->
            </div>
          </main>
        `;
};

export const addTaskTemplate = () => {
  return `
        <!-- Header -->
        <header class="md:block flex flex-row justify-between bg-white shadow-sm border-b border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">Add New Task</h2>
                <p class="text-gray-600 mt-1 max-w-40 md:max-w-80">
                  Create a new task to stay organized
                </p>
              </div>
            </div>
          </div>
          <button id="hamburger-btn" class="p-2 rounded hover:bg-gray-200 h-10 block md:hidden cursor-pointer" onClick="toggleSidebar()">
            <i class="fa fa-bars text-[1.5rem]"></i>
          </button>
        </header>

        <!-- Add Task Form -->
        <main class="flex-1 p-6 overflow-y-auto
          <div class="space-y-4 max-w-2xl mx-auto">
            <form class="space-y-6">
              <!-- Task Title -->
              <div
                class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div class="space-y-4">
                  <div>
                    <label
                      for="task-title"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Task Title *
                    </label>
                    <input
                      type="text"
                      id="task-title"
                      name="task-title"
                      placeholder="Enter task title..."
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="task-description"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="task-description"
                      name="task-description"
                      rows="4"
                      placeholder="Add a description for your task..."
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Task Details -->
              <div
                class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 class="text-lg font-medium text-gray-800 mb-4">
                  Task Details
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Priority -->
                  <div>
                    <label
                      for="priority"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium" selected>Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>
                  </div>

                  <!-- Category -->
                  <div>
                    <label
                      for="category"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="work">Work</option>
                      <option value="personal">Personal</option>
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                      <option value="meetings">Meetings</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <!-- Due Date -->
                  <div>
                    <label
                      for="due-date"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Due Date *
                    </label>
                    <input
                      type="date"
                      id="due-date"
                      name="due-date"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <!-- Due Time -->
                  <div>
                    <label
                      for="due-time"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Due Time *
                    </label>
                    <input
                      type="time"
                      id="due-time"
                      name="due-time"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col md:flex-row gap-5 items-center justify-between">
              <div class="flex items-center justify-between space-x-4">
                <a
                  href="index.html"
                  class="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                >
                  Cancel
                </a>
                  <button
                    href="index.html"
                    class="px-6 py-3 text-red-600 border border-gray-300 rounded-lg hover:bg-red-200 transition-colors duration-200 font-medium cursor-pointer"
                    onclick="createNewTask(false)"
                  >
                    Reset
                  </button>
                  </div>
                  <button
                    type="submit"
                    class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex justify-center md:justify-start items-center cursor-pointer w-full md:max-w-48"
                  >
                    <svg
                      class="w-5 h-5 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    Create Task
                  </button>
              </div>
            </form>
          </div>
        </main>
`;
};

export const noDataTemplate = (filter) => {
  const getMessage = () => {
    switch (filter) {
      case "allItem":
        return "No active tasks found";
      case "completed":
        return "No completed tasks found";
      case "overdue":
        return "No overdue tasks found";
      case "important":
        return "No high priority tasks found";
      case "today":
        return "No tasks due today";
      case "upcoming":
        return "No upcoming tasks found";
      default:
        return "No tasks found for this date";
    }
  };

  return `
    <div class="flex flex-col items-center justify-center py-12 px-6">
      <div class="text-center">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">${getMessage()}</h3>
        <p class="text-gray-500 mb-6">Get started by creating your first task to stay organized and productive.</p>
        <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium cursor-pointer" onClick="createNewTask(true)">
          <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Create New Task
        </button>
      </div>
    </div>
  `;
};

export const taskDetailsTemplate = (task, dueLabel) => {
  const statusBadge = task.isCompleted
    ? `<span class="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">Completed</span>`
    : dueLabel === "Overdue"
    ? `<span class="text-sm px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">Overdue</span>`
    : `<span class="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">Active</span>`;

  const priorityColor = {
    Low: "bg-gray-100 text-gray-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  };

  return `
    <!-- Header -->
    <header class="md:block flex flex-row justify-between bg-white shadow-sm border-b border-gray-200 p-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button onclick="goBack()" class="mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Task Details</h2>
            <p class="text-gray-600 mt-1">View and manage your task</p>
          </div>
        </div>
      </div>
      <button id="hamburger-btn" class="p-2 rounded hover:bg-gray-200 h-10 block md:hidden cursor-pointer" onClick="toggleSidebar()">
        <i class="fa fa-bars text-[1.5rem]"></i>
      </button>
    </header>

    <!-- Task Details Content -->
    <main class="flex-1 p-6 overflow-y-auto">
      <div class="max-w-4xl mx-auto">
        <!-- Task Header -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div class="flex items-start flex-col-reverse gap-3 md:flex-row justify-between mb-4 min-w-0">
            <h1 class="text-3xl font-bold text-gray-800 flex-1 w-full break-words">${
              task.title
            }</h1>
            <div class="flex items-center space-x-3">
              ${statusBadge}
              <span class="text-sm px-3 py-1 ${
                priorityColor[task.priority]
              } rounded-full font-medium">
                ${task.priority}
              </span>
            </div>
          </div>
          
          <p class="text-gray-600 text-lg leading-relaxed flex-1 w-full break-words">${
            task.description || "No description provided"
          }</p>
        </div>

        <!-- Task Information Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Due Date & Time -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Due Date & Time
            </h3>
            <div class="space-y-2">
              <p class="text-gray-600">
                <span class="font-medium">Status:</span> 
                <span class="ml-2 ${
                  dueLabel === "Overdue"
                    ? "text-red-600"
                    : dueLabel === "Due Today"
                    ? "text-orange-600"
                    : "text-green-600"
                }">
                  ${dueLabel}
                </span>
              </p>
              <p class="text-gray-600">
                <span class="font-medium">Date:</span> 
                <span class="ml-2">${task.due
                  .split("+")[0]
                  .split("T")
                  .join(", ")}</span>
              </p>
            </div>
          </div>

          <!-- Category -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              Category
            </h3>
            <p class="text-gray-600">
              <span class="font-medium">Type:</span> 
              <span class="ml-2">${task.category}</span>
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Actions</h3>
          <div class="flex flex-col sm:flex-row gap-4">
            ${
              !task.isCompleted
                ? `
              <button onclick="markAsCompleted('${task.uniqueId}')" class="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Mark as Completed
              </button>
            `
                : ""
            }
            <button onclick="deleteTask('${
              task.uniqueId
            }')" class="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
};
