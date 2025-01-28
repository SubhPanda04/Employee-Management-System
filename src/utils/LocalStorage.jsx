localStorage.clear();

const employees = [
  {
    "employees": [
      {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "taskNumber": {
          "active": 2,
          "newtask": 1,
          "completed": 0,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Submit report",
            "taskDescription": "Complete the financial report for Q4.",
            "taskDate": "2025-01-28",
            "category": "Finance",
            "active": true,
            "newtask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Client Meeting",
            "taskDescription": "Attend the client meeting at 3 PM.",
            "taskDate": "2025-01-25",
            "category": "Meeting",
            "active": true,
            "newtask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "firstName": "Vivaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumber": {
          "active": 2,
          "newtask": 2,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Update Website",
            "taskDescription": "Make UI changes as per feedback.",
            "taskDate": "2025-01-27",
            "category": "Development",
            "active": true,
            "newtask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Test API",
            "taskDescription": "Perform integration testing for the new API.",
            "taskDate": "2025-01-26",
            "category": "Testing",
            "active": false,
            "newtask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Prepare Presentation",
            "taskDescription": "Create slides for the upcoming workshop.",
            "taskDate": "2025-01-30",
            "category": "Documentation",
            "active": true,
            "newtask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "firstName": "Advait",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumber": {
          "active": 2,
          "newtask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Inventory Audit",
            "taskDescription": "Conduct the monthly inventory audit.",
            "taskDate": "2025-01-31",
            "category": "Logistics",
            "active": true,
            "newtask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Team Briefing",
            "taskDescription": "Host the weekly team briefing session.",
            "taskDate": "2025-01-25",
            "category": "Management",
            "active": false,
            "newtask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Code Review",
            "taskDescription": "Review PRs for the recent feature additions.",
            "taskDate": "2025-01-28",
            "category": "Development",
            "active": true,
            "newtask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "firstName": "Ishaan",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumber": {
          "active": 1,
          "newtask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Market Analysis",
            "taskDescription": "Compile a report on the latest market trends.",
            "taskDate": "2025-01-29",
            "category": "Research",
            "active": true,
            "newtask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Social Media Plan",
            "taskDescription": "Draft the social media content plan for February.",
            "taskDate": "2025-01-26",
            "category": "Marketing",
            "active": false,
            "newtask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "firstName": "Rohan",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumber": {
          "active": 2,
          "newtask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "System Backup",
            "taskDescription": "Ensure a full system backup is completed.",
            "taskDate": "2025-01-27",
            "category": "IT",
            "active": false,
            "newtask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Draft Proposal",
            "taskDescription": "Prepare the project proposal for the new client.",
            "taskDate": "2025-01-28",
            "category": "Sales",
            "active": true,
            "newtask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Compliance Check",
            "taskDescription": "Verify compliance with new regulations.",
            "taskDate": "2025-01-31",
            "category": "Legal",
            "active": true,
            "newtask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "admin@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newtask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Employee Review",
        "taskDescription": "Review employee performance for Q1.",
        "taskDate": "2025-01-30",
        "category": "Management",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget Allocation",
        "taskDescription": "Approve the budget allocation for upcoming projects.",
        "taskDate": "2025-01-29",
        "category": "Finance",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];


export const setLocalStorage = ()=> {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
}
