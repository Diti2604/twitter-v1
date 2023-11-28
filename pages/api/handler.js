export default function handler(req, res) {
    // Set the Cross-Origin-Opener-Policy headers
    res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');  
    // Your API logic goes here
  
    // Send the response
    res.status(200).json({ message: 'Hello world!' });
  }