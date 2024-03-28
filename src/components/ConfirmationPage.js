export default function ConfirmationPage({
    toggleComplete
}) {
    return (
      <>
        <div className="container rounded bg-white mx-auto py-48 px-24">
          <h1 className="text-3xl">Thank you for your purchase!</h1>
        </div>
        <div className="container flex justify-end my-4">
          <button onClick={() => toggleComplete()} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-24 shadow">Back</button>
        </div>
      </>
    );
}