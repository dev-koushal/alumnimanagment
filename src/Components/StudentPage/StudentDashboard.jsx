import React, { useState } from 'react';
import { Calendar, Copy, Lock, MapPin, Phone, Mail } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router';
import Image from './image.png'
import './StudentDashboard.css'
const StudentDashboard = () => {
const navigate = useNavigate();
  

const [formData, setFormData] = useState({
    firstName: 'Koushal',
    lastName: 'Yadav',
    department: 'CSE',
    phone: '7805042XXX',
    email: 'koushalydv99@gmail.com',
    country: 'INDIA',
    city: 'Bhopal',
    address: 'Indrapuri Bhopal, India'
  });

  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  
const handleSave = () => {
  localStorage.setItem("firstName",formData.firstName );
};

  
let getName = () =>{
    const name = localStorage.getItem("firstName");
  if(name != ""){
     return name;
  }else{
    
  }
  }


  const handleCancel = () => {
    console.log('Cancelled changes');
  };

  return (
    <>
    
    <div className="min-h-screen p-2 relative overflow-hidden bg-gradient-to-b from-[#605dff] to-black ">
       <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-2xl animate-bounce animation-delay-2000"></div>
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px'
          }}
        ></div>
      </div>

      <div className="relative z-10 pt-6">
        <div className="max-w-6xl mx-auto">
        
          <div className="flex items-center justify-between mb-8">
            <h1 className=" text-xl md:text-3xl font-bold text-white">Your Details</h1>
            <div className="flex gap-4">
              <div onClick={()=>navigate('/student/explore')} id='explore' className=' btn w-40 md:w-80 h-10 md:h-12' >Explore</div>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-4 border border-gray-800/50 shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-4">Basic Info</h2>
     
            <div className="flex items-start gap-6 mb-8">
              <div className="relative">
                <img
                  src={Image}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-purple-500/50 shadow-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg md:text-2xl font-bold text-white">Koushal Yadav</h3>
                </div>
                <button className="flex items-center gap-2 px-2 md:px-4  py-0.5 md:py-2 bg-gray-800/60 backdrop-blur-sm text-gray-300 rounded-lg hover:bg-gray-700/60 transition-all duration-300 border border-gray-700">
                  <Lock size={16} />
                  Change Password
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">First Name:</label>
                <input
                  type="text"
                  value={getName()}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Last Name:</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Department:</label>
                <select
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                >
                  <option value="UI/UX">CSE</option>
                  <option value="Engineering">Mechanical</option>
                  <option value="Marketing">Civil</option>
                  <option value="Sales">BioChem</option>
                </select>
              </div>
              
            </div>

          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-white" />
                  </div>
                  Contacts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-red-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{formData.phone}</div>
                      <div className="text-gray-400 text-sm">{formData.email}</div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors ml-auto">
                      <Copy size={16} />
                    </button>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone:</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email:</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

            
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  Address
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                      <MapPin size={18} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{formData.address}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Country:</label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">City:</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Full Address:</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
                onClick={()=>handleSave()}
                className="mt-2 py-3 hover:cursor-pointer hover:bg-white px-9 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                SAVE
              </button>
          </div>
          
        </div>
      </div>

      <style jsx="true">{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
      
    </div>
    </>
  );
  <Outlet />
};

export default StudentDashboard;
