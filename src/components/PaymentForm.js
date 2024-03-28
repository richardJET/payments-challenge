import paymentPlugins from "./../paymentPlugins.json";
import { useState, useEffect } from "react";
import CreditCardNumber from "./form/CreditCardNumber";
import Text from "./form/Text";
import TextArea from "./form/TextArea";
import BankAccountType from "./form/BankAccountType";
import Email from "./form/Email";
import Password from "./form/Password";
import Cvv from "./form/Cvv";
import CryptoWallet from "./form/CryptoWallet";
import ExpirationDate from "./form/ExpirationDate";

export default function PaymentForm({ paymentMethod, toggleComplete, setIsLoading}) {
  const [name, setName] = useState("");
  const [bankAccountType, setbankAccountType] = useState("Chequing")
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [password, setPassword] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [description, setDescription] = useState("");

  const fields = paymentPlugins[paymentMethod].fields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    if (name) formData.name = name;
    if (bankAccountType) formData.bankAccountType = bankAccountType;
    if (creditCardNumber) formData.creditCardNumber = creditCardNumber;
    if (expirationDate) formData.expirationDate = expirationDate;
    if (cvv) formData.cvv = cvv;
    if (email) formData.email = email;
    if (securityQuestion) formData.securityQuestion = securityQuestion;
    if (password) formData.password = password;
    if (cryptoAddress) formData.cryptoAddress = cryptoAddress;
    if (description) formData.description = description;
    try {
      setIsLoading(true);
      const response = await fetch(paymentPlugins[paymentMethod].apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Payment request successful:", response.statusText);
      } else {
        console.error("Payment request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Payment request failed:", error);
    } finally{ 
      // since this is a mock payment we will always consider successful
      clearAllFields();
      toggleComplete();
    }
  };

  const clearAllFields = () => {
    setName("");
    setCreditCardNumber("");
    setExpirationDate("");
    setCvv("");
    setEmail("");
    setPassword("");
    setCryptoAddress("");
    setDescription("");
  };

  useEffect(() => {
    clearAllFields();
  }, [paymentMethod]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container rounded bg-white p-8 md:p-12 mx-auto mt-2 min-h-120 shadow">
        <div className="flex flex-wrap justify-between md:w-3/5 w-full">
          <div className="my-2">
            <h2 className="text-2xl font-semibold my-1">Payment Form</h2>
            <p className="text-gray-600">
              Please enter your payment details below.
            </p>
          </div>
          
        {fields.name && (
          <Text
            fieldDetails={fields.name}
            value={name}
            handleOnChange={setName}
            name="name"
          />
        )}

          {fields.bankAccountType && (
            <BankAccountType
              fieldDetails={fields.bankAccountType}
              handleOnChange={setbankAccountType}
              name="bankAccountType"
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
          {fields.securityQuestion && (
            <Text
              fieldDetails={fields.securityQuestion}
              value={securityQuestion}
              handleOnChange={setSecurityQuestion}
              name="securityQuestion"
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
              name="cryptoAddress"
            />
          )}
          {fields.description && (
            <TextArea
              fieldDetails={fields.description}
              value={description}
              handleOnChange={setDescription}
              name="description"
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
