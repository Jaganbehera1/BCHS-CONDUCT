import { useState } from 'react';
import { SchoolTypeSelector } from './components/SchoolTypeSelector';
import { StudentForm } from './components/StudentForm';
import { CertificatePreview } from './components/CertificatePreview';
import { CertificateData, SchoolType } from './types';

type Step = 'select-type' | 'fill-form' | 'preview';

function App() {
  const [step, setStep] = useState<Step>('select-type');
  const [schoolType, setSchoolType] = useState<SchoolType | null>(null);
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);

  const handleSchoolTypeSelect = (type: SchoolType) => {
    setSchoolType(type);
    setStep('fill-form');
  };

  const handleFormSubmit = (data: CertificateData) => {
    setCertificateData({
      ...data,
      issueDate: new Date(),
    });
    setStep('preview');
  };

  const handleReset = () => {
    setStep('select-type');
    setSchoolType(null);
    setCertificateData(null);
  };

  const handleBack = () => {
    setStep('select-type');
    setSchoolType(null);
  };

  return (
    <>
      {step === 'select-type' && (
        <SchoolTypeSelector onSelect={handleSchoolTypeSelect} />
      )}
      {step === 'fill-form' && schoolType && (
        <StudentForm
          schoolType={schoolType}
          onBack={handleBack}
          onSubmit={handleFormSubmit}
        />
      )}
      {step === 'preview' && certificateData && (
        <CertificatePreview data={certificateData} onReset={handleReset} />
      )}
    </>
  );
}

export default App;
