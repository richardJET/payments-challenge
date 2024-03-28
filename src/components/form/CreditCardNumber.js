
export default function CreditCardNumber({
    fieldDetails,
    value,
    handleOnChange,
}) {
    return (
      <div className="flex flex-col w-full my-2">
        <label className="my-1">{fieldDetails.label}</label>
        <input
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          inputMode="numeric"
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          className="border rounded w-full py-2 ps-2"
        />
      </div>
    );
}