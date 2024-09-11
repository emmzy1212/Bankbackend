// this should only have my frontend link 
// corsOptions.js

const whiteList = [

    "https://bankpg.netlify.app", // Replace with your actual frontend URL
    "http://localhost:5000" // Local development URL if applicable

    // "https://bankpg-owv4.vercel.app", // Replace with your actual frontend URL
    // "https://bankpg.netlify.app/" // Local development URL if you are running frontend locally
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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
  };
  
  export default corsOptions;
  



// // corsOptions.js

// const whiteList = [
//     // "https://bankpg-owv4.vercel.app",

//     "https://bankbackend-nine.vercel.app",
//     "http://localhost:5000"
//   ];
  
//   const corsOptions = {
//     origin: (origin, callback) => {
//       if (!origin || whiteList.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight requests
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     optionsSuccessStatus: 200
//   };
  
//   export default corsOptions;

