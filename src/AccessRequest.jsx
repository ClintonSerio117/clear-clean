import React, { useState } from "react";

export default function AccessRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can log or send the contact info here later
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      {!submitted ? (
        <>
          <h2>Request Access</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email or Phone Number:
              <input
                type="text"
                name="contact"
                required
                style={{ display: "block", width: "100%", margin: "8px 0", padding: 8 }}
                placeholder="Enter your email or phone"
              />
            </label>
            <button type="submit" style={{ marginTop: 16 }}>Request Code</button>
          </form>
        </>
      ) : (
        <div>
          <h2>Thank you!</h2>
          <p>
            We’ve received your request. We’ll send you a code soon to unlock further access.
          </p>
        </div>
      )}
    </div>
  );
}
