
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
        <label className="my-1">{fieldDetails.label}</label>
        <input
          type="text"
          value={value}
          required
          placeholder="XXXX XXXX XXXX XXXX"
          inputMode="numeric"
          maxLength={19}
          onChange={handleCreditCardNumberChange}
          className="border rounded w-full py-2 ps-2"
        />
      </div>
    );
}