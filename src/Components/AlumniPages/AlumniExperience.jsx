import { Building, MapPin } from "lucide-react";
import React from "react";

function AlumniExperience({ alumni }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Building className="w-6 h-6 text-blue-600" />
        Experience
      </h2>
      <div className="space-y-6">
        {(alumni.experiences)?alumni.experiences.map((exp) => (
          <div
            key={exp.id}
            className="border-l-4 border-blue-200 pl-6 relative"
          >
            <div className="absolute -left-2.5 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
            <div className="bg-gray-50 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.position}
                </h3>
                <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
            </div>
          </div>
        )):null}
      </div>
    </div>
  );
}

export default AlumniExperience;
