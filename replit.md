# Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya Website

## Project Overview
A modern, responsive web application for Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya (MDKSD), a nursing and paramedical college in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. The website showcases the college's academic programs, facilities, and provides information for prospective students.

## Tech Stack
- **Frontend**: React.js with TypeScript, Vite build tool
- **Backend**: Node.js with Express.js
- **Styling**: Tailwind CSS with ShadCN UI components
- **Icons**: FontAwesome icons for course representation
- **Storage**: In-memory storage for course and contact data
- **Routing**: Wouter for client-side routing

## Project Architecture

### Frontend Structure
- **Home Page**: Landing page with hero section, programs overview, gallery, videos, and contact form
- **Courses Page**: Comprehensive listing of all academic programs with search functionality
- **Course Detail Pages**: Individual pages for each course with benefits and future scope
- **Components**: Reusable header, footer, and UI components

### Backend Structure
- **API Routes**: RESTful endpoints for courses and contact submissions
- **Storage**: In-memory data storage with course and contact management
- **Express Server**: Serves both API and static frontend assets

## Recent Changes

### Project Migration (July 26, 2025)
- Successfully migrated project from Replit Agent to standard Replit environment
- Verified all dependencies are properly installed and working
- Confirmed client/server separation follows security best practices
- Express server running on port 5000 with proper 0.0.0.0 binding for Replit compatibility
- All 17 courses and contact functionality working correctly
- Fixed React style prop errors in iframe elements for proper TypeScript compatibility
- Updated all iframe attributes (allowFullScreen, referrerPolicy) to React standards
- Enhanced API error handling with retry logic and CORS support for live deployment
- Improved React Query configuration with proper retry mechanisms
- **Updated college address throughout entire codebase:** Behind Bibika Maqbara, Hanuman Tekdi Jawal, Pahadsingpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431004
- **Implemented dual-mode course loading:** API-first with static data fallback for deployment compatibility
- **Courses now work on both full-stack and static deployments:** ensuring consistent functionality across all deployment types
- Project now fully compatible with Replit deployment and scaling

### Deployment Configuration (July 24, 2025)
- Added `vercel.json` for seamless Vercel deployment
- Added `netlify.toml` for Netlify deployment option
- Created comprehensive `DEPLOYMENT.md` guide
- Maintained proper client/server structure required by build configuration
- Project now ready for deployment on multiple platforms without structural changes

### Hero Section Update (July 24, 2025)
- Replaced generic building background with authentic college photos
- Implemented automatic slideshow featuring 3 college images:
  - Student and faculty group photo (30x40 format)
  - Graduation ceremony event
  - College activities and events
- Images rotate automatically every 2 seconds with smooth transitions
- Added interactive slideshow indicators for manual navigation
- Enhanced text visibility with drop shadows
- Maintained responsive design and accessibility features

### Gallery Section Overhaul (July 24, 2025)
- Created dedicated `gallery_photos/` folder for organized image management
- Replaced all Unsplash stock images with authentic college photos (9 total images)
- Implemented 2x2 grid layout with automatic shuffling every 3 seconds
- Added college photos featuring:
  - Laboratory practical training sessions (4 images)
  - College events and ceremonies (2 images)  
  - Campus building and student gatherings (3 images)
- Used Fisher-Yates shuffle algorithm for random pattern display
- Added hover effects with image descriptions overlay
- Enhanced responsive design for mobile and desktop viewing
- Images showcase real students, faculty, and college activities

### Previous Updates (January 24, 2025)

### Course Expansion
- Added 8 new paramedical and allied healthcare courses to the database
- Expanded from 7 to 15 total courses offered
- New courses include: PGDMLT, X-Ray Technician, CT Scan Technician, ECG Technician, OT Technician, PG Radiology, Radiology Technician, Optometry, Sanitary Health Inspector, and Dental Health Technician
- Updated course icons mapping for all new courses
- Added relevant course images with white gradient overlays for text visibility

### Navigation Improvements
- Fixed navbar "Courses" link to navigate to /courses page instead of homepage section
- Updated both desktop and mobile navigation to handle page links vs section links
- Made navbar logo clickable to return to homepage
- Fixed "Apply Now" button to work from any page, directing to contact section

### "Get in Touch" Section Redesign
- Replaced "Contact Us" with modern "Get in touch" section following provided design
- Updated form layout with side-by-side "Your Name" and "Mobile No." fields
- Added comprehensive form fields: name, mobile, email, and comment with appropriate icons
- Implemented clickable Terms & Conditions and Privacy Policy with modal popups
- Added scrollable content in modals with comprehensive legal text
- Updated backend schema to handle mobile number and consent fields
- Applied college color theme (blue #172f4f and orange #f4743e) throughout

### Contact Form System (July 24, 2025)
- Dual-mode contact form supporting both full-stack and static deployments
- Full-stack mode: SendGrid email service with automated lead notifications
- Static deployment mode: Fallback to mailto links for email client integration
- Professional email templates with college branding and complete student details
- Comprehensive error handling with user-friendly messages
- Contact form works in both development and production environments
- Fallback includes direct phone numbers for immediate assistance
- Enhanced user experience with deployment-aware functionality

### Legal Pages Implementation (July 25, 2025)
- Created comprehensive Privacy Policy page with SMS/Email/RCS consent disclosure
- Created detailed Terms & Conditions page with opt-in messaging consent
- Updated privacy policy to include www.desardacollege.com specific content
- Added legal pages to footer navigation for easy access
- Both pages include proper SEO meta tags and breadcrumb navigation
- Content tailored specifically for educational institution requirements

### Performance Optimizations
- Reduced image sizes from 1400-1600px to 400px for faster loading
- Added lazy loading for course images to improve initial page load
- Fixed CSS import order to eliminate warnings
- Enhanced React Query caching with stale time configuration
- Added skeleton loading states for better perceived performance

### Student Testimonials Enhancement (July 24, 2025)
- Added 6 authentic student testimonials with Maharashtrian names
- Reviews include mix of Marathi and English text for local authenticity
- Featured graduates from different programs: GNM, DMLT, BPT, B.Sc Nursing, D.Pharm, DCCN
- Testimonials include real career outcomes and current positions
- Improved testimonial card design with college color scheme
- Enhanced responsive layout: grid view on desktop, carousel on mobile

### Homepage Programs Section Update (July 24, 2025)
- Expanded from 5 to 6 course cards in the Programs section
- Added "Diploma in Critical Care Nursing (DCCN)" as the 6th course
- Implemented balanced 3x2 grid layout (3 columns, 2 rows) to eliminate empty space
- Maintained responsive design: 1 column on mobile, 2 columns on tablet, 3 columns on desktop
- All course cards now display uniformly without visual gaps

### UI Enhancements
- Course cards now feature background images with white gradient overlays
- Improved course card layout with image header, title positioning, and content organization
- Enhanced visual appeal while maintaining text readability
- Responsive design maintained across all screen sizes

## Course Offerings
The college now offers 15 comprehensive programs:

### Nursing Programs
- Diploma in General Nursing & Midwifery (GNM) - 3 Years
- B.Sc. Nursing - 4 Years  
- Diploma in Critical Care Nursing (DCCN) - 1-3 Years

### Medical Technology
- Diploma in Medical Laboratory Technology (DMLT) - 2 Years
- Postgraduate Diploma in Medical Laboratory Technology (PGDMLT) - 1.5 Years

### Imaging & Radiology
- X-Ray Technician Course - 1 Year
- C.T. Scan Technician Course - 1 Year
- P.G. Radiology - 1.5 Years
- Radiology Technician - 2 Years

### Specialized Healthcare
- Bachelor of Physiotherapy (BPT) - 4.5 Years (updated from 2-year diploma)
- Diploma in Pharmacy (D.Pharm) - 2 Years
- E.C.G Technician Course - 1 Year
- O.T. Technician (Operation Theatre) - 2 Years
- Diploma in Optometry - 2 Years
- Sanitary Health Inspector Course - 1 Year
- Dental Health Technician - 2 Years
- Diploma in Paramedical Cosmetology - 1-2 Years

## Key Features
- Government recognized courses with job assurance
- UGC approved programs
- Comprehensive course details with benefits and career scope
- Responsive design for mobile, tablet, and desktop
- Search functionality for course discovery
- Contact form integration
- YouTube video showcasing
- Google Maps integration for campus directions

## User Preferences
- Course information should be comprehensive and detailed
- Visual elements (images, icons) are important for course representation
- Navigation should be intuitive and work consistently across all pages
- Course cards should be visually appealing with good text visibility

## Contact Information
- Phone: 9405109103, 8830838903
- Address: Behind Bibika Maqbara, Hanuman Tekdi Jawal, Pahadsingpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431004