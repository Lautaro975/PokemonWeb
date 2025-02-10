import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./error/errorBiundery";
import { Subpage } from "./pages/Subpage/subpage";
import { SignIn } from "./pages/SignIn/sign_in";
import { SignUp } from "./pages/SignUp/signup";

function App() {
  return (
    <Router> 
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Subpage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/> 
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

