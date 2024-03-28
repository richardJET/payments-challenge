import PaymentMethodsSelect from "./components/PaymentMethodSelect";
import PaymentForm from "./components/PaymentForm";
import ConfirmationPage from "./components/ConfirmationPage";
import { useState } from "react";

function App() {
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [paymentComplete, setPaymentComplete] = useState(false);

  const changePaymentMethod = (method) => setPaymentMethod(method);
  const toggleComplete = () => setPaymentComplete(!paymentComplete);

  if (paymentComplete) {
    return (
      <main className="bg-gray-200 min-h-screen h-full p-4 md:p-8">
        <ConfirmationPage toggleComplete={toggleComplete} />
      </main>
    );
  }

  return (
    <main className="bg-gray-200 min-h-screen h-full p-4 md:p-8">
      <PaymentMethodsSelect
        paymentMethod={paymentMethod}
        changePaymentMethod={changePaymentMethod}
      />
      <PaymentForm
        paymentMethod={paymentMethod}
        toggleComplete={toggleComplete}
      />
    </main>
  );
}

export default App;
