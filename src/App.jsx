import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Registration Wizard
        </h1>

        {/* Progress Section */}
        <div className="mb-8">

          <div className="flex justify-between mb-2 text-sm font-medium text-gray-600">
            <span>Step {step} of 3</span>
            <span>{Math.round((step / 3) * 100)}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

        </div>

        {/* Step Components */}
        {step === 1 && (
          <Step1
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {step === 2 && (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {step === 3 && (
          <Step3
            prevStep={prevStep}
            formData={formData}
          />
        )}

      </div>
    </div>
  );
}

export default App;