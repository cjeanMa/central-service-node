import AWS from 'aws-sdk';
import yenv from 'yenv'

const env = yenv();
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params 

// Create the promise and SES service object

export const sendEmail = (fullname:string, email:string, subject:string, message:string) =>{

    let params = {
        Destination: { /* required */
          ToAddresses: [
            env.ORIGINAL_ADDRESS
          ]
        },
        Message: { /* required */
          Body: { /* required */
            Html: {
             Charset: "UTF-8",
             Data: `
                <h1>Hello my friend, you have a new message</h1>
                <br />
                <h2>Please check it</h2>
                <p>
                    My name is: ${fullname}  
                    my email is: ${email}
                    ${message}
                </p>
             `
            },
            Text: {
             Charset: "UTF-8",
             Data: message
            }
           },
           Subject: {
            Charset: 'UTF-8',
            Data: subject
           }
          },
        Source: env.ORIGINAL_ADDRESS /* required */
      };

    let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    
    sendPromise.then(
      function(data) {
        console.log(data.MessageId);
        return true
      }).catch(
        function(err) {
        console.error(err, err.stack);
        return false
      });
}


// Handle promise's fulfilled/rejected states