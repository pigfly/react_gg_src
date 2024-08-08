import { useState } from 'react';

function LimitedTextInput({ characterLimit = 20 }: { characterLimit: number }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLength = e.currentTarget.value.length;

    if (inputLength <= characterLimit) {
      setInputValue(e.currentTarget.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.length > characterLimit) {
      alert('The input exceeds the character limit. Please shorten your text.');
    } else {
      alert('Thanks for your submission');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className="no-error">
          Characters remaining: {characterLimit - inputValue.length}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default LimitedTextInput;
