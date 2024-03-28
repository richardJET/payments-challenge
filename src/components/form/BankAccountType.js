export default function BankAccountType({
    fieldDetails,
    handleOnChange,
    name,
    }) {
    return (
      <fieldset className="flex w-full pb-4 border-b">
        <legend className="text-lg">{fieldDetails.label}</legend>
        <div className="flex me-4">
          <label htmlFor="chequing" className="me-2">
            Chequing
          </label>
          <input
            type="radio"
            value="Chequing"
            name={name}
            onChange={(e) => handleOnChange(e.target.value)}
            className="relative top-0.5"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="savings" className="me-2">
            Savings
          </label>
          <input
            type="radio"
            value="Savings"
            name={name}
            onChange={(e) => handleOnChange(e.target.value)}
            className="relative top-0.5"
          />
        </div>
      </fieldset>
    );
}