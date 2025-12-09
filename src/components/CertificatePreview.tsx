import { useRef } from 'react';
import { Download, Home } from 'lucide-react';
import { CertificateTemplate } from './CertificateTemplate';
import { CertificateData } from '../types';

interface CertificatePreviewProps {
  data: CertificateData;
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
              Certificate Preview
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
            <CertificateTemplate ref={certificateRef} data={data} />
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Next Steps:
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              <li>Click "Download PDF" to print or save the certificate</li>
              <li>Print the certificate on quality paper</li>
              <li>Get the seal and signature from the headmaster</li>
              <li>The certificate is now ready for official use</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="hidden print:block">
        <CertificateTemplate ref={certificateRef} data={data} />
      </div>

      <style>{`
        @media print {
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
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
