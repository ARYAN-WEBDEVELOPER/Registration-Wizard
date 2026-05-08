import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../schemas/validationSchema";

function Step1({ nextStep, formData, setFormData }) {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(step1Schema),
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

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          First Name
        </label>

        <input
          type="text"
          placeholder="Enter first name"
          {...register("firstName")}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.firstName?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Last Name
        </label>

        <input
          type="text"
          placeholder="Enter last name"
          {...register("lastName")}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.lastName?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Date of Birth
        </label>

        <input
          type="date"
          {...register("dob")}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.dob?.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300
          ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Continue
      </button>

    </form>
  );
}

export default Step1;