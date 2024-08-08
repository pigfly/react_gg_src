import { useState } from 'react';

const initialFormData: { [char: string]: string } = {
  name: '',
  email: '',
  address: '',
  city: '',
  zipcode: '',
};

const InputComponent = ({
  inputName,
  value,
  handleChange,
}: {
  inputName: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const lowerCased = inputName.toLowerCase();
  return (
    <div>
      <label htmlFor={lowerCased}>{inputName}</label>
      <input
        required
        name={lowerCased}
        id={lowerCased}
        placeholder={`Enter your ${lowerCased}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // replacing name value while destruct
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your submission');
    setCurrentStep(1);
    setFormData(initialFormData);
  };

  if (currentStep === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <InputComponent
          inputName={'Name'}
          value={formData.name}
          handleChange={handleChange}
        />
        <InputComponent
          inputName={'Email'}
          value={formData.email}
          handleChange={handleChange}
        />
        <button type="button" className="secondary" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (currentStep === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <InputComponent
          inputName={'Address'}
          value={formData.address}
          handleChange={handleChange}
        />
        <InputComponent
          inputName={'City'}
          value={formData.address}
          handleChange={handleChange}
        />
        <InputComponent
          inputName={'Zipcode'}
          value={formData.address}
          handleChange={handleChange}
        />
        <div>
          <button className="secondary" type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else if (currentStep === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(formData).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
