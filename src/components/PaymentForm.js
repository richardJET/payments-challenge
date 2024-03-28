import paymentPlugins from "./../paymentPlugins.json";
import { useState } from "react";
import CreditCardNumber from "./form/CreditCardNumber";
import Text from "./form/Text";
import Email from "./form/Email";
import Password from "./form/Password";
import Cvv from "./form/Cvv";
import CryptoWallet from "./form/CryptoWallet";
import ExpirationDate from "./form/ExpirationDate";

export default function PaymentForm({ 
  paymentMethod,
  toggleComplete
}) {
    const [name, setName] = useState(null);
    const [creditCardNumber, setCreditCardNumber] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);
    const [cvv, setCvv] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cryptoAddress, setCryptoAddress] = useState(null);

    const fields = paymentPlugins[paymentMethod].fields;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        toggleComplete();
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container rounded shadow bg-white mx-auto mt-2 p-12 min-h-96">
        <div className="flex flex-wrap justify-between w-3/5">
          <div className="my-2">
            <h2 className="text-2xl font-semibold my-1">Payment Form</h2>
            <p className="text-gray-600">
              Please enter your payment details below
            </p>
          </div>
          {fields.name && (
            <Text
              fieldDetails={fields.name}
              value={name}
              handleOnChange={setName}
            />
          )}
          {fields.creditCardNumber && (
            <CreditCardNumber
              fieldDetails={fields.creditCardNumber}
              value={creditCardNumber}
              handleOnChange={setCreditCardNumber}
            />
          )}
          {fields.expirationDate && (
            <ExpirationDate
              fieldDetails={fields.expirationDate}
              value={expirationDate}
              handleOnChange={setExpirationDate}
            />
          )}
          {fields.cvv && (
            <Cvv
              fieldDetails={fields.cvv}
              value={cvv}
              handleOnChange={setCvv}
            />
          )}
          {fields.email && (
            <Email
              fieldDetails={fields.email}
              value={email}
              handleOnChange={setEmail}
            />
          )}
          {fields.password && (
            <Password
              fieldDetails={fields.password}
              value={password}
              handleOnChange={setPassword}
            />
          )}
          {fields.cryptoAddress && (
            <CryptoWallet
              fieldDetails={fields.cryptoAddress}
              value={cryptoAddress}
              handleOnChange={setCryptoAddress}
            />
          )}
        </div>
      </div>
      <div className="container flex justify-end my-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-48 shadow"
        >
          Confirm Payment
        </button>
      </div>
    </form>
  );
}
