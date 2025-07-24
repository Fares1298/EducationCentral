// Static course data as fallback for deployments without backend API
import { CourseType } from "@shared/schema";

export const staticCoursesData: CourseType[] = [
  {
    id: 1,
    slug: "dpharm",
    title: "Diploma in Pharmacy (D. Pharm)",
    duration: "2 years",
    overview: "A two-year, UGC-approved program that trains you in pharmaceutical sciences, drug formulation, dispensing practices, and patient counseling.",
    benefits: [
      "Foundational grounding in pharmacology and pharmaceutics—ideal for roles in retail and hospital pharmacies.", 
      "Eligibility to register as a \"Pharmacist\" under the Pharmacy Act, 1948."
    ],
    futureScope: [
      "Work as a hospital pharmacist, community pharmacist, or in clinical research organizations (CROs).",
      "Higher studies: B.Pharm, M.Pharm, MBA in Pharmaceutical Management, or specialization in clinical research."
    ],
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    slug: "bsc-nursing",
    title: "Basic Bachelor of Science in Nursing (BSc Nursing)",
    duration: "4 years",
    overview: "A four-year degree that combines rigorous theoretical instruction with hands-on clinical training across departments such as medical-surgical, pediatric, psychiatric, and community health nursing.",
    benefits: [
      "Eligibility to become a Registered Nurse (RN) in India and abroad.",
      "Exposure to diverse specialties—critical care, emergency, maternity, and community health."
    ],
    futureScope: [
      "Pursue MSc Nursing (Medical-Surgical, Pediatric, Public Health) or specialized diplomas (Critical Care, Oncology, Mental Health).",
      "Career roles include Nurse Educator, Nurse Administrator, Clinical Instructor, and opportunities in research and policy."
    ],
    imageUrl: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    slug: "gnm",
    title: "Diploma in General Nursing & Midwifery (GNM)",
    duration: "3 years",
    overview: "A three-year full-time diploma that covers fundamentals of nursing, midwifery, anatomy, physiology, and community health, with extensive clinical rotations.",
    benefits: [
      "Quick entry into the workforce as a Staff Nurse or Midwife.",
      "Strong hands-on exposure to obstetrics, pediatric, and geriatric nursing."
    ],
    futureScope: [
      "Upgradable to BSc Nursing via lateral entry.",
      "Roles in government hospitals, private clinics, NGOs, forensics, and defence services."
    ],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    slug: "dccn",
    title: "Diploma in Critical Care Nursing (DCCN)",
    duration: "1-3 years",
    overview: "A one-year diploma (up to 3-year duration) designed to equip nurses with skills for managing critically ill patients in ICU and emergency settings.",
    benefits: [
      "Advanced training in ventilator management, hemodynamic monitoring, and life-support protocols.",
      "Hands-on clinical postings in reputed hospital ICUs."
    ],
    futureScope: [
      "High demand for Critical Care Nurses in tertiary hospitals and specialized centres.",
      "Pathway to postgraduate studies: MSc in Critical Care Nursing or PG Diploma in Emergency Nursing."
    ],
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    slug: "dmlt",
    title: "Diploma in Medical Laboratory Technology (DMLT)",
    duration: "2 years",
    overview: "A two-year course teaching laboratory techniques in hematology, microbiology, clinical biochemistry, and immunology, with practical sessions on automated analyzers.",
    benefits: [
      "Proficiency in sample collection, slide preparation, and operating diagnostic equipment.",
      "Immediate employability in diagnostic labs, hospitals, and blood banks."
    ],
    futureScope: [
      "Roles as Lab Technician, Lab Supervisor, Quality Control Analyst.",
      "Further studies: BSc MLT, MSc in Medical Laboratory Technology, or specialized certifications."
    ],
    imageUrl: "https://images.unsplash.com/photo-1581093196277-9f6e9b82d000?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    slug: "physiotherapy",
    title: "Bachelor of Physiotherapy (BPT)",
    duration: "4.5 years",
    overview: "A comprehensive 4.5-year program covering musculoskeletal, neurological, and cardiopulmonary rehabilitation techniques, plus modalities like electrotherapy and manual therapy.",
    benefits: [
      "Hands-on training in therapeutic exercises, mobilization, and patient assessment.",
      "Exposure to sports physiotherapy, geriatric care, and pediatric rehabilitation."
    ],
    futureScope: [
      "Employment in hospitals, sports academies, rehabilitation centres, and private practice.",
      "Pathway to MPT, and specializations in cardio-respiratory or neuro-physiotherapy."
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    slug: "paramedical-cosmetology",
    title: "Diploma in Paramedical Cosmetology",
    duration: "1-2 years",
    overview: "A comprehensive diploma blending dermatology fundamentals with aesthetic procedures—skin analysis, facial therapies, hair and nail treatments.",
    benefits: [
      "Practical mastery of non-invasive cosmetic technologies and patient counseling.",
      "Certification to work in beauty clinics, dermatology labs, and wellness centres."
    ],
    futureScope: [
      "Career options as Cosmetology Technician, Skin Care Specialist, or Salon Manager.",
      "Further credentials: Advanced Diploma in Laser Therapy, PG Diploma in Medical Aesthetics."
    ],
    imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    slug: "pgdmlt",
    title: "Postgraduate Diploma in Medical Laboratory Technology (PGDMLT)",
    duration: "1.5 years",
    overview: "An advanced postgraduate program for B.Sc graduates focusing on specialized laboratory techniques and management skills in medical diagnostics.",
    benefits: [
      "Advanced training in specialized laboratory equipment and techniques",
      "Management skills for laboratory supervision and quality control",
      "Research methodology in medical laboratory sciences",
      "Eligibility for senior laboratory positions"
    ],
    futureScope: [
      "Senior Medical Laboratory Technologist in hospitals and diagnostic centers",
      "Laboratory Manager and Quality Control Supervisor roles",
      "Research positions in medical institutions and pharmaceutical companies",
      "Teaching positions in medical laboratory technology programs"
    ],
    imageUrl: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    slug: "xray-technician",
    title: "X-Ray Technician Course",
    duration: "1 year",
    overview: "A one-year specialized program training students in X-ray imaging techniques, radiation safety, and diagnostic imaging procedures.",
    benefits: [
      "Hands-on training with modern X-ray equipment and digital imaging systems",
      "Knowledge of radiation safety protocols and patient positioning techniques",
      "Immediate employment opportunities in hospitals and diagnostic centers",
      "Essential skills for medical imaging and diagnostic procedures"
    ],
    futureScope: [
      "Employment as X-Ray Technician in hospitals, clinics, and diagnostic centers",
      "Career advancement to Senior Radiographic Technologist positions",
      "Specialization in advanced imaging techniques like CT scan and MRI",
      "Opportunities in mobile imaging services and emergency medical facilities"
    ],
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    slug: "ct-scan-technician",
    title: "C.T. Scan Technician Course",
    duration: "1 year",
    overview: "A specialized one-year program focusing on Computed Tomography (CT) scan technology, advanced imaging techniques, and patient care protocols.",
    benefits: [
      "Advanced training in CT scan equipment operation and maintenance",
      "Understanding of cross-sectional anatomy and image reconstruction",
      "High-demand skill set with excellent career prospects",
      "Training in contrast media administration and emergency protocols"
    ],
    futureScope: [
      "CT Scan Technician positions in hospitals and imaging centers",
      "Career growth to Lead CT Technologist and Department Supervisor",
      "Specialization in cardiac CT, neurological imaging, and interventional procedures",
      "Opportunities in research facilities and medical equipment companies"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 11,
    slug: "ecg-technician",
    title: "E.C.G Technician Course",
    duration: "1 year",
    overview: "A comprehensive one-year program training students in electrocardiography techniques, cardiac rhythm analysis, and cardiovascular diagnostic procedures.",
    benefits: [
      "Specialized training in 12-lead ECG, Holter monitoring, and stress testing",
      "Understanding of cardiac arrhythmias and abnormal heart patterns",
      "Essential skills for cardiac care units and emergency departments",
      "Training in patient interaction and emergency cardiac protocols"
    ],
    futureScope: [
      "ECG Technician positions in cardiac care units and emergency departments",
      "Career advancement to Cardiac Monitoring Specialist",
      "Specialization in advanced cardiac diagnostic procedures",
      "Employment opportunities in cardiac rehabilitation centers and clinics"
    ],
    imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 12,
    slug: "ot-technician",
    title: "O.T. Technician (Operation Theatre)",
    duration: "2 years",
    overview: "A two-year comprehensive program training students in operation theatre management, surgical instrumentation, and perioperative patient care.",
    benefits: [
      "Training in sterile techniques, surgical instrumentation, and theatre protocols",
      "Hands-on experience with modern surgical equipment and technology",
      "Essential skills for assisting in various surgical procedures",
      "Understanding of infection control and patient safety measures"
    ],
    futureScope: [
      "Operation Theatre Technician positions in hospitals and surgical centers",
      "Career growth to OT Supervisor and Theatre Manager positions",
      "Specialization in specific surgical disciplines like cardiac, neuro, or orthopedic surgery",
      "Opportunities in ambulatory surgery centers and specialty clinics"
    ],
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 13,
    slug: "pg-radiology",
    title: "P.G. Radiology",
    duration: "1.5 years",
    overview: "An advanced 1.5-year postgraduate program for graduates seeking specialization in diagnostic imaging, interventional radiology, and advanced imaging technologies.",
    benefits: [
      "Advanced training in MRI, CT, ultrasound, and interventional procedures",
      "Research opportunities in medical imaging and diagnostic techniques",
      "Higher salary prospects and senior position eligibility",
      "Exposure to cutting-edge imaging technology and artificial intelligence applications"
    ],
    futureScope: [
      "Senior Radiologic Technologist and Imaging Department Supervisor roles",
      "Specialization in interventional radiology and advanced imaging modalities",
      "Teaching positions in radiology technology programs",
      "Research and development roles in medical imaging companies"
    ],
    imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 14,
    slug: "radiology-technician",
    title: "Radiology Technician",
    duration: "2 years",
    overview: "A comprehensive two-year program covering all aspects of diagnostic imaging including X-ray, ultrasound, mammography, and basic CT procedures.",
    benefits: [
      "Comprehensive training in multiple imaging modalities",
      "Understanding of radiation physics and safety protocols",
      "Patient positioning and communication skills",
      "Quality assurance and equipment maintenance knowledge"
    ],
    futureScope: [
      "Radiology Technician positions in hospitals, clinics, and imaging centers",
      "Career advancement to Chief Technologist and Department Supervisor",
      "Specialization in mammography, fluoroscopy, or nuclear medicine",
      "Opportunities in mobile imaging services and outpatient facilities"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 15,
    slug: "optometry",
    title: "Diploma in Optometry",
    duration: "2 years",
    overview: "A two-year program training students in eye care, vision testing, optical dispensing, and management of common eye conditions.",
    benefits: [
      "Training in comprehensive eye examinations and vision testing",
      "Knowledge of optical principles and lens fitting techniques",
      "Understanding of common eye diseases and referral protocols",
      "Business skills for optical retail and practice management"
    ],
    futureScope: [
      "Optometrist positions in eye care clinics and optical retail stores",
      "Private practice opportunities in vision care and optical services",
      "Specialization in contact lens fitting and low vision rehabilitation",
      "Career advancement to clinical supervisor and practice manager roles"
    ],
    imageUrl: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 16,
    slug: "sanitary-health-inspector",
    title: "Sanitary Health Inspector Course",
    duration: "1 year",
    overview: "A one-year program training students in public health inspection, environmental health assessment, and community health promotion.",
    benefits: [
      "Training in public health principles and environmental health assessment",
      "Knowledge of water quality testing, food safety, and sanitation standards",
      "Understanding of disease prevention and health promotion strategies",
      "Government job opportunities with job security and benefits"
    ],
    futureScope: [
      "Health Inspector positions in municipal corporations and health departments",
      "Career advancement to Senior Health Inspector and Public Health Officer",
      "Specialization in environmental health and occupational safety",
      "Opportunities in NGOs and international health organizations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 17,
    slug: "dental-health-technician",
    title: "Dental Health Technician",
    duration: "2 years",
    overview: "A two-year program training students in dental care assistance, oral health promotion, and basic dental procedures under professional supervision.",
    benefits: [
      "Training in dental assistance and oral health care procedures",
      "Understanding of dental materials and equipment operation",
      "Patient education and oral health promotion skills",
      "Immediate employment opportunities in dental clinics and hospitals"
    ],
    futureScope: [
      "Dental Health Technician positions in dental clinics and hospitals",
      "Career advancement to Senior Dental Assistant and Clinic Supervisor",
      "Specialization in orthodontics, oral surgery, or pediatric dentistry",
      "Opportunities in dental public health programs and community health centers"
    ],
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=400&auto=format&fit=crop",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];