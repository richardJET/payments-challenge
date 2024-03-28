export default function Text({ fieldDetails, value, handleOnChange }) {
  const { label, required } = fieldDetails;
  return (
    <div className="flex flex-col w-full my-2">
      <label className="my-1">{label}</label>
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
