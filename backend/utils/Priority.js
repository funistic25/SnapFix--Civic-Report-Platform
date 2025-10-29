export function getDepartmentAndPriority(title) {
  if (!title) return { deptName: null, priority: "Low" };

  const issueMapping = {
    // Water-related
    "water leakage": { deptName: "Water", priority: "High" },
    "broken water pipe": { deptName: "Water", priority: "High" },

    // Electrical-related
    "street light not working": { deptName: "Electrical", priority: "Medium" },
    "broken traffic signal": { deptName: "Electrical", priority: "High" },
    "power outage": { deptName: "Electrical", priority: "High" },

    // Civil-related
    pothole: { deptName: "Civil", priority: "Medium" },
    "road damage": { deptName: "Civil", priority: "Medium" },
    "damaged footpath": { deptName: "Civil", priority: "Low" },

    // Sanitation-related
    "garbage not collected": { deptName: "Sanitation", priority: "Medium" },
    "blocked drain": { deptName: "Sanitation", priority: "High" },

    // Animal Control
    "stray animals": { deptName: "Animal Control", priority: "Low" },
    "animal attack": { deptName: "Animal Control", priority: "High" },
  };

  // Normalize title (trim + case-insensitive match)
  const key = Object.keys(issueMapping).find(
    (k) => k.toLowerCase() === title.toLowerCase()
  );

  if (key) return issueMapping[key];

  // Default if title not found
  return { deptName: "Civil", priority: "Low" };
}

// export function getDepartmentAndPriority(issueTitle) {
//   if (!issueTitle) return { deptName: null, priority: 1 }; // default Low

//   // Define issue → category + numeric priority
//   const issueMapping = {
//     // Water-related
//     "water leakage": { deptName: "Water", priority: 3 },
//     "broken water pipe": { deptName: "Water", priority: 3 },

//     // Electrical-related
//     "street light not working": { deptName: "Electrical", priority: 2 },
//     "broken traffic signal": { deptName: "Electrical", priority: 3 },
//     "power outage": { deptName: "Electrical", priority: 3 },

//     // Civil-related
//     pothole: { deptName: "Civil", priority: 2 },
//     "road damage": { deptName: "Civil", priority: 2 },
//     "damaged footpath": { deptName: "Civil", priority: 1 },

//     // Sanitation-related
//     "garbage not collected": { deptName: "Sanitation", priority: 2 },
//     "blocked drain": { deptName: "Sanitation", priority: 3 },

//     // Animal Control
//     "stray animals": { deptName: "Animal Control", priority: 1 },
//     "animal attack": { deptName: "Animal Control", priority: 3 },
//   };

//   // Normalize issue string
//   const key = Object.keys(issueMapping).find(
//     (k) => k.toLowerCase() === issueTitle.toLowerCase()
//   );

//   if (key) return issueMapping[key];

//   // Default if issue not found
//   return { deptName: "Civil", priority: 1 }; // default category & Low
// }
