import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EventRegistrationForm from './EventRegistrationForm';
import SubmissionSummary from './SubmissionSummary';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventRegistrationForm></EventRegistrationForm>} />
        <Route path="/summary" element={<SubmissionSummary></SubmissionSummary>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
