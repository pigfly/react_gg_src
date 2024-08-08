import { useState } from 'react';

function PasswordInput({ minimum = 8 }: { minimum: number }) {
  const [inputValue, setInputValue] = useState('');
  const [isInputValueVisible, setIsInputValueVisible] = useState(false);
  const thresholdMet = inputValue.length >= minimum;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (thresholdMet) {
      alert('Password submitted');
    } else {
      alert('You need a longer password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Password:</label>
        <span className={thresholdMet ? 'no-error' : 'error'}>
          {inputValue.length}
        </span>
      </div>
      <div>
        <input
          placeholder="Enter a password"
          type={isInputValueVisible ? 'text' : 'password'}
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToggleVisibility}>
          {isInputValueVisible ? '🙊' : '🙈'}
        </button>
      </div>

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default PasswordInput;
