import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function ConfirmationPage({ toggleComplete }) {
  return (
    <>
      <div className="container rounded bg-white py-24 px-12 md:py-48 md:px-24 mx-auto ">
        <CheckCircleIcon className="text-green-500 w-48 mx-auto" />
        <h2 className="text-3xl font-semibold text-center">
          Payment Confirmed
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Your payment has been successfully processed. Thank you for your
          purchase.
        </p>
      </div>
      <div className="container flex justify-end my-4">
        <button
          onClick={() => toggleComplete()}
          className="rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-24 shadow"
        >
          Back
        </button>
      </div>
    </>
  );
}
