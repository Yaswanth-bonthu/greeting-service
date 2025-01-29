import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import EmailConfigPopup from '../components/EmailConfigPopup';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [configPopup, setConfigPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Ravi",
    lastName: "Kiran",
    email: "ravivarma25052@gmail.com",
    password: "********",
    phone: "+911234567890",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false)
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/circles-light.png')] bg-cover bg-center">
      <div className="bg-white mt-[5%] p-6 rounded-2xl shadow-lg flex w-full max-w-3xl backdrop-blur-md bg-opacity-90">
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

          {isEditing ? (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <p className="w-full p-2 border rounded-lg bg-gray-100">{formData.firstName}</p>
                <p className="w-full p-2 border rounded-lg bg-gray-100">{formData.lastName}</p>
              </div>
              <p className="w-full p-2 border rounded-lg bg-gray-100">{formData.email}</p>
              <p className="w-full p-2 border rounded-lg bg-gray-100">{formData.password}</p>
              <p className="w-full p-2 border rounded-lg bg-gray-100 mb-4">{formData.phone}</p>
            </div>
          )}

          {/* Buttons Section */}
          <div className="flex justify-between my-6">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {isEditing && <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>}
          </div>

          <button
            onClick={() => setConfigPopup(true)}
            className='w-fit flex items-center gap-1 py-0 lg:py-1.5 lg:px-4 px-2 border-2 rounded-md transition-all duration-300 ease-in-out text-blue-600 border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent'
          >
            <IoSettingsOutline className='lg:mr-1 text-xl' />
            <span className='lg:block hidden'>Email Configure</span>
          </button>
        </div>
      </div>
      {configPopup && <EmailConfigPopup onClose={() => setConfigPopup(false)} />}
    </div>
  );
};

export default ProfilePage;
