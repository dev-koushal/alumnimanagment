import React from "react";

function AlumniSkill({alumni}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 lg:col-span-3 hover:shadow-lg transition-all ease-in-out duration-100 hover:shadow-gray-700">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {(alumni.skills)? 
          alumni.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          )):null}
      </div>
    </div>
  );
}

export default AlumniSkill;
