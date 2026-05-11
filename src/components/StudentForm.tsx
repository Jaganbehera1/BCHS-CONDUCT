import { useState } from 'react';
import { ArrowLeft, FileText, MapPin, Home, Mail, Navigation, Building, Map, Plus, Trash2, Eye } from 'lucide-react';
import { CertificateData, SchoolType } from '../types';

interface StudentFormProps {
  schoolType: SchoolType;
  onBack: () => void;
  onSubmit: (data: CertificateData) => void;
  students: CertificateData[];
  onRemoveStudent: (index: number) => void;
  onProceedToPreview: () => void;
}

export function StudentForm({ schoolType, onBack, onSubmit, students, onRemoveStudent, onProceedToPreview }: StudentFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    parentRelation: 'S/O' as 'S/O' | 'D/O',
    // Individual address fields
    at: '',
    po: '',
    ps: '',
    // block: '',
    dist: '',
    state: '',
    // pin: '',
    yearFrom: '',
    yearTo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (students.length < 2) {
      onSubmit({
        ...formData,
        schoolType,
        issueDate: new Date(),
      });
      // Reset form
      setFormData({
        studentName: '',
        parentName: '',
        parentRelation: 'S/O' as 'S/O' | 'D/O',
        at: '',
        po: '',
        ps: '',
        // block: '',
        dist: '',
        state: '',
        // pin: '',
        yearFrom: '',
        yearTo: '',
      });
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i + 5);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({
      ...formData,
      [field]: value.toUpperCase()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to School Type
        </button>

        {/* Added Students List */}
        {students.length > 0 && (
          <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">Added Students ({students.length}/2)</h3>
            <div className="space-y-3">
              {students.map((student, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{student.studentName}</p>
                    <p className="text-sm text-gray-600">
                      {student.parentRelation} {student.parentName}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveStudent(index)}
                    className="ml-4 flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Student Information {students.length > 0 && `(${students.length + 1}/${2})`}
              </h2>
              <p className="text-gray-600 mt-1">
                {schoolType === 'open' ? 'Open School' : 'Regular School'} Certificate
              </p>
            </div>
          </div>

          {students.length < 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                  placeholder="Enter student's full name"
                />
              </div>

              {/* Parent Details */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Relation
                  </label>
                  <select
                    value={formData.parentRelation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        parentRelation: e.target.value as 'S/O' | 'D/O',
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                  >
                    <option value="S/O">S/O (Son of)</option>
                    <option value="D/O">D/O (Daughter of)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Father's / Mother's Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                    placeholder="Enter parent's name"
                  />
                </div>
              </div>

              {/* Address Section */}
              <div className="border-2 border-gray-100 rounded-xl p-6 bg-gray-50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address Details</h3>
                    <p className="text-sm text-gray-600">Enter the complete address</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* AT (Village/Town) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Home className="inline w-4 h-4 mr-2" />
                      AT (Village/Town) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.at}
                      onChange={(e) => handleInputChange('at', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter village/town name"
                    />
                  </div>

                  {/* PO (Post Office) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      PO (Post Office) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.po}
                      onChange={(e) => handleInputChange('po', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter post office name"
                    />
                  </div>

                  {/* P.S (Police Station) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Navigation className="inline w-4 h-4 mr-2" />
                      P.S (Police Station) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ps}
                      onChange={(e) => handleInputChange('ps', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter police station name"
                    />
                  </div>

                  {/* Block */}
                  /*<div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building className="inline w-4 h-4 mr-2" />
                      Block *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.block}
                      onChange={(e) => handleInputChange('block', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter block name"
                    />
                  </div>*/

                  {/* District */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Map className="inline w-4 h-4 mr-2" />
                      District *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.dist}
                      onChange={(e) => handleInputChange('dist', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter district name"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter state name"
                    />
                  </div>

                  {/* PIN Code */}
                  /*<div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pin}
                      onChange={(e) => handleInputChange('pin', e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                      placeholder="Enter 6-digit PIN code"
                      pattern="[0-9]{6}"
                      maxLength={6}
                    />
                  </div>*/
                </div>
              </div>

              {/* Academic Years */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Academic Year From *
                  </label>
                  <select
                    required
                    value={formData.yearFrom}
                    onChange={(e) => handleInputChange('yearFrom', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Academic Year To *
                  </label>
                  <select
                    required
                    value={formData.yearTo}
                    onChange={(e) => handleInputChange('yearTo', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-gray-900"
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Student
                </button>
              </div>
            </form>
          )}

          {/* Preview Button - Show when at least 1 student is added */}
          {students.length > 0 && (
            <div className="pt-6">
              <button
                onClick={onProceedToPreview}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Preview & Print Certificates
              </button>
            </div>
          )}

          {students.length === 2 && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-900 text-sm">
                ✓ You have added 2 students. Click "Preview & Print Certificates" to see both on one page.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
