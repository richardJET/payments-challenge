import paymentPlugins from "./../paymentPlugins.json";

export default function PaymentMethodsSelect({
  paymentMethod,
  changePaymentMethod,
}) {
  return (
    <div className="container rounded shadow bg-white p-8 md:p-12 mx-auto">
      <div className="my-4">
        <h2 className="text-2xl font-semibold my-1">Payment Method</h2>
        <p className="text-gray-600">
          Please select a payment method by clicking on the proper icon below.
        </p>
        <p className="text-gray-400 text-sm">
          (Note: this is a mock payment form, do not enter real payment
          details.)
        </p>
      </div>
      <ul className="flex flex-wrap">
        {Object.keys(paymentPlugins).map((key) => {
          const plugin = paymentPlugins[key];
          return (
            <li
              key={key}
              className={`border rounded flex me-2 my-1 ${
                paymentMethod === key
                  ? "bg-blue-200 border-blue-400"
                  : "hover:bg-blue-100"
              }`}
            >
              <button
                onClick={() => changePaymentMethod(key)}
                className="flex items-center h-full w-full p-2"
              >
                {plugin.icon ? (
                  <img
                    src={plugin.icon.src}
                    alt={plugin.alt}
                    className="object-contain h-8 w-16"
                  />
                ) : (
                  <span className="flex items-center justify-center text-xl font-semibold h-12 w-24">
                    {key}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
