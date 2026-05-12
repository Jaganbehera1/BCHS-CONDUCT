import { useState } from 'react';
import { SchoolTypeSelector } from './components/SchoolTypeSelector';
import { StudentForm } from './components/StudentForm';
import { CertificatePreview } from './components/CertificatePreview';
import { CertificateData, SchoolType } from './types';

type Step = 'select-type' | 'fill-form' | 'preview';

function App() {
  const [step, setStep] = useState<Step>('select-type');
  const [schoolType, setSchoolType] = useState<SchoolType | null>(null);
  const [certificateDataList, setCertificateDataList] = useState<CertificateData[]>([]);

  const handleSchoolTypeSelect = (type: SchoolType) => {
    setSchoolType(type);
    setCertificateDataList([]);
    setStep('fill-form');
  };

  const handleFormSubmit = (data: CertificateData) => {
    setCertificateDataList([...certificateDataList, {
      ...data,
      issueDate: new Date(),
    }]);
  };

  const handleRemoveStudent = (index: number) => {
    setCertificateDataList(certificateDataList.filter((_, i) => i !== index));
  };

  const handleProceedToPreview = () => {
    if (certificateDataList.length > 0) {
      setStep('preview');
    }
  };

  const handleReset = () => {
    setStep('select-type');
    setSchoolType(null);
    setCertificateDataList([]);
  };

  const handleBack = () => {
    setStep('select-type');
    setSchoolType(null);
    setCertificateDataList([]);
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
          students={certificateDataList}
          onRemoveStudent={handleRemoveStudent}
          onProceedToPreview={handleProceedToPreview}
        />
      )}
      {step === 'preview' && certificateDataList.length > 0 && (
        <CertificatePreview data={certificateDataList} onReset={handleReset} />
      )}
    </>
  );
}

export default App;
