import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import ProgrammingScreen from './screens/ProgrammingScreen';
import NetworkingScreen from './screens/NetworkingScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/programming" element={<ProgrammingScreen />} />
        <Route path="/networking" element={<NetworkingScreen />} />
      </Routes>
    </Router>
  );
};

export default App;