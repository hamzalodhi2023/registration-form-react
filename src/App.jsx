// Import the Registration component from the "./Registration" file
import Registration from "./components/Register";
// Define the main App component
function App() {
  // Return the JSX for the App component
  return (
    // Use a React fragment to wrap the component
    <>
      {/* Render the Registration component */}
      <Registration />
    </>
  );
}

// Export the App component as the default export
export default App;
