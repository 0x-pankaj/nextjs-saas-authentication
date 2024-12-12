export const welcomeEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 30px; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
    .button { 
      display: inline-block;
      padding: 10px 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our Platform!</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Thank you for joining our platform! We're excited to have you on board.</p>
      <p>Here are some things you can do to get started:</p>
      <ul>
        <li>Complete your profile</li>
        <li>Explore our features</li>
        <li>Check out our documentation</li>
      </ul>
      <p>If you have any questions, feel free to reach out to our support team.</p>
      <a href="${process.env.NEXTAUTH_URL}/dashboard" class="button">Visit Dashboard</a>
    </div>
  </div>
</body>
</html>
`;

export const paymentSuccessTemplate = (
  name: string,
  amount: number,
  plan: string
) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; margin-bottom: 30px; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
    .amount { font-size: 24px; font-weight: bold; color: #2ecc71; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Payment Successful!</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Your payment has been successfully processed:</p>
      <p>Amount: <span class="amount">$${amount}</span></p>
      <p>Plan: ${plan}</p>
      <p>Thank you for your subscription. You now have access to all ${plan} features.</p>
      <p>If you have any questions about your subscription, please contact our support team.</p>
    </div>
  </div>
</body>
</html>
`;