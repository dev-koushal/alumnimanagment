import { ArrowBigDownDashIcon, ArrowBigLeftDashIcon, Github, HeartHandshakeIcon, Linkedin, Mail, MessageCircleDashed } from "lucide-react";
import React from "react";

function AlumniSocialLInks() {
  return (
    <div className="flex gap-2 ">
      <button className="flex items-center gap-2 bg-white cursor-pointer text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
        <Mail className="w-4 h-4" />
        <span className="hidden sm:inline">Contact</span>
      </button>
      <button className="flex items-center gap-2 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors">
        <Linkedin className="w-4 h-4" />
        <span className="hidden sm:inline">LinkedIn</span>
      </button>
      <button className="flex items-center gap-2 bg-gray-800 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
        <Github className="w-4 h-4" />
        <span className="hidden sm:inline">GitHub</span>
      </button>
      <button className=" hidden md:flex items-center gap-2 bg-white cursor-pointer text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
        <HeartHandshakeIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Connect Now</span>
      </button>
      <button className=" hidden md:flex items-center gap-2 bg-white cursor-pointer text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
         <MessageCircleDashed className="w-7 h-7" />
        <span className="hidden sm:inline">Meassages</span>
      </button>
      
    </div>
  );
}

export default AlumniSocialLInks;
