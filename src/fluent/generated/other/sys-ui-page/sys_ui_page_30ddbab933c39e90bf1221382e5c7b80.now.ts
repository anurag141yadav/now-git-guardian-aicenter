import { UiPage } from '@servicenow/sdk/core'

UiPage({
    $id: Now.ID['30ddbab933c39e90bf1221382e5c7b80'],
    category: 'htmleditor',
    endpoint: 'x_aleen_snguardian_PrivacyPolicy.do',
    html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Product Privacy Notice - Guardian for ServiceNow effective as of August 2020" />
        <title>Product Privacy Notice - Guardian for ServiceNow</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f9f9f9;
                color: #333;
            }

            .container {
                width: 80%;
                margin: 0 auto;
                padding: 20px;
                background: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            h1 {
                text-align: center;
            }

            h1,
            h2 {
                color: #0056b3;
            }

            ul {
                padding-left: 20px;
            }

            a {
                color: #0056b3;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>Product Privacy Notice - Guardian for ServiceNow</h1>
            <p><strong>Effective Date:</strong> August 2020</p>

            <h2>1. Scope</h2>
            <p>
                This Product Privacy Notice describes the privacy practices of Alert Enterprise, Inc. (“Alert Enterprise”, “we”, “our”) with respect to the collection, use and disclosure of personal information obtained in connection with the purchase and use of our identity intelligence and enterprise access management software and services for preventing fraud, theft and acts of sabotage.
            </p>
            <p>
                Alert Enterprise and its customers enter into agreements that govern the provision of products and services by Alert Enterprise and their use by customers. This Product Privacy Notice only applies to the extent we process personal information in the role of a processor under the direction of our customers. Customers are responsible for complying with any privacy laws and regulations that require providing notice, disclosure, and/or obtaining consent prior to transferring any personal information to Alert Enterprise for processing purposes.
            </p>
            <p>
                “End Users” as referenced in this Product Privacy Notice are those who use our customers' applications, websites, products, and services.
            </p>

            <h2>2. Personal Information Received and Processed by Alert Enterprise</h2>
            <p><strong>End User Information:</strong> Alert Enterprise does not collect or store any technical identifiers that might identify a computer, device, browser or application (e.g., IP address and other similar unique identifiers) of End Users. When End Users enable face recognition services on customers' visitor management kiosks (VIM), the kiosks capture End Users' face images and send them to Alert Enterprise's application programming interface (API) to auto-generate hexadecimal face identifiers (ID's). Alert Enterprise does not store the face ID's and face images.</p>

            <p><strong>Registration Information:</strong> When a customer registers to use Alert Enterprise's products and services, we may collect certain information related to such customer (“Registration Information” and End User Data, collectively “Customer Data”). This includes the customer name and customer details, billing information and names and contact details of customer employees and representatives who are using the products and services (e.g., email, phone number and address). When a customer uses the products and services, Alert Enterprise may also collect certain log data, such as internet protocol (IP) address from which a customer is connecting to the product and services, information related to the device being used to connect to the product and services (e.g., browser type, device type, operating system version) and the features and functions of the products and services used by the customer (“Log Data”).</p>

            <h2>3. How Personal Information is Collected by Alert Enterprise</h2>
            <p>Customer Data may be collected through various methods, including:</p>
            <ol type="i">
                <li>when provided voluntarily (e.g., customer's Registration Information);</li>
                <li>when the customer integrates Alert Enterprise's software development kits (SDK's), API's, pixels, redirect links, JavaScript tags, cookies or similar data collection technologies into their applications, and websites;</li>
                <li>from third parties used by the customer in connection with the measurement and analysis of customer's marketing campaigns and that have partnered with Alert Enterprise.</li>
            </ol>


            <h3>System Operations Data Processing:</h3>
            <p>Alert Enterprise may collect personal information that may be incidentally contained in systems operations data. We may collect this data for the following purposes only:</p>
            <ul>
                <li>To help keep our products and services secure, including for security monitoring and identity management</li>
                <li>To investigate and prevent potential fraud or illegal activities involving our systems and networks, including to prevent cyber-attacks</li>
                <li>To confirm compliance with licensing and other terms of use by our customers</li>
                <li>To comply with applicable laws and regulations and to operate our business, including to comply with legally-mandated reporting, disclosure or other legal process requests, for mergers and acquisitions, finance and accounting, archiving and insurance purposes, legal and business consulting, and in the context of dispute resolution.</li>
            </ul>

            <h3>Face Recognition Data Processing:</h3>
            <p>
                Alert Enterprise collects face images of End Users that our customers may provide to us for their face recognition services. Alert Enterprise does not retain any face recognition data. Once a face is recognized, it is converted into a face ID by our face recognition API and the face image is deleted. The face ID is stored by our software solution on-premise at customer sites. This is a voluntary option offered to customers' employees and visitors when they sign customers' privacy and consent notices each time their face is read for facial recognition purposes.
            </p>
            <h2>4. How Personal Information is Used by Alert Enterprise</h2>
            <p>When Alert Enterprise receives End User Data from a customer, it uses such End User Data as follows:</p>
            <ul>
                <li>To provide such customers with the products and services they have purchased (e.g., to return unique face IDs generated by Alert Enterprise's face recognition API for on-premise face recognition services)</li>
                <li>To improve our API's over time</li>
                <li>To troubleshoot any issues reported by our customers</li>
            </ul>
            <p>
                With regards to Registration Information and Log Data, we use such information to authenticate log-ins to the products and services, to communicate with the customer and to process payments for the products and services. We may also use Registration Information to inform customers of any updates to the products and services (e.g., new features and functionalities) and Log Data to understand how customers are using the products and services so that we may efficiently audit, maintain and improve the products and services provided to customers.
            </p>
            <p>
                Alert Enterprise may use information derived from the aggregation of End User Data and/or Log Data with other data for research and analytics purposes and improvement of the products and services. Aggregated data shall be anonymous and in no way reveal the identity of the customer or any End User.
            </p>

            <h2>5. Sharing Personal Information</h2>
            <p>Alert Enterprise does not share or disclose Customer Data with any third party, except:</p>
            <ul>
                <li>Upon our customer's request</li>
                <li>To our affiliates as necessary to help us support and maintain the products and services provided to customers</li>
                <li>To our service providers who help to support our products and services (e.g., data hosting providers and payment processors)</li>
                <li>When legally required (e.g., court orders or other lawful requests by public authorities)</li>
                <li>To respond to or to prevent fraud, or to protect the safety of Alert Enterprise, our customers, End Users or the public</li>
                <li>As part of any merger or acquisition of Alert Enterprise</li>
            </ul>

            <h2>6. Information Protection and Retention</h2>
            <p>
                Alert Enterprise will not retain End User Data for more than twenty-four months except where otherwise directed by customers or required or allowed by law. Registration Information and Log Data will not be retained for more time than is needed to serve the legitimate business need for which it was collected.
            </p>
            <p>
                Alert Enterprise implements appropriate technical and organizational measures designed to protect against unauthorized access, accidental loss, destruction or damage of Customer Data. If you have questions about the security of your personal information, or if you have reason to believe that the personal information that we hold about you is no longer secure, please contact us immediately at:
                <a href="mailto:privacy@alertenterprise.com">privacy@alertenterprise.com</a>.
            </p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact:<a href="mailto:privacy@alertenterprise.com">privacy@alertenterprise.com</a></p>
            <p>
                <b>AlertEnterprise Inc.</b><br />
                Attn: Privacy<br />
                Alert Enterprise, Inc<br />
                4350 Starboard Dr<br />
                Fremont, CA 94538
            </p>
            <p>Website: <a href="https://www.alertenterprise.com" target="_blank">https://www.alertenterprise.com</a></p>

        </div>
    </body>

    </html>
</j:jelly>`,
})
