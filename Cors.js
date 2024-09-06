// corsOptions.js
const whiteList = ["http://localhost:5000", "https://www.google.com", "https://bankbackend-nine.vercel.app"];

const corsOption = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error("Not allowed by CORS")); // Block the request if the origin is not in the whitelist
        }
    },
    credentials: true, // Allow credentials
    optionsSuccessStatus: 200 // For older browsers compatibility
};

export default corsOption; // Use ES6 export
