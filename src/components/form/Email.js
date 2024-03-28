export default function Email({ fieldDetails, value, handleOnChange }) {
  const { label, required } = fieldDetails;
  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor="email" className="my-2">
        {label}
      </label>
      <input
        type="email"
        name="email"
        value={value}
        required={required}
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
