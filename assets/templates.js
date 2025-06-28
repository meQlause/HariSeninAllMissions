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
      ? `<input type="checkbox" data-index="${task.uniqueId}" class="checkbox-state mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500">`
      : "";
  return `
        <div class="flex items-start">
        ${checkbox}
            <div class="ml-3 flex-1">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium text-gray-800">
                    ${task.title}
                    </h3>
                    <div class="flex items-center">
                        <span class="priority-${task.priority.toLocaleLowerCase()} text-xs px-2 py-1 rounded-full font-medium border">
                        ${task.priority}
                        </span>
                        ${generateBadge(task, dueLabel)}
                    </div>
                </div>
                <p class="text-gray-600 mt-1">${task.description}</p>
                <div class="flex items-center mt-3 text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>   
                    </svg>
                    ${dueLabel} 
                    : 
                    ${task.due.split("+")[0].split("T").join(", ")}
                    <span class="mx-2">•</span>
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                    </svg>
                    ${task.category}
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
          <header class="bg-white shadow-sm border-b border-gray-200 p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">All Tasks</h2>
                <p class="text-gray-600 mt-1">Bellow is all your To do list</p>
              </div>

              <div class="flex items-center space-x-4">
                <!-- Search Bar -->
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    class="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  class="flex flex-row items-center justify-center px-3 w-24 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white font-medium cursor-pointer save-button"
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
                  Save
                </button>
              </div>
            </div>
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
        <header class="bg-white shadow-sm border-b border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">Add New Task</h2>
                <p class="text-gray-600 mt-1">
                  Create a new task to stay organized
                </p>
              </div>
            </div>
          </div>
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
              <div class="flex items-center justify-between">
                <a
                  href="index.html"
                  class="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                >
                  Cancel
                </a>
                <div class="flex items-center justify-between space-x-4">
                  <a
                    href="index.html"
                    class="px-6 py-3 text-red-600 border border-gray-300 rounded-lg hover:bg-red-200 transition-colors duration-200 font-medium"
                  >
                    Reset
                  </a>
                  <button
                    type="submit"
                    class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center cursor-pointer"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
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
              </div>
            </form>
          </div>
        </main>
`;
};
