'use client'

import React, { useEffect, useState } from 'react'
import PerformanceMatrix from './EmployeeDashboard/PerformanceMatrix'
import LeavePerformance from './EmployeeDashboard/LeavePerformance'
import TimesheetPerformance from './EmployeeDashboard/TimeSheetPerformance'
import { motion } from "framer-motion"
import {
  
  ClockIcon,
  CalendarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  DocumentIcon,
  PencilIcon,
  LinkIcon,

} from "@heroicons/react/24/outline"

const quickLinks = [
  { name: 'TimeSheet', href: '/timesheet', icon: ClockIcon, color: 'text-blue-600' },
  { name: 'Documents', href: '/documents', icon: DocumentIcon, color: 'text-green-600' },
  { name: 'Holiday Planner', href: '/holiday-planner', icon: CalendarIcon, color: 'text-red-600' },
]

export default function EnhancedDashboard() {

  const team=null;
//hi
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const response = await fetch('http://localhost:8085/employees/team/444');
//       const data = await response.json();
//       setTeam(data);
//     };
//     fetchEmployees();
//   }, []);



const [email, setEmail]=useState('')
const [employeeId, setEmployeeId]=useState('');
const[employeeName,setemployeeName]=useState('');
const[initials,setInitials]=useState('');  // New state to store initials

useEffect(()=>{
  const storedEmail=localStorage.getItem('email');
  const storedEmployeeID=localStorage.getItem('employeeId');
  const firstName=localStorage.getItem('firstName');
  const lastName=localStorage.getItem('lastName');
  const fullName=firstName+" "+lastName;

  if(storedEmail){
    setEmail(storedEmail);
    setEmployeeId(storedEmployeeID);
    setemployeeName(fullName);
    // Get the initials (first letter of firstName and lastName)
    if(firstName && lastName) {
      setInitials(firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase());
    }
  }
},[])


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6"
    >
      <h1 className="mb-8 text-4xl font-bold text-gray-800">{localStorage.getItem("role")==="employee" ? "Employee Dashboard":"Admin Dashboard"}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Employee Details */}
        <div className="col-span-full rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">Employee Details</h2>
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <PencilIcon className="h-5 w-5" />
            </button>
          </div>


            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">{initials}
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">{employeeName||'employeeName not available'}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Employee ID: {employeeId||'employee Id not available'}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">{email || 'Email not available'}</p>
              </div>
            </div>

        </div>

        {/* Performance Metrics */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          
            <PerformanceMatrix/>
          
        </div>

        {/* Company News */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <LeavePerformance/>
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
         <TimesheetPerformance/>
        </div>

        {/* Upcoming Events */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
            <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <ul className="space-y-2">
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Team building workshop</span>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">June 5th</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Quarterly review</span>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">June 15th</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Company-wide meeting</span>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">June 30th</span>
            </li>
          </ul>
        </div>

        {/* Team Members */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Team Members</h2>
            <UserGroupIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex space-x-2">
            {team!==null && team.map((initials, index) => (
              <div key={index} className="flex h-10 w-50 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
                {initials.name}
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Current Projects</h2>
            <BriefcaseIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <ul className="space-y-2">
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Website Redesign</span>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">In Progress</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Mobile App Development</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">On Track</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Customer Feedback Analysis</span>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200">Delayed</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Quick Links</h2>
            <LinkIcon className="h-5 w-5 text-gray-500" />
          </div>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center rounded-md p-2 transition-colors hover:bg-gray-100"
                >
                  <link.icon className={`mr-3 h-5 w-5 ${link.color}`} aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-700">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
