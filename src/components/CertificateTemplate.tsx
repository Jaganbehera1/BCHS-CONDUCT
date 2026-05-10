import { CertificateData } from '../types';

interface CertificateTemplateProps {
  data: CertificateData;
}

export const CertificateTemplate = ({ data }: CertificateTemplateProps) => {
  const formatDate = (date?: Date) => {
    const d = date || new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div
      className="bg-white w-[210mm] mx-auto"
      style={{
        padding: '6mm 12mm',
        fontFamily: 'Times New Roman, serif',
        height: '140mm',
        pageBreakInside: 'avoid',
      }}
    >
      <div
        className="relative h-full flex flex-col"
        style={{
          border: '3px solid #000000ff',
          padding: '0px',
          height: '100%',
        }}
      >
        <div className="flex items-start justify-between p-4">

          <div
            className="flex flex-col items-center justify-center text-center flex-shrink-0"
            style={{
              width: '110px',
              height: '110px',
              border: '3px solid #000000ff',
              borderRadius: '50%',
              padding: '8px',
            }}
          >
            <div className="space-y-0.5">
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  letterSpacing: '0.4px',
                }}
              >
                P.M SHRI
              </div>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  letterSpacing: '0.4px',
                }}
              >
                B.C. HIGH
              </div>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  letterSpacing: '0.4px',
                }}
              >
                SCHOOL
              </div>
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#ffffffff',
                  margin: '1px 0',
                }}
              />
              <div style={{ fontSize: '8px', lineHeight: '1' }}>
                AT/PO- Ranpur
              </div>
              <div style={{ fontSize: '8px', lineHeight: '1' }}>
                Dist-Nayagarh
              </div>
              <div
                style={{
                  fontSize: '7px',
                  marginTop: '1px',
                  paddingTop: '2px',
                  borderTop: '1px solid #ffffffff',
                }}
              >
                <div>No.............</div>
                Date.........
              </div>
            </div>
          </div>

          <div className="flex-1 text-center px-4">
            {data.schoolType === 'open' && (
              <>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    marginBottom: '1px',
                    letterSpacing: '0.2px',
                  }}
                >
                  STATE INSTITUTE OF OPEN SCHOOLING,
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '2px',
                    letterSpacing: '0.2px',
                  }}
                >
                  P.M SHRI BRAJENDRA CHANDRA HIGH SCHOOL, RANPUR
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '2px',
                    letterSpacing: '0.2px',
                  }}
                >
                  (Study Centre)
                </div>
              </>
            )}
            {data.schoolType === 'regular' && (
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '2px',
                  marginTop: '12px',
                  letterSpacing: '0.2px',
                }}
              >
                P.M SHRI BRAJENDRA CHANDRA HIGH SCHOOL, RANPUR
              </div>
            )}
            <div
              style={{
                fontSize: '12px',
                marginBottom: '0px',
                letterSpacing: '0.1px',
              }}
            >
              AT/PO- RAJ-RANPUR, DIST: - NAYAGARH.
            </div>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '0.1px',
              }}
            >
              PIN- 752026 (ORISSA)
            </div>
          </div>
        </div>

        <div className="px-4 mb-2">
          <h1
            className="text-center font-bold"
            style={{
              fontSize: '24px',
              letterSpacing: '2px',
              borderBottom: '2px solid #000000ff',
              paddingBottom: '4px',
              margin: '0',
            }}
          >
            CONDUCT CERTIFICATE
          </h1>
        </div>

        <div
          className="px-6 mt-2 flex-1 overflow-hidden"
          style={{
            fontSize: '13px',
            lineHeight: '1.5',
            letterSpacing: '0.1px',
          }}
        >
          <p style={{ textIndent: '35px', textAlign: 'justify', marginBottom: '6px', margin: '0 0 6px 0' }}>
            <span style={{ fontStyle: 'italic' }}>Certified that</span>{' '}
            <span style={{ fontWeight: 'bold' }}>
              {data.studentName}
            </span>
            , <span style={{ fontStyle: 'italic' }}>{data.parentRelation}</span>{' '}
            <span style={{ fontWeight: 'bold' }}>
              {data.parentName}
            </span>
            , AT- <span style={{ fontWeight: 'bold' }}>{data.at}</span>, PO-{' '}
            <span style={{ fontWeight: 'bold' }}>{data.po}</span>, P.S-{' '}
            <span style={{ fontWeight: 'bold' }}>{data.ps}</span>, Block-{' '}
            <span style={{ fontWeight: 'bold' }}>{data.block}</span>, Dist-{' '}
            <span style={{ fontWeight: 'bold' }}>{data.dist}</span>, State-{' '}
            <span style={{ fontWeight: 'bold' }}>{data.state}</span>, PIN-{' '}
            <span style={{ fontWeight: 'bold' }}>{data.pin}</span>, is/was a student of
            this institution for the period from{' '}
            <span style={{ fontWeight: 'bold' }}>{data.yearFrom}</span> to{' '}
            <span style={{ fontWeight: 'bold' }}>{data.yearTo}</span>.
          </p>

          <p style={{ textAlign: 'justify', marginBottom: '8px', margin: '0 0 8px 0' }}>
            He/She bears good moral character to the best of my knowledge. I wish him/her all success in life.
          </p>
        </div>

        <div className="px-4 pb-3 flex justify-between items-end" style={{ marginTop: 'auto' }}>
          {/* Left Side: Date */}
          <div style={{ fontSize: '12px' }}>
            Date: {formatDate(data.issueDate)}
          </div>
                  
          {/* Right Side: Signature Block - CENTER ALIGNED */}
          <div className="text-center" style={{ marginBottom: '0px', minWidth: '180px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '1px' }}>
              Headmaster,
            </div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '1px' }}>
              P.M SHRI B.C. High School, Ranpur
            </div>
            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Nayagarh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};