import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6915bae9f9fa8f19671f7b8f/1j9ue48mn";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    // Append to body
    document.body.appendChild(script);

    return () => {
      // Optional cleanup (if needed on route change)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
     
    </>
  );
}

export default App;
