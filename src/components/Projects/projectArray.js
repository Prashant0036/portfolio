import assets from "../../assets/assets";

let projectArray = [
  {
    id: 1,
    name: "Logic Leet - Full Stack Coding Practice Platform",
    date: "Nov ’25",
    link: "https://logicleet.run.place/",
    gitHub: "https://github.com/Prashant0036/Logic-Leet",
    screenshot: assets.logicleet,
    about: "Architected a coding platform supporting multi-language code execution via Judge0 API, serving 100+ concurrent users with low-latency response using Redis caching."
  },

  {
    id: 2,
    name: "AI Risk Assessment Web App for Tuberculosis",
    date: "Sep ’25",
    link: "https://tbrisk-ai.netlify.app",
    gitHub: "https://github.com/Prashant0036/AI-Web-App-for-TB",
    screenshot: assets.tbApp, // change as per asset name
    about:
      "AI-based TB app using FastAPI, React, MongoDB, and Gemini LLM. Generates and tracks risk score, suggests diagnostic tests, and stores result.",
  },

  {
    id: 3,
    name: "Secret Image Sharing",
    date: "Feb ’23",
    link: "https://tinyurl.com/4k89eta4",
    gitHub: "https://github.com/Prashant0036/Secret-image-sharing",
    screenshot: assets.secretImageShare, // change as per asset name
    about:
      "Steganography project using bit manipulation to generate shares from multiple images. Original image reconstructed only by combining generated shares.",
  },

  {
    id: 4,
    name: "Spotify Clone",
    date: "Sep ’24",
    link: "https://spotifyprashant.netlify.app",
    gitHub: "https://github.com/Prashant0036/Spotify-clone",
    screenshot: assets.spotifyClone, // change as per asset name
    about:
      "Developed a fully responsive Spotify-style music player featuring dynamic playlists, next/previous track functionality, a precise seek bar, and real-time volume control.",
  },

  {
    id: 5,
    name: "Student Face Recognition System",
    date: "Jun ’24",
    link: "",
    gitHub: "https://github.com/Prashant0036/Student-Face-Recognition",
    screenshot: assets.faceRecognition, // change as per asset name
    about:
      "Face recognition system using Python and Flask. Uses Support Vector Machine ML algorithm to classify and recognize students of the department.",
  },

  {
    id: 6,
    name: "Home Price Prediction [Bengaluru]",
    date: "Jul ’24",
    link: "",
    gitHub: "https://github.com/Prashant0036/Home-Price-Prediction-Bengaluru",
    screenshot: assets.homePricePrediction, // change as per asset name
    about:
      "Predicts home prices in Bengaluru using Linear Regression based on BHK, bathrooms, and location. Frontend built using HTML, CSS, JavaScript.",
  },

  {
    id: 7,
    name: "Steganography in Image Processing",
    date: "Nov ’23",
    link: "https://tinyurl.com/3t4rfuk4",
    gitHub: "https://tinyurl.com/3ae2rysa",
    screenshot: assets.steganography, // change as per asset name
    about:
      "Performs steganography by hiding secret messages inside images using Least Significant Bit (LSB) method without altering visible quality.",
  },
  {
    id: 8,
    name: "Internet Speed Tester",
    date: "July ’24",
    link: "https://speedtester.streamlit.app/",
    gitHub: "https://github.com/Prashant0036/Internet-Speed-Tester",
    screenshot: assets.internetSpeed, // change as per asset name
    about:
      "Measures your download speed, upload speed, and latency in real time. It also saves your test history during the session, allowing you to review past results and download them as a CSV file.",
  },
  {
    id: 9,
    name: "Netflix UI Clone",
    date: "Nov ’22",
    link: "https://binarie-assessment-net.netlify.app/",
    gitHub: "https://github.com/Prashant0036/NetflixBinarie",
    screenshot: assets.Netflix, // change as per asset name
    about:
      "Developed a fully responsive Netflix-inspired UI clone using IMDB api with smooth interactions, lazy loading,  API debouncing, dynamic layouts, and a clean, modern design.",
  },
];



export default projectArray;