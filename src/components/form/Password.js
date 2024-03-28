export default function Password({ fieldDetails, value, handleOnChange }) {
  return (
    <div className="flex flex-col w-full my-2">
      <label className="my-1">{fieldDetails.label}</label>
      <input
        type="password"
        value={value}
        required
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
