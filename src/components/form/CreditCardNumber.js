export default function CreditCardNumber({
  fieldDetails,
  value,
  handleOnChange,
}) {
  const handleCreditCardNumberChange = (e) => {
    const inputValue = e.target.value.replace(/ /g, "");
    let formattedInput = "";
    for (let i = 0; i < inputValue.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        formattedInput += " ";
      }
      formattedInput += inputValue[i];
    }
    handleOnChange(formattedInput);
  };

  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor="creditCardNumber" className="my-2">
        {fieldDetails.label}
      </label>
      <input
        type="text"
        value={value}
        name="creditCardNumber"
        required
        placeholder="XXXX XXXX XXXX XXXX"
        inputMode="numeric"
        minLength={19}
        maxLength={19}
        onChange={handleCreditCardNumberChange}
        className="border rounded w-full py-2 ps-2"
      />
    </div>
  );
}
