import { useState } from 'react';
import FormField, { IFormField } from './FormField';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState<IFormField[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newField = {
      id: new Date().getTime(),
      type: formData.get('type') as string,
      label: formData.get('label') as string,
      placeholder: formData.get('placeholder') as string,
      required:
        (formData.get('placeholder') as string) === 'true' ? true : false,
      value: '',
    };

    setFormFields([...formFields, newField]);
  };

  return (
    <>
      <h1>Form Builder</h1>
      <form id="form-builder" onSubmit={handleAdd}>
        <fieldset>
          <legend>Add a field</legend>
          <label htmlFor="type">Field Type</label>
          <select name="type" id="type">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div>
            <label htmlFor="required">Required</label>
            <input type="checkbox" name="required" id="required" />
          </div>
          <label htmlFor="label">Label</label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
          />
          <label htmlFor="placeholder">Placeholder</label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
          />
          <button type="submit" className="secondary">
            Add Form Field
          </button>
        </fieldset>
      </form>
      <FormField fields={formFields} setFields={setFormFields} />
    </>
  );
};

export default FormBuilder;
