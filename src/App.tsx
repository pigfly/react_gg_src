import "./Badge.css";
import "./SmartCharacterLimit.css";

import MultiStepForm from "./StepForm";
import FormBuilder from "./Form_Builder/FormBuilder";
import SearchFilter from "./Search_Filter/SearchFilter";
import CountryInfo from "./Country_Info/CountryInfo";

function App() {
  return (
    <>
      <MultiStepForm />
      <FormBuilder />
      <SearchFilter />
      <CountryInfo />
    </>
  );
}

export default App;
