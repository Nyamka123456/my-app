 "use client";
 
 import { useState } from "react";
 import data from "../../utils/student.json";
 import data2 from "../../utils/teacher.json"
 
 export default function Header() {
   const [search, setSearch] = useState("");
 
   const filteredStudents = data.filter((student) =>
  student.firstname.toLowerCase().includes(search.toLowerCase())
);

const filteredTeachers = data2.filter((teacher) =>
  teacher.name.toLowerCase().includes(search.toLowerCase())
);

   return (
     <div className="bg-gray-100 min-h-screen">
       <header className="w-full bg-white text-gray-900 px-6 py-4 flex justify-between items-center mb-6 border-b border-gray-200 shadow-sm">
         <h1 className="text-xl font-bold text-gray-900">
           School System
         </h1>
 
         <input
           type="text"
           className="border border-gray-300 bg-white rounded-xl px-3 py-1 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
           placeholder="Search..."
           value={search}
           onChange={(e) => setSearch(e.target.value)}
         />
 
         <nav className="flex gap-6">
           <a href="/"  className="text-gray-500 hover:text-gray-900 transition">
             Students
           </a>
           <a href="/teacher" className="text-gray-500 hover:text-gray-900 transition">
             Teachers
           </a>
           <a href="/yes" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
             Students v2
           </a>
         </nav>
       </header>
 
       <div className="grid gap-6 px-6">
         {filteredStudents.length === 0 && filteredTeachers.length === 0 ? (
           <div className="text-center text-gray-500 mt-6 col-span-full">
             No data
           </div>
         ) : (
          <div className="grid gap-6 px-6">
           {filteredStudents.map((student) => (
             <div
               key={student.id}
               className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
             >
               <div className="flex items-center gap-4 mb-3">
                 <img
                   src={student.image}
                   alt=""
                   className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                 />
                 <div>
                   <h2 className="text-lg font-semibold text-gray-900">
                     {student.firstname}
                   </h2>
                   <p className="text-gray-500 text-sm">
                     {student.firstname}@gmail.com
                   </p>
                 </div>
               </div>
 
               <div className="text-gray-600 text-sm mb-3">
                 Height: {student.height} cm
                 <div className="flex gap-2 items-center">
                   Country:
                   <img
                     src={student.country}
                     className="w-5 h-4 object-cover rounded-sm border border-gray-300"
                   />
                 </div>
               </div>
 
               <div>
                 <p className="text-sm mb-2 font-medium text-gray-800">
                   Items:
                 </p>
                 <div className="flex flex-col gap-2">
                   {student.items.map((item) => (
                     <div
                       key={item.id}
                       className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition border border-gray-100"
                     >
                       <img
                         src={item.image}
                         alt={item.name}
                         className="w-10 h-10 rounded-md object-scale-down bg-white"
                         
                       />
                       <span className="text-sm text-gray-800">
                         {item.name}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           ))}
           {filteredTeachers.map((teacher) => (
        <div
          key={`t-${teacher.id}`}
          className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={teacher.image}
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {teacher.lastname} {teacher.name}
              </h2>
              <p className="text-gray-500 text-sm">
                {teacher.name}@nhs.edu.mn
              </p>
              
            </div>
          </div>
          <div className="text-gray-500 flex gap-2 items-center">
                   Country:
                   <img
                     src={teacher.country}
                     className="w-5 h-4 object-cover rounded-sm border border-gray-300"
                   />
                 </div>
        </div>
           ))}
           </div>
         )}
       </div>
     </div>
   );
 }