import React, { useState } from 'react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/circles-light.png')] bg-cover bg-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg flex w-full max-w-3xl backdrop-blur-md bg-opacity-90">
        {/* Avatar Section */}
        <div className="flex flex-col items-center justify-center w-1/3 p-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Profile Information</h2>

          {isEditing && (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Last Name" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Password" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" // Added margin bottom here
                pattern="[0-9]*" 
                inputMode="numeric"
              />
            </form>
          )}

          {/* Gap after form section */}
          <div className="mt-4"></div> {/* Added gap here */}
          
          {/* Buttons Section */}
          <div className="flex justify-between mt-auto">
            <button 
              type="button" 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" 
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
