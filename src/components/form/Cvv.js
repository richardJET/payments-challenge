export default function Cvv({ fieldDetails, value, handleOnChange }) {
  return (
    <div className="flex flex-col w-1/2 ps-2 my-2">
      <label className="my-1">{fieldDetails.label}</label>
      <input
        type="text"
        value={value}
        required
        inputMode="numeric"
        placeholder="123"
        maxLength={3}
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
