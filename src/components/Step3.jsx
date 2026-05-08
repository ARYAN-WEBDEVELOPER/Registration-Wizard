function Step3({ formData, prevStep }) {

  const handleFinalSubmit = () => {
    console.log("Final Submitted Data:", formData);

    alert("Registration Successful 🎉");
  };

  return (
    <div className="space-y-5">

      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Review Your Details
      </h2>

      <div className="bg-gray-100 rounded-2xl p-5 space-y-3">

        <div>
          <span className="font-semibold text-gray-700">
            First Name:
          </span>{" "}
          {formData.firstName}
        </div>

        <div>
          <span className="font-semibold text-gray-700">
            Last Name:
          </span>{" "}
          {formData.lastName}
        </div>

        <div>
          <span className="font-semibold text-gray-700">
            Date of Birth:
          </span>{" "}
          {formData.dob}
        </div>

        <div>
          <span className="font-semibold text-gray-700">
            Email:
          </span>{" "}
          {formData.email}
        </div>

      </div>

      <div className="flex gap-3">

        <button
          onClick={prevStep}
          className="w-1/2 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
        >
          Back
        </button>

        <button
          onClick={handleFinalSubmit}
          className="w-1/2 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          Submit
        </button>

      </div>

    </div>
  );
}

export default Step3;