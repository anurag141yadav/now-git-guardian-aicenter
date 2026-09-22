import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['dbd3b0801bd1c2106962fe60cd4bcb13'],
    table: 'sys_email_layout',
    data: {
        advanced: false,
        layout: `<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<style>
    /* Reset styles */
    body, h1, p {
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: Arial, sans-serif;
      background-color: #f7f7f7;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #777;
    }

    /* Additional styles */
    .header-image {
      text-align: center;
      margin-bottom: 20px;
    }

    .header-image img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .content {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
  .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #3498db;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
  
  </style>
<div class="container">
<div class="header-image"><img src="/sys_attachment.do?sys_id=cd56fc441bd1c2106962fe60cd4bcbef" alt="" data-library="false" width="383" height="73" /></div>
<div class="header-image" style="text-align: left;"><span style="font-size: 12pt; font-family: tahoma, arial, helvetica, sans-serif;">\${notification:body}</span></div>
</div>
<div class="footer"><a href="servicenow.com" class="button" target="_blank" rel="noopener">Service Now</a></div>`,
        name: 'Update Identity Information Layout',
    },
})
