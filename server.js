const express = require('express');
const app = express();

// Set Cross-Origin-Opener-Policy to 'unsafe-none' (relaxing the policy)
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
  next();
});

// Your other routes and middleware go here

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
