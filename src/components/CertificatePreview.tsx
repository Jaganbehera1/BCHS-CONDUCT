import { useRef } from 'react';
import { Download, Home } from 'lucide-react';
import { CertificateTemplate } from './CertificateTemplate';
import { CertificateData } from '../types';

interface CertificatePreviewProps {
  data: CertificateData[];
  onReset: () => void;
}

export function CertificatePreview({ data, onReset }: CertificatePreviewProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-6 print:hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Certificate Preview ({data.length} {data.length === 1 ? 'Student' : 'Students'})
            </h1>
            <div className="flex gap-3">
              <button
                onClick={onReset}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
              >
                <Home className="w-5 h-5" />
                Create New
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <div ref={certificateRef}>
              {data.map((student, index) => (
                <div key={index}>
                  <CertificateTemplate data={student} />
                  {index < data.length - 1 && (
                    <div className="relative my-8 flex items-center justify-center">
                      <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-2 z-10">
                        ✂️ CUT HERE ✂️
                      </div>
                      <div
                        className="absolute inset-x-0"
                        style={{
                          height: '2px',
                          backgroundImage: 'repeating-linear-gradient(90deg, #999 0px, #999 5px, transparent 5px, transparent 10px)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Next Steps:
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              <li>Click "Download PDF" to print or save the certificate</li>
              <li>Print the certificate on quality paper (use A4 paper)</li>
              {data.length === 2 && <li>Cut along the dotted line in the middle to separate the two certificates</li>}
              <li>Get the seal and signature from the headmaster</li>
              <li>The certificate is now ready for official use</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="hidden print:block" style={{ margin: 0, padding: 0 }}>
        {data.map((student, index) => (
          <div key={index} style={{ pageBreakInside: 'avoid', margin: 0, padding: 0 }}>
            <CertificateTemplate data={student} />
            {index < data.length - 1 && (
              <div
                style={{
                  pageBreakInside: 'avoid',
                  height: '8mm',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  margin: 0,
                  padding: 0,
                  backgroundColor: '#ffffff',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 5px, transparent 5px, transparent 10px)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    backgroundColor: '#ffffff',
                    padding: '0px 8px',
                    zIndex: 10,
                    position: 'relative',
                  }}
                >
                  ✂️ CUT HERE ✂️
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media print {
          * {
            margin: 0;
            padding: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            height: auto;
          }
          body * {
            visibility: hidden;
          }
          .print\\:block,
          .print\\:block * {
            visibility: visible;
          }
          .print\\:block {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          @page {
            size: A4;
            margin: 0mm;
          }
        }
      `}</style>
    </>
  );
}
