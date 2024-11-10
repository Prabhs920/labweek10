import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display form data at the bottom of the form
    console.log(formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label>Province:</label>
          <input type="text" name="province" value={formData.province} onChange={handleChange} />
        </div>
        <div>
          <label>Postal Code:</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted information */}
      {formData.email && (
        <div style={{ marginTop: '20px' }}>
          <h2>Entered Information:</h2>
          <p>Email: {formData.email}</p>
          <p>Full Name: {formData.fullName}</p>
          <p>Address: {formData.address}</p>
          <p>City: {formData.city}</p>
          <p>Province: {formData.province}</p>
          <p>Postal Code: {formData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
