export default function Password({ fieldDetails, value, handleOnChange }) {
  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor="password" className="my-2">
        {fieldDetails.label}
      </label>
      <input
        type="password"
        value={value}
        name="password"
        required
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
