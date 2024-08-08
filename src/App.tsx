import './Badge.css';
import './SmartCharacterLimit.css';

import MultiStepForm from './StepForm';
import FormBuilder from './Form_Builder/FormBuilder';
import SearchFilter from './Search_Filter/SearchFilter';

function App() {
  return (
    <>
      <MultiStepForm />
      <FormBuilder />
      <SearchFilter />
    </>
  );
}

export default App;
