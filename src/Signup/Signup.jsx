// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [alertMessage, setAlertMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     if (!email || !password) {
//       setAlertMessage('Please fill in all fields');
//       return;
//     }

//     console.log('Form submitted', formData);
//     setAlertMessage('Login successful!');
//   };

//   return (
//     <div className="login-box">
//       <h2>Login</h2>
//       {alertMessage && (
//         <div className={`alert ${alertMessage === 'Login successful!' ? 'alert-success' : 'alert-danger'}`} role="alert">
//           {alertMessage}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
