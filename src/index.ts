import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

interface EmailRequest {
  userName?:string,
  phone?:string,
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change the service to your email provider (e.g., Yahoo, Outlook)
  auth: {
    user: process.env.EMAIL_USER,  // Your email address (e.g., Gmail)
    pass: process.env.EMAIL_PASSWORD, // Your email password or App-specific password (Gmail)
  },
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World!');
  })
app.post('/send-email', (req: Request<{}, {}, EmailRequest>, res: Response) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: `Skill GPT <${process.env.EMAIL_USER}>`,  // The sender's address
    to: email,                                     // Recipient email
    subject: subject,                              // Email subject
    text: message,                                 // Plain text body
    html: `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 600px;
            background-color: #ffffff;
            margin: 20px auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            display:flex;
            align-items:center;
            background-color: #1e1e1e;
            padding: 10px;
            text-align: center;
            color: white;
        }

        .header h1 {
            margin: 0;
            font-size: 28px;
        }

        .header img {
            max-width: 50px;
            margin-bottom: 10px;
        }

        .order-summary {
            padding: 20px;
            text-align: center;
        }

        .order-summary h2 {
            color: #1e1e1e;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .summary-section {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            font-size: 16px;
            border-top: 1px solid #eee;
        }

        .summary-section strong {
            color: #eabe12;
        }

        .summary-section span {
            color: #333;
        }

        .items-section {
            padding: 20px;
        }

        .item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
        }

        .item img {
            max-width: 60px;
            margin-right: 10px;
        }

        .item-info {
            flex: 1;
            font-size: 14px;
        }

        .item-price {
            font-size: 16px;
            color: #333;
        }

        .button {
            background-color: #eabe12;
            color: white;
            padding: 12px;
            text-align: center;
            border-radius: 5px;
            font-size: 16px;
            display: inline-block;
            margin: 20px 0;
            text-decoration: none;
        }

        .contact {
            padding: 20px;
            text-align: center;
            background-color: #f9f9f9;
            border-top: 1px solid #eee;
        }

        .contact div {
            margin-bottom: 10px;
        }

        .contact div a {
            color: #333;
            text-decoration: none;
        }

        .footer {
            padding: 20px;
            background-color: #1e1e1e;
            text-align: center;
            color: white;
        }
    

        .footer a {
            color: white;
            text-decoration: none;
            margin: 0 10px;
        }

        .footer a.unsubscribe {
            color: #eabe12;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="header">
            <img src="https://ucarecdn.com/7790a312-1fcf-43ce-a65c-35bdb96bde1f/-/preview/600x600/" alt="Skill GPT Logo">
            <h1>Skill GPT</h1>
        </div>

        <div class="order-summary">
        <p class="font-bold text-xl">${message}</p>
        <h4>Thank You for Choosing Skill GPT</h4>
        </div>

       

        
        <div class="contact">
            <div>Any problems?</div>
            <div>
                <a href="mailto:users.helpandcare@gmail.com">Email Us: users.helpandcare@gmail.com</a>  
                
            </div>
        </div>

        <div class="footer">
            <div>
               
                
            </div>
            <div>Skill GPT , Noida (Uttar Pradesh)</div>
        </div>
    </div>

</body>

</html>
    `,                                            // HTML content for email
  };

  


  transporter.sendMail(mailOptions, (error:any, info:any) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({success:false, message: 'Failed to send email', error });
    } else {
      console.log('Email sent:', info.response);
      return res.json({success:true, message: 'Email sent successfully!', info });
    }
  });
});


app.post('/support-mail', (req: Request<{}, {}, EmailRequest>, res: Response) => {
    let {userName, email, subject,phone, message } = req.body;
    console.log(req.body);
    let emailId=email;
  
    const mailOptions = {
      from: `${userName} <${emailId}>`,  // The sender's address
      to: `${process.env.EMAIL_USER}`,                                     // Recipient email
      subject: subject,                              // Email subject
      text: message,                                 // Plain text body
      html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            background-color: #f3f8ff;
            padding: 20px;
            text-align: left;
            position: relative;
        }

        .email-header img {
            max-height: 24px;
            vertical-align: middle;
        }
        .font-bold{
          font-weight:700;
        }

        .badge {
            position: absolute;
            top: 20px;
            right: 20px;
            font-weight: 700;
            color: #ff;
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 12px;
        }

        .email-body {
            padding: 30px;
        }

        .email-body h1 {
            font-size: 24px;
            color: #2d2d2d;
        }

        .email-body p {
            font-size: 16px;
            color: #6f6f6f;
            margin: 20px 0;
        }

        
        .email-footer {
            background-color: #f3f8ff;
            padding: 20px;
            text-align: center;
        }

        .email-footer p {
            font-size: 14px;
            color: #999;
            margin: 0;
        }

        .email-footer img {
            max-height: 40px;
        }
        .gpt{
            color:green
        }
    </style>
</head>
<body>

<div class="email-container">

    <!-- Header -->
    <div class="email-header">
        <img src="https://ucarecdn.com/7790a312-1fcf-43ce-a65c-35bdb96bde1f/-/preview/600x600/" alt="Logo">
        <span class="badge">Skill <span class="gpt">GPT<span></span>
    </div>

    <!-- Body -->
    <div class="email-body">
        <p class="font-bold">Hi Support Team,</p>
        <p>${message}</p>
        <div>
        <h3>Here are my details:</h3>
         <p class="font-bold">Name:${userName}</p>
         <p class="font-bold">Email:&nbsp;${email}</p>
         <p class="font-bold">Phone:${phone}</p>
        </div>

        

        <!-- Call to Action -->
        
    </div>

    <!-- Footer -->
    <div class="email-footer">
        <p>Have a nice day!</p>
        
    </div>

</div>

</body>
</html>

      `,                                            // HTML content for email
    };

    transporter.sendMail(mailOptions, (error:any, info:any) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({success:false, message: 'Failed to send email', error });
      } else {
        console.log('Email sent:', info.response);
        return res.json({success:true, message: 'Email sent successfully!', info });
      }
    });
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
