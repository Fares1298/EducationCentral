import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - MDKSD Paramedical College</title>
        <meta name="description" content="Privacy Policy for Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya - Learn how we protect your personal information." />
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
              <span className="text-[#172f4f] font-medium">Privacy Policy</span>
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
                Privacy Policy
              </h1>
              <p className="text-lg text-[#a8c7dc]">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">Consent</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>Customer is agreeing to give consent to receive messages through SMS/Email/RCS/voice.</p>
                    <p>At www.desardacollege.com, accessible from https://desardacollege.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.desardacollege.com and how we use it.</p>
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in www.desardacollege.com. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">1. Information We Collect</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>We collect information you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Personal Information:</strong> Name, email address, phone number, postal address</li>
                      <li><strong>Educational Information:</strong> Academic qualifications, course preferences, previous education details</li>
                      <li><strong>Application Information:</strong> Documents submitted for admission, application forms</li>
                      <li><strong>Communication Records:</strong> Emails, phone calls, and other communications with our institution</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">2. How We Use Your Information</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Process your application for admission to our programs</li>
                      <li>Communicate with you about courses, admissions, and college activities</li>
                      <li>Provide student services and academic support</li>
                      <li>Maintain academic records and transcripts</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Improve our educational services and website functionality</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">3. Information Sharing and Disclosure</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>We may share your information in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Educational Partners:</strong> With affiliated hospitals, clinical training centers, and educational institutions for practical training purposes</li>
                      <li><strong>Regulatory Bodies:</strong> With government agencies, accreditation bodies, and professional councils as required by law</li>
                      <li><strong>Service Providers:</strong> With third-party vendors who assist in our operations, subject to confidentiality agreements</li>
                      <li><strong>Legal Requirements:</strong> When required by law, legal process, or to protect our rights and safety</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">4. Data Security</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Secure storage of physical and electronic records</li>
                      <li>Access controls limiting who can view your information</li>
                      <li>Regular security assessments and updates</li>
                      <li>Staff training on data protection procedures</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">5. Your Rights</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access and review your personal information we hold</li>
                      <li>Request corrections to inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information (subject to legal requirements)</li>
                      <li>Withdraw consent for non-essential communications</li>
                      <li>File a complaint with relevant data protection authorities</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">6. Cookies and Website Analytics</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>Our website may use cookies and similar technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Improve website functionality and user experience</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Remember your preferences and settings</li>
                    </ul>
                    <p>You can control cookie settings through your browser preferences.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">7. Data Retention</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>We retain your personal information for as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide educational services and maintain academic records</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Resolve disputes and enforce our agreements</li>
                    </ul>
                    <p>Academic records are typically maintained permanently as required by educational regulations.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">8. Children's Privacy</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>Our services are intended for individuals who are 18 years or older. If you are under 18, please ensure you have parental or guardian consent before providing any personal information.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">9. Changes to This Policy</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#172f4f] mb-4">10. Contact Information</h2>
                  <div className="text-[#2c5282] space-y-4">
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                    <div className="bg-[#f1faff] p-6 rounded-lg">
                      <p><strong>Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya</strong></p>
                      <p>Behind Bibika Maqbara, Hanuman Tekdi Jawal</p>
                      <p>Pahadsingpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431004</p>
                      <p>Phone: +91 94051 09103, +91 88308 38903</p>
                      <p>Email: info@desardacollege.com</p>
                    </div>
                  </div>
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