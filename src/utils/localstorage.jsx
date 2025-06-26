



const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Prepare report",
        description: "Monthly sales report",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        date: "2026-11-03"
      },
      {
        title: "Client call",
        description: "Discuss project scope",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        date: "2025-09-20"
      },
      {
        title: "Data backup",
        description: "Backup database",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        date: "2027-03-13"
      }
    ]
  },
  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 3, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Code Review",
        description: "Review new merge request",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        date: "2026-06-17"
      },
      {
        title: "Team Standup",
        description: "Attend daily standup",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        date: "2025-12-09"
      },
      {
        title: "Update Docs",
        description: "Update API documentation",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        date: "2027-08-01"
      },
      {
        title: "Bug Fixing",
        description: "Resolve issue #123",
        category: "Debugging",
        active: true,
        newTask: true,
        completed: false,
        date: "2025-04-22"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 3, newTask: 2, completed: 2, failed: 0 },
    tasks: [
      {
        title: "Test deployment",
        description: "Check staging deployment",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        date: "2026-03-18"
      },
      {
        title: "Client feedback",
        description: "Incorporate feedback",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        date: "2025-07-27"
      },
      {
        title: "Design banner",
        description: "Create marketing banner",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        date: "2027-05-10"
      },
      {
        title: "Security Audit",
        description: "Check access controls",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        date: "2026-12-01"
      },
      {
        title: "Write script",
        description: "Automation for login",
        category: "Automation",
        active: true,
        newTask: false,
        completed: false,
        date: "2025-02-14"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Training",
        description: "Attend Python workshop",
        category: "Learning",
        active: true,
        newTask: true,
        completed: false,
        date: "2025-10-25"
      },
      {
        title: "Update CRM",
        description: "Input lead data",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        date: "2026-02-05"
      },
      {
        title: "Server check",
        description: "Check server health",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        date: "2027-09-19"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 4, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Market research",
        description: "Analyze trends",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        date: "2026-08-30"
      },
      {
        title: "Client follow-up",
        description: "Email pending clients",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        date: "2025-05-14"
      },
      {
        title: "Performance review",
        description: "Prepare self-assessment",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        date: "2027-11-11"
      },
      {
        title: "Campaign planning",
        description: "Q3 social media plan",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        date: "2026-04-03"
      },
      {
        title: "Bug verification",
        description: "Test reported issues",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        date: "2025-06-17"
      }
    ]
  }
];




const admin = [{
  "id": 100,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = () =>{
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees =  JSON.parse(localStorage.getItem('employees'))
       const admin =  JSON.parse(localStorage.getItem('admin'))

     return{employees, admin}
}
