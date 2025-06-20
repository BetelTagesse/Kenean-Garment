"use client";

import React from "react";

// Placeholder for the main project image
const PLACEHOLDER_MAIN_IMAGE =
  "https://placehold.co/1200x800/34D399/ffffff?text=Main+Project";

// New ProjectInfoCard Component - this renders the "Project Information" box
const ProjectInfoCard = ({
  projectName,
  category,
  client,
  date,
  price,
  website,
  status,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h3 className="text-xl font-semibold border-b pb-2 text-gray-800">
        Project Information
      </h3>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Project:</span>
        <span>{projectName}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Category:</span>
        <span>{category}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Client:</span>
        <span>{client}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Date:</span>
        <span>{date}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Price:</span>
        <span>{price}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Website:</span>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {website.replace(/https?:\/\//, "")}
        </a>
      </div>
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">Status:</span>
        <span>{status}</span>
      </div>
    </div>
  );
};

const ProjectSingle = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section - from your previous code */}
      <div className="bg-[#0A1A3A] text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Project Details</h1>
        <p className="text-green-500 text-lg sm:text-xl font-medium">
          Home / Projects / Details
        </p>
      </div>

      {/* Main Project Image and Info Section - This is the primary section matching your screenshot */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Main Project Image */}
        <div className="md:col-span-2">
          {/* Main image - matches the large image in your screenshot */}
          <img
            src="https://placehold.co/800x600/D1D5DB/1F2937?text=Your+Project+Image" // A more direct placeholder for the screenshot image
            alt="Main Project Visual"
            className="w-full h-auto object-cover rounded-lg shadow-lg" // Added rounded-lg and shadow for aesthetics
          />
        </div>

        {/* Right Column: Project Information Card */}
        {/* This directly uses the ProjectInfoCard component */}
        <ProjectInfoCard
          projectName="Chiffon Fabric"
          category="Chiffon"
          client="Willie J Ogles"
          date="Feb 20, 2023"
          price="$1000"
          website="http://www.domain.com"
          status="Completed"
        />
      </div>

      {/* Rest of the ProjectSingle page content would follow here (Project Description, Related Projects, etc.) */}
      {/* For demonstration, I'm just including the main part of the screenshot */}

      {/* Project Description (from previous version) */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Project Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
      </div>

      {/* Related Projects Section (from previous version) */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#0A1A3A]">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Using arbitrary placeholder images for related projects */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-56">
                  <img
                    src={`https://placehold.co/600x400/94A3B8/ffffff?text=Related+${
                      index + 1
                    }`}
                    alt={`Related Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    Related Project Title {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">Fabric Development</p>
                  <a
                    href={`/project/${index + 1}`}
                    className="text-green-600 text-sm mt-2 inline-block hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;
