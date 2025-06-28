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

export const getTasks = () => {
  //   return tasks;
  console.log(JSON.parse(localStorage.getItem("tasks")));
  return JSON.parse(localStorage.getItem("tasks"));
};
