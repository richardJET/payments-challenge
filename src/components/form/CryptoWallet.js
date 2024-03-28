export default function CryptoWallet({ fieldDetails, value, handleOnChange }) {
    
    const { label, required } = fieldDetails;
    return (
      <div className="flex flex-col w-full my-2">
        <label className="my-1">{label}</label>
        <input
          type="text"
          value={value}
          required={required}
          maxLength={90}
          onChange={(e) => handleOnChange(e.target.value)}
          className="border rounded w-full py-2 ps-2"
        />
      </div>
    );
}
