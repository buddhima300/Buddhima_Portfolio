import { X, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactInfo = {
    email: "lkc.buddhima@gmail.com",
    phone: "+94 (70) 536-3091",
    location: "Balangoda, Sri Lanka",
    linkedin: "https://www.linkedin.com/in/lakmal-c-buddhima/",
    github: "https://github.com/buddhima300",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent bg-opacity-50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white/90 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mt-1 text-gray-600">
            Feel free to reach out through any of these channels
          </p>
        </div>

        {/* Contact Details */}
        <div className="p-2 space-y-4">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex  gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
              <Mail className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-left font-medium text-gray-500">
                Email
              </p>
              <p className="text-gray-800">{contactInfo.email}</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
              <Phone className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-left font-medium text-gray-500">
                Phone
              </p>
              <p className="text-gray-800">{contactInfo.phone}</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex gap-4 p-3 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
              <MapPin className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-left font-medium text-gray-500">
                Location
              </p>
              <p className="text-gray-800">{contactInfo.location}</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
              <Linkedin className="text-blue-700" size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-500">LinkedIn</p>
              <p className="text-gray-800">{contactInfo.linkedin}</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
              <Github className="text-gray-700" size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-500">GitHub</p>
              <p className="text-gray-800">{contactInfo.github}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
