export default function TextArea({
  fieldDetails,
  value,
  handleOnChange,
  name,
}) {
  const { label, required } = fieldDetails;
  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor={name} className="my-2">
        {label}
      </label>
      <textarea
        value={value}
        name={name}
        required={required}
        rows={3}
        maxLength={100}
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
