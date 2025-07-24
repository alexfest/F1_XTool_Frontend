import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import HomePage from './pages/HomePage';
import PersonalizationPage from './pages/PersonalizationPage';
import ConfirmMorePage from './pages/ConfirmMorePage';
import ProcessingPage from './pages/ProcessingPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/personalize" component={PersonalizationPage} />
        <Route path="/confirmmore" component={ConfirmMorePage} />
        <Route path="/processing" component={ProcessingPage} />
      </Switch>
    </Router>
  );
}
