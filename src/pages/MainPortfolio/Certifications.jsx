import React from "react";

function Certifications({ Title, color, sectionData }) {
  return (
    <section className={`${color} w-full py-10 rounded-2xl`}>
      <h2 className="text-3xl font-bold text-center mb-10 text-white uppercase">
        🏅 {Title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
        {sectionData.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-contain bg-gray-100 "
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600">{cert.organization}</p>
              <p className="text-xs text-gray-500 mb-3">{cert.date}</p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
