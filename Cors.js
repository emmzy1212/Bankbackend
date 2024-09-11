const whiteList = [
    "https://bankbackend-nine.vercel.app/",
    "http://localhost:5000"
  ];
  
  const corsOption = {
    origin: (origin, callback) => {
      if (whiteList.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200
  };
  
  export default corsOption;
  


// // corsOptions.js
// const whiteList = [
//     "http://localhost:5.' bjn000", 
//     "https://bankpg-owv4.vercel.app", // Add frontend URL
//     "https://bankpg-owv4.vercel.app", 
//     "https://bankbackend-nine.vercel.app"
// ];

// const corsOptions = {
//     origin: (origin, callback) => {
//         // Allow requests from whitelisted origins or with no origin (like mobile apps)
//         if (!origin || whiteList.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true, // Allow cookies/credentials
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//     optionsSuccessStatus: 200, // For legacy browsers
// };

// export default corsOptions;






// // const whiteList = ["http://localhost:5000", "https://bankpg.vercel.app", "https://bankbackend-nine.vercel.app"];

// // const corsOption = {
// //     origin: (origin, callback) => {
// //         // Allow requests with no origin (e.g., mobile apps, Postman) or from whitelisted origins
// //         if (!origin || whiteList.indexOf(origin) !== -1) {
// //             callback(null, true);
// //         } else {
// //             callback(new Error("Not allowed by CORS"));
// //         }
// //     },
// //     credentials: true, // Allow credentials such as cookies and headers
// //     methods: "GET, POST, PUT, DELETE", // Allowed methods
// //     allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
// //     optionsSuccessStatus: 200 // Some legacy browsers choke on 204
// // };

// // export default corsOption; // ES6 export
