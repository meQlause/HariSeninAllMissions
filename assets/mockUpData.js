// const tasks = [
//   {
//     title: "Standup Meeting",
//     description: "Daily team standup on Zoom",
//     priority: "High",
//     due: "2025-06-28T09:00:00+07:00",
//     category: "Meetings",
//     isCompleted: false,
//     uniqueId: 1,
//   },
//   {
//     title: "Update GitHub Issues",
//     description: "Review and update issue statuses for sprint",
//     priority: "Medium",
//     due: "2025-06-28T10:30:00+07:00",
//     category: "Development",
//     isCompleted: false,
//     uniqueId: 2,
//   },
//   {
//     title: "Design Review",
//     description: "Review UI mockups with design team",
//     priority: "High",
//     due: "2025-06-28T11:15:00+07:00",
//     category: "Design",
//     isCompleted: false,
//     uniqueId: 3,
//   },
//   {
//     title: "Lunch with team",
//     description: "Team lunch at local restaurant",
//     priority: "Low",
//     due: "2025-06-28T12:30:00+07:00",
//     category: "Personal",
//     isCompleted: false,
//     uniqueId: 4,
//   },
//   {
//     title: "Client Call",
//     description: "Discuss project scope and deliverables",
//     priority: "High",
//     due: "2025-06-28T14:00:00+07:00",
//     category: "Work",
//     isCompleted: false,
//     uniqueId: 5,
//   },
//   {
//     title: "Code Review",
//     description: "Review pull requests and merge changes",
//     priority: "Medium",
//     due: "2025-06-28T15:30:00+07:00",
//     category: "Development",
//     isCompleted: false,
//     uniqueId: 6,
//   },
//   {
//     title: "Prepare Report",
//     description: "Compile progress report for management",
//     priority: "High",
//     due: "2025-06-28T16:45:00+07:00",
//     category: "Finance",
//     isCompleted: false,
//     uniqueId: 7,
//   },
//   {
//     title: "Plan Weekly Tasks",
//     description: "Organize next week's sprint tasks",
//     priority: "Low",
//     due: "2025-06-28T18:00:00+07:00",
//     category: "Work",
//     isCompleted: false,
//     uniqueId: 8,
//   },
//   {
//     title: "Reply Emails",
//     description: "Reply to important pending emails",
//     priority: "Low",
//     due: "2025-06-28T19:15:00+07:00",
//     category: "Admin",
//     isCompleted: false,
//     uniqueId: 9,
//   },
//   {
//     title: "Evening Run",
//     description: "Jog in the park for 30 minutes",
//     priority: "Low",
//     due: "2025-06-28T20:00:00+07:00",
//     category: "Health",
//     isCompleted: true,
//     uniqueId: 10,
//   },
// ];

let selectedData = [];

export function getSelectedData() {
  return selectedData;
}

export function setSelectedData(newData) {
  selectedData = newData;
}

export const getTasks = () => {
  let data = JSON.parse(localStorage.getItem("tasks"));
  return data ? data : [];
};
