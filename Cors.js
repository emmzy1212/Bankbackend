// corsOptions.js

const whiteList = [
    "https://bankpg-owv4.vercel.app",
    "http://localhost:5000"
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || whiteList.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight requests
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
  };
  
  export default corsOptions;
  

// // corsOptions.js

// const whiteList = [
//     "https://bankbackend-nine.vercel.app",
//     "http://localhost:5000",
//     "https://bankpg-owv4.vercel.app" // Add any additional allowed origins here
//   ];
  
//   const corsOptions = {
//     origin: (origin, callback) => {
//       // Allow requests from whitelisted origins or with no origin (e.g., mobile apps, Postman)
//       if (!origin || whiteList.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true, // Allow credentials such as cookies and headers
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//     optionsSuccessStatus: 200 // For legacy browsers
//   };
  
//   export default corsOptions;
  