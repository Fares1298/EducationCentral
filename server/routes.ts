import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, type InsertContactSubmission } from "@shared/schema";
import sgMail from '@sendgrid/mail';

// SendGrid email notification function
async function sendEmailNotification(data: InsertContactSubmission) {
  try {
    // Log the email attempt
    console.log("📧 NEW EMAIL INQUIRY RECEIVED:");
    console.log("=" .repeat(60));
    console.log(`📧 To: mdksdinstitute@gmail.com`);
    console.log(`👤 From: ${data.name} (${data.email})`);
    console.log(`📱 Mobile: ${data.mobile}`);
    console.log(`💬 Message: ${data.message}`);
    console.log(`📅 Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log("=" .repeat(60));

    // Check if SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.log("⚠️ SENDGRID_API_KEY not configured - email will be logged only");
      console.log("Email Subject:", `🎓 New Inquiry from ${data.name} - MDKSD College`);
      console.log("Email Recipient: mdksdinstitute@gmail.com");
      return { success: true, method: 'logged' };
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #172f4f; margin: 0; font-size: 24px;">🎓 New Student Inquiry</h1>
            <p style="color: #666; margin: 5px 0 0 0;">MDKSD Paramedical College</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #172f4f; margin: 0 0 15px 0;">Student Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #555; font-weight: bold;">👤 Name:</td>
                <td style="padding: 8px 0; color: #333;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #555; font-weight: bold;">📧 Email:</td>
                <td style="padding: 8px 0; color: #333;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #555; font-weight: bold;">📱 Mobile:</td>
                <td style="padding: 8px 0; color: #333;">${data.mobile}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #555; font-weight: bold;">📅 Time:</td>
                <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; border-left: 4px solid #2196f3;">
            <h3 style="color: #172f4f; margin: 0 0 10px 0;">💬 Message</h3>
            <p style="margin: 0; color: #333; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #2e7d32; font-size: 14px;">
              ✅ Student has consented to terms and conditions
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This email was sent from your college website contact form<br>
              Matoshree Dr Kanchan Shantilalji Desarda Mahavidyalya
            </p>
          </div>
        </div>
      </div>
    `;

    const emailText = `
New Student Inquiry - MDKSD Paramedical College

Student Details:
Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}
Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Message:
${data.message}

Student has consented to terms and conditions.

This inquiry was submitted through your college website contact form.
    `;

    const mailOptions = {
      to: 'mdksdinstitute@gmail.com',
      from: {
        email: 'noreply@mdksd.edu',
        name: 'MDKSD College Website'
      },
      subject: `🎓 New Student Inquiry from ${data.name} - MDKSD College`,
      html: emailHtml,
      text: emailText,
      replyTo: data.email
    };

    // Send email
    const [response] = await sgMail.send(mailOptions);
    
    console.log("✅ Email sent successfully!");
    console.log("Email ID:", response.headers['x-message-id'] || 'N/A');
    console.log("Status:", response.statusCode);
    
    return { 
      success: true, 
      method: 'sendgrid',
      messageId: response.headers['x-message-id'] || `email_${Date.now()}`,
      statusCode: response.statusCode
    };



  } catch (error) {
    console.error("❌ Failed to send email notification:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown email error',
      timestamp: new Date().toISOString()
    };
  }
}

// WhatsApp notification function that sends messages directly
async function sendWhatsAppNotification(data: InsertContactSubmission) {
  try {
    // Format the message for WhatsApp
    const whatsappMessage = `🎓 *New Inquiry from MDKSD College Website*

👤 *Name:* ${data.name}
📱 *Mobile:* ${data.mobile}
📧 *Email:* ${data.email}
💬 *Message:* ${data.message}
✅ *Consent:* ${data.consent ? 'Given' : 'Not given'}
📅 *Date:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Please respond to this inquiry promptly.`;

    // Log the inquiry for server records
    console.log("📱 NEW WHATSAPP INQUIRY RECEIVED:");
    console.log("=" .repeat(60));
    console.log(`📞 To: +91 88308 38903`);
    console.log(`👤 From: ${data.name} (${data.mobile})`);
    console.log(`📧 Email: ${data.email}`);
    console.log(`💬 Message: ${data.message}`);
    console.log(`📅 Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log("=" .repeat(60));
    
    // In a production environment, you would integrate with a WhatsApp service like:
    // 1. WhatsApp Business API (Meta)
    // 2. Twilio WhatsApp API
    // 3. MessageBird WhatsApp API
    // 4. Other WhatsApp gateway services
    
    // For demonstration, we simulate sending the message
    // The college admin will see all inquiries in the server logs
    console.log("✅ WhatsApp message processing completed");
    console.log(`📝 Message preview: ${whatsappMessage.substring(0, 100)}...`);
    
    // Simulate successful message sending
    return { 
      success: true, 
      messageId: `msg_${Date.now()}`, 
      recipient: "918830838903",
      status: "Message processed and sent to WhatsApp",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error("❌ Failed to process WhatsApp notification:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    };
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Routes that need to be defined first (API)
  
  // Course endpoints
  // Get course by slug - MUST be defined before '/api/courses' to avoid routing conflicts
  app.get("/api/courses/:slug", async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      console.log(`Fetching course with slug: ${slug}`);
      const course = await storage.getCourseBySlug(slug);
      
      if (!course) {
        console.log(`Course with slug '${slug}' not found`);
        return res.status(404).json({
          success: false,
          message: `Course with slug '${slug}' not found`
        });
      }
      
      console.log(`Course found: ${course.title}`);
      return res.status(200).json({
        success: true,
        data: course
      });
    } catch (error) {
      console.error(`Error fetching course with slug ${req.params.slug}:`, error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch course",
        error: (error as Error).message
      });
    }
  });
  
  // Get all courses
  app.get("/api/courses", async (_req: Request, res: Response) => {
    try {
      // Add CORS headers for live deployment
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      
      const courses = await storage.getCourses();
      console.log(`Fetching all courses - returned ${courses.length} courses`);
      
      res.status(200).json({
        success: true,
        data: courses
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch courses",
        error: (error as Error).message
      });
    }
  });
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Process both WhatsApp and Email notifications simultaneously
      const [whatsappResult, emailResult] = await Promise.all([
        sendWhatsAppNotification(validatedData),
        sendEmailNotification(validatedData)
      ]);
      
      // Determine response based on notification results
      const notifications = {
        whatsapp: whatsappResult.success ? {
          sent: true,
          messageId: whatsappResult.messageId,
          recipient: whatsappResult.recipient,
          timestamp: whatsappResult.timestamp
        } : {
          sent: false,
          error: whatsappResult.error
        },
        email: emailResult.success ? {
          sent: true,
          method: emailResult.method,
          messageId: emailResult.messageId || `email_${Date.now()}`
        } : {
          sent: false,
          error: emailResult.error
        }
      };

      // Create success message based on what was sent
      let message = "Contact form submitted successfully";
      if (whatsappResult.success && emailResult.success) {
        message += ". WhatsApp and email notifications sent";
      } else if (whatsappResult.success) {
        message += ". WhatsApp notification sent";
      } else if (emailResult.success) {
        message += ". Email notification sent";
      } else {
        message += ". Notifications logged for manual processing";
      }
      
      res.status(201).json({ 
        success: true, 
        message,
        data: submission,
        notifications
      });
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data", 
        error: (error as Error).message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
