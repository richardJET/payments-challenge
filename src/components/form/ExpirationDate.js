export default function ExpirationDate({
  fieldDetails,
  value,
  handleOnChange,
}) {
  return (
    <div className="flex flex-col w-1/2 pe-2 my-2">
      <label htmlFor="expirationDate" className="my-2">
        {fieldDetails.label}
      </label>
      <input
        type="text"
        value={value}
        name="expirationDate"
        required
        inputMode="numeric"
        placeholder="MM/YY"
        minLength={4}
        maxLength={5}
        onChange={(e) => handleOnChange(e.target.value)}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
