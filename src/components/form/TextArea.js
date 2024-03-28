export default function TextArea({ fieldDetails, value, handleOnChange }) {
    const { label, required } = fieldDetails;
    return (
        <div className="flex flex-col w-full my-2">
        <label className="my-1">{label}</label>
        <textarea
            value={value}
            required={required}
            rows={3}
            onChange={e => handleOnChange(e.target.value)}
            className="border rounded w-full py-2 ps-2"
        />
        </div>
    );
}
