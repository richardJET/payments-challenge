
import paymentPlugins from "./../paymentPlugins.json";

export default function PaymentMethodsSelect({
    paymentMethod,
    changePaymentMethod
}) {
    return (
      <div className="container rounded shadow bg-white mx-auto p-12">
        <div className="my-2">
          <h2 className="text-2xl font-semibold my-1">Payment Method</h2>
          <p className="text-gray-600">
            Please select a payment method by clicking on the proper icon below
          </p>
        </div>
        <ul className="flex flex-wrap">
          {Object.keys(paymentPlugins).map((key) => {
            const plugin = paymentPlugins[key];
            return (
              <li key={key} className="border rounded flex me-2 my-1">
                <button
                  onClick={() => changePaymentMethod(key)}
                  className={`flex items-center h-full w-full p-2 ${
                    paymentMethod === key ? "bg-blue-200" : "hover:bg-blue-100"
                  }`}
                >
                  {plugin.icon ? (
                    <img
                      src={plugin.icon.src}
                      alt={plugin.alt}
                      className="object-contain h-8 w-16"
                    />
                  ) : (
                    <span className="flex items-center justify-center h-12 w-24 text-xl font-semibold">
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
