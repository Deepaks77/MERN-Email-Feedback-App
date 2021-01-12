const sg = require("@sendgrid/mail");
const keys = require("../config/keys");
sg.setApiKey(keys.sendGridKey);

module.exports = async ({ _id, body, subject, recipients }) => {
  const msg = {
    from: keys.mailFrom,
    subject,
    html: `<html>
    <body><div style="text-align:center;">
    <h3>I'd like your input!</h3>
    <p>Please answer the following questions:</p>
    <p>${body}</p>
    <div>
    <a href="${keys.redirectDomain}/api/surveys/${_id}/yes">Yes</a>
    </div>
    <div>
    <a href="${keys.redirectDomain}/api/surveys/${_id}/no">No</a>
    </div>
    </div>
    </body>
    </html>`,
    personalizations: recipients.map((recipient) => ({ to: [recipient] })),
  };

  try {
    const result = await sg.send(msg);
    // console.log(result);
  } catch (err) {
    // console.log(err);
  }
};
