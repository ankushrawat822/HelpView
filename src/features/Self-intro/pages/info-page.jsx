import React, { useState } from 'react';

const UserSelfIntroInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    education: '',
    skills: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send formData to your backend or move to the next page
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Please enter your information</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="experience">
            Experience
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            placeholder="e.g., 3 years or Fresher"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="education">
            Education Background
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            placeholder="e.g., Bachelor’s in Computer Science"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="skills">
            Skills
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="e.g., JavaScript, React, Node.js"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="role">
            Role Applying For
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            placeholder="e.g., Frontend Developer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserSelfIntroInfoForm;
