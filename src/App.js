import PaymentMethodsSelect from "./components/PaymentMethodSelect";
import PaymentForm from "./components/PaymentForm";
import ConfirmationPage from "./components/ConfirmationPage";
import LoadingAnimation from "./components/LoadingAnimation";
import { useState } from "react";

function App() {
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changePaymentMethod = (method) => setPaymentMethod(method);
  const toggleComplete = () => {
    setPaymentComplete(!paymentComplete);
    setIsLoading(false);
  };


  if (paymentComplete) return <ConfirmationPage toggleComplete={toggleComplete} />;

  if (isLoading) return <LoadingAnimation />;

  return (
    <main className="bg-gray-200 min-h-screen h-full p-4 md:p-8">
      <PaymentMethodsSelect
        paymentMethod={paymentMethod}
        changePaymentMethod={changePaymentMethod}
      />
      <PaymentForm
        paymentMethod={paymentMethod}
        toggleComplete={toggleComplete}
        setIsLoading={setIsLoading}
      />
    </main>
  );
}

export default App;
