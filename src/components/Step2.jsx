import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../schemas/validationSchema";

function Step2({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(step2Schema),
    mode: "onChange",
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.email?.message}
        </p>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("password")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-blue-600 font-medium"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <p className="text-red-500 text-sm mt-1">
          {errors.password?.message}
        </p>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Confirm Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          {...register("confirmPassword")}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.confirmPassword?.message}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-1/2 py-3 rounded-xl font-semibold text-white transition-all duration-300
            ${
              isValid
                ? "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Continue
        </button>

      </div>

    </form>
  );
}

export default Step2;