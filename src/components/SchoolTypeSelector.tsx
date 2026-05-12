import { GraduationCap, School } from 'lucide-react';
import { SchoolType } from '../types';

interface SchoolTypeSelectorProps {
  onSelect: (type: SchoolType) => void;
}

export function SchoolTypeSelector({ onSelect }: SchoolTypeSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Conduct Certificate Generator
          </h1>
          <p className="text-lg text-gray-600">
            Select your school type to generate a professional conduct certificate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => onSelect('open')}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Open School
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  For State Institute of Open Schooling certificates with study centre information
                </p>
              </div>
              <div className="pt-4">
                <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium group-hover:bg-blue-100 transition-colors">
                  Select Open School
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect('regular')}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-green-500 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <School className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Regular School
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  For B.C High School Ranpur regular certificates without open schooling affiliation
                </p>
              </div>
              <div className="pt-4">
                <span className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium group-hover:bg-green-100 transition-colors">
                  Select Regular School
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
