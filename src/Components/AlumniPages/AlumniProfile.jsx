import React from "react";
import {
  MapPin,
  Calendar,
  Building,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  Users,
  BookOpen,
  HeartHandshakeIcon,
  MessageCircleDashed,
} from "lucide-react";
import { Link } from "react-router";
import { useParams } from "react-router";
import ExplorePage from "../StudentPage/ExplorePage";
import AlumniExperience from "./AlumniExperience";
import AlumniSocialLInks from "./AlumniSocialLInks";
import AlumniSkill from "./AlumniSkill";
function AlumniProfile() {
  const { id } = useParams();
  const alumni = ExplorePage.find((a) => a.id == id);
  if (!alumni) return <div>Profile not found</div>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      {/* Header Section */}

      <div className="bg-gradient-to-r h-64 w-full  from-blue-600 to-blue-800 text-white">
        <Link to="/student/explore">
          <button className="btn m-2 ">Go back</button>
        </Link>
        <div className="py-2 px-2">
          <div className="flex flex-row items-start md:items-center gap-6">
            {/* Profile Image */}
            <div className="relative ">
              <img
                src={alumni.alumniImg}
                alt={alumni.alumniname}
                className="w-40 h-36 md:w-40 md:h-40 ml-1 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            {/* Basic Info */}
            <div className="">
              <h1 className="text-2xl md:text-4xl font-bold mb-1">
                {alumni.alumniname}
              </h1>
              <p className="text-md text-blue-100 mb-3">
                {alumni.position} at {alumni.company}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-blue-100 mb-4">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{alumni.branch}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Class of {alumni.yog}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{alumni.city}</span>
                </div>
              </div>

              {/* social links */}
              <AlumniSocialLInks />
            </div>
          </div>
        </div>
      </div>
      {/* connect link for the mobile view */}
      <div className="mx-auto px-4 md:px-6 py-8">
      <div className="bg-blue-200 rounded-full">
        <button className=" md:hidden flex items-center gap-2 cursor-pointer text-blue-600 w-full px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors mb-4 ">
        <HeartHandshakeIcon className="w-8 h-8" />
        <span className="inline ">Connect Now</span>
      </button>
      </div>
      <div className="bg-blue-200 rounded-full">
        <button className=" md:hidden flex items-center gap-2 cursor-pointer text-blue-600 w-full px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors mb-4 ">
      <MessageCircleDashed className="w-7 h-7 text-shadow-blue-950 "  />
        <span className="inline ">Messages</span>
      </button>
      </div>
      
      {/* Skills and about section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-3 ">
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h2 className="text-2xl font-bold text-gray-800 ">About</h2>
              <p className="text-gray-600 leading-relaxed">{alumni.bio}</p>
            </div>
          </div>
          {/* freaking skilslslsll */}
          <AlumniSkill alumni={alumni} />
        </div>
        <AlumniExperience alumni={alumni} />
      </div>
    </div>
  );
}

export default AlumniProfile;
