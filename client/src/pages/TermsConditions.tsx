import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - MDKSD Paramedical College</title>
        <meta name="description" content="Terms and Conditions for Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya - Student policies and institutional guidelines." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-12">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-[#2c5282]">
              <Link href="/" className="hover:text-[#172f4f]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#172f4f] font-medium">Terms & Conditions</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="bg-[#172f4f] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link href="/" className="inline-flex items-center text-[#a8c7dc] hover:text-white mb-6">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back to Home
              </Link>
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                Terms & Conditions
              </h1>
              <p className="text-lg text-[#a8c7dc]">
                Please read these terms carefully before using our services or applying for admission to our programs.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-8">
                <p className="text-[#2c5282] mb-6">
                  <strong>Last Updated:</strong> January 25, 2025
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">Opt-In</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>Customer is agreeing to give consent to receive messages through SMS/Email/RCS/voice.</p>
                    <p>Welcome to Desarda College! These Terms and Conditions ("Terms") govern your access to and use of our website, software, and services (collectively referred to as "Services"). By using our Services, you agree to comply with these Terms. Please read them carefully.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">1. Acceptance of Terms</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>By accessing our website, applying for admission, or enrolling in any program at Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya (MDKSD), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">2. Admission Requirements</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>Admission to our programs is subject to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Meeting minimum educational qualifications as specified for each course</li>
                      <li>Successful completion of entrance examinations where applicable</li>
                      <li>Submission of all required documents and certificates</li>
                      <li>Payment of applicable fees within stipulated deadlines</li>
                      <li>Medical fitness requirements for healthcare programs</li>
                      <li>Compliance with government and regulatory body guidelines</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">3. Academic Policies</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <h3 className="font-semibold text-lg text-[#172f4f]">3.1 Attendance Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Minimum 75% attendance is mandatory for all theory and practical classes</li>
                      <li>Students with insufficient attendance may be debarred from examinations</li>
                      <li>Medical leave requires proper documentation and approval</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg text-[#172f4f] mt-6">3.2 Examination and Assessment</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Regular internal assessments and semester examinations are conducted</li>
                      <li>Minimum passing marks as per university/board regulations must be achieved</li>
                      <li>Reexamination opportunities are available as per institutional policy</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">4. Fee Structure and Payment Terms</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Tuition fees and other charges are as published in the fee structure</li>
                      <li>Fees must be paid by the specified due dates each semester</li>
                      <li>Late payment may result in penalty charges and academic restrictions</li>
                      <li>Refund policies apply as per institutional and regulatory guidelines</li>
                      <li>Fee structure may be revised annually with prior notice</li>
                      <li>Students are responsible for additional costs related to clinical rotations, equipment, and external examinations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">5. Student Conduct and Discipline</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>Students are expected to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Maintain professional behavior in all academic and clinical settings</li>
                      <li>Respect faculty, staff, and fellow students</li>
                      <li>Follow dress code and hygiene standards, especially in clinical areas</li>
                      <li>Maintain confidentiality in patient care settings</li>
                      <li>Refrain from any form of harassment, discrimination, or misconduct</li>
                      <li>Comply with all institutional rules and regulations</li>
                    </ul>
                    <p className="mt-4">Violation of conduct rules may result in disciplinary action, including suspension or expulsion.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">6. Clinical Training and Practical Work</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Clinical rotations are an integral part of healthcare programs</li>
                      <li>Students must complete all required clinical hours and competencies</li>
                      <li>Health clearances and vaccinations may be required for clinical placements</li>
                      <li>Students must follow all hospital and clinical facility policies</li>
                      <li>Professional liability and insurance coverage as required</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">7. Intellectual Property and Academic Integrity</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All course materials, lectures, and content are intellectual property of the institution</li>
                      <li>Unauthorized recording, sharing, or distribution of course content is prohibited</li>
                      <li>Academic dishonesty, including plagiarism and cheating, will result in serious consequences</li>
                      <li>Students must properly cite and reference all sources in academic work</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">8. Technology and Website Use</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Website content is for informational purposes and subject to change</li>
                      <li>Users must not misuse the website or attempt unauthorized access</li>
                      <li>We are not liable for technical interruptions or data loss</li>
                      <li>External links are provided for convenience; we do not control their content</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">9. Limitation of Liability</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>While we strive to provide quality education and services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>We are not liable for any indirect, incidental, or consequential damages</li>
                      <li>Our liability is limited to the extent permitted by applicable law</li>
                      <li>Students are responsible for their own safety during clinical and practical training</li>
                      <li>External factors affecting employment or licensure outcomes are beyond our control</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">10. Changes to Academic Programs</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>The institution reserves the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modify curriculum, course content, and program requirements</li>
                      <li>Change faculty assignments and teaching schedules</li>
                      <li>Alter clinical rotation sites and training arrangements</li>
                      <li>Update policies and procedures with appropriate notice</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">11. Governing Law and Disputes</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>These terms are governed by the laws of Maharashtra, India. Any disputes will be subject to the jurisdiction of courts in Aurangabad, Maharashtra.</p>
                    <p>We encourage resolving any concerns through direct communication with our administrative staff before pursuing formal legal action.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">12. Contact Information</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>For questions about these Terms and Conditions or any academic matters, please contact:</p>
                    <div className="bg-[#f1faff] p-6 rounded-lg">
                      <p><strong>Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya</strong></p>
                      <p>Behind Bibika Maqbara, Hanuman Tekdi Jawal</p>
                      <p>Pahadsingpura, Sambhajinagar (Aurangabad), Maharashtra</p>
                      <p>Phone: +91 94051 09103, +91 88308 38903</p>
                      <p>Email: info@desardacollege.com</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm text-[#2c5282] italic">
                    By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}