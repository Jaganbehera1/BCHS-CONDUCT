import { forwardRef } from 'react';
import { CertificateData } from '../types';

interface CertificateTemplateProps {
  data: CertificateData;
}

export const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ data }, ref) => {
    const formatDate = (date?: Date) => {
      const d = date || new Date();
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

    return (
      <div
        ref={ref}
        className="bg-white w-[210mm] mx-auto"
        style={{
          padding: '12mm',
          fontFamily: 'Times New Roman, serif',
        }}
      >
        <div
          className="relative h-full flex flex-col"
          style={{
            border: '3px solid #000000ff',
          }}
        >
          <div className="flex items-start justify-between p-8">

            <div
              className="flex flex-col items-center justify-center text-center flex-shrink-0"
              style={{
                width: '140px',
                height: '140px',
                border: '3px solid #000000ff',
                borderRadius: '50%',
                padding: '12px',
              }}
            >
              <div className="space-y-1">
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    lineHeight: '1.1',
                    letterSpacing: '0.5px',
                  }}
                >
                  P.M SHRI
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    lineHeight: '1.1',
                    letterSpacing: '0.5px',
                  }}
                >
                  B.C. HIGH
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    lineHeight: '1.1',
                    letterSpacing: '0.5px',
                  }}
                >
                  SCHOOL
                </div>
                <div
                  style={{
                    height: '2px',
                    backgroundColor: '#ffffffff',
                    margin: '2px 0',
                  }}
                />
                <div style={{ fontSize: '10px', lineHeight: '1.2' }}>
                  AT/PO- Ranpur
                </div>
                <div style={{ fontSize: '10px', lineHeight: '1.2' }}>
                  Dist-Nayagarh
                </div>
                <div
                  style={{
                    fontSize: '9px',
                    marginTop: '2px',
                    paddingTop: '4px',
                    borderTop: '1px solid #ffffffff',
                  }}
                >
                  <div>No.................</div>
                  Date..............
                </div>
              </div>
            </div>

            <div className="flex-1 text-center px-6">
              {data.schoolType === 'open' && (
                <>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      marginBottom: '2px',
                      letterSpacing: '0.3px',
                    }}
                  >
                    STATE INSTITUTE OF OPEN SCHOOLING,
                  </div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '4px',
                      letterSpacing: '0.3px',
                    }}
                  >
                    P.M SHRI BRAJENDRA CHANDRA HIGH SCHOOL, RANPUR
                  </div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '6px',
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
                    fontSize: '22px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    marginTop: '18px',
                    letterSpacing: '0.3px',
                  }}
                >
                  P.M SHRI BRAJENDRA CHANDRA HIGH SCHOOL, RANPUR
                </div>
              )}
              <div
                style={{
                  fontSize: '14px',
                  marginBottom: '2px',
                  letterSpacing: '0.2px',
                }}
              >
                AT/PO- RAJ-RANPUR, DIST: - NAYAGARH.
              </div>
              <div
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.2px',
                }}
              >
                PIN- 752026 (ORISSA)
              </div>
            </div>
          </div>

          <div className="px-8 mb-6">
            <h1
              className="text-center font-bold"
              style={{
                fontSize: '32px',
                letterSpacing: '3px',
                borderBottom: '3px solid #000000ff',
                paddingBottom: '8px',
              }}
            >
              CONDUCT CERTIFICATE
            </h1>
          </div>

          <div
            className="px-12 mt-8"
            style={{
              fontSize: '16px',
              lineHeight: '1.9',
              letterSpacing: '0.3px',
            }}
          >
            <p style={{ textIndent: '45px', textAlign: 'justify', marginBottom: '12px' }}>
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

            <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
              He/She bears good moral character to the best of my knowledge. I wish him/her all success in life.
            </p>
          </div>

          <div className="px-12 pb-12 flex justify-between items-end" style={{ marginTop: '0px' }}>
                    
            {/* Left Side: Date */}
            <div style={{ fontSize: '14px' }}>
              Date: {formatDate(data.issueDate)}
            </div>
                    
            {/* Right Side: Signature Block - CENTER ALIGNED */}
            <div className="text-center" style={{ marginBottom: '0px', minWidth: '220px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontStyle: 'italic',
                  marginBottom: '10px',
                }}
              >
                {/* Optional Seal Space */}
              </div>
              
              {/* <div
                style={{
                  borderTop: '2px solid #000000',
                  width: '220px',
                  margin: '0 auto 4px auto',
                }}
              /> */}
          
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>
                Headmaster,
              </div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>
                P.M SHRI B.C. High School, Ranpur
              </div>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
                Nayagarh
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = 'CertificateTemplate';