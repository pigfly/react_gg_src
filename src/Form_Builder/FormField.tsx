export interface IFormField {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
}

const FormField = ({
  fields,
  setFields,
}: {
  fields: IFormField[];
  setFields: React.Dispatch<React.SetStateAction<IFormField[]>>;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(fields, null, 2));
  };

  const handleUpdate = (id: number, updatedField: { value: string }) => {
    const updatedFormFields = fields.map((field) =>
      field.id === id ? { ...field, ...updatedField } : field
    );

    setFields(updatedFormFields);
  };

  const handleDelete = (id: number) => {
    const updatedFormFields = fields.filter((field) => field.id !== id);
    setFields(updatedFormFields);
  };

  return (
    <>
      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form Fields</legend>
          <ul>
            {fields.map((field) => (
              <li key={field.id}>
                <label htmlFor={`input-${field.id}`}>{field.label}</label>
                <input
                  id={`input-${field.id}`}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    handleUpdate(field.id, { value: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="secondary"
                  onClick={() => handleDelete(field.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>
    </>
  );
};

export default FormField;
