const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: 'def9ecbb56d74cea16923f123f4ac8c2-2b755df8-9c4f1a72'});

const template=`<!DOCTYPE html>
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
            background-color: #1e1e1e;
            padding: 20px;
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
            <h2>Thank You for choosing Skill GPT </h2>
            
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
`

mg.messages.create('sandbox2f1aaf5c65164c35bc8ab4ecb48127cd.mailgun.org', {
    from: "Skill GPT users.helpandcare@gmail.com",
    to: ["shivamkumarroy98@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: template
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.error(err)); // logs any error