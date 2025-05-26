

import { useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  localStorage.getItem("username") == null ? navigate("/login") : "";
  const [errors, setErrors] = useState({});

  const [BMI, setBMI] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [img, setImg] = useState({ img: "", advice: "" });

  function handleSubmit() {
    console.log(height, weight);

    const object = {};

    if (weight < 1 && height < 1) {
      object.weight = "Must to full Weight";
      object.height = "Must to full Height";

      setErrors(object);
      return;
    }
    if (weight < 1) {
      object.weight = "Must to full Weight";
      setErrors(object);
      return;
    }

    if (height < 1) {
      object.height = "Must to full Height";
      return;
    }
    setErrors({});

    setBMI(() => weight / (height * height));

    if (BMI < 18.5) {
      setImg({
        img: "thin.png",
        advice: "Consider nutrient-rich foods and consult a nutritionist",
      });
    } else if (BMI < 25) {
      setImg({
        img: "fit.png",
        advice: "Great job! Maintain balanced diet and regular exercise",
      });
    } else if (BMI < 30) {
      setImg({
        img: "hFat.png",
        advice: "Focus on portion control and increase physical activity",
      });
    } else {
      setImg({
        img: "tooFat.png",
        advice: "Consult healthcare professional for personalized plan",
      });
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              BMI Calculation
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form bellow to Calc your BMI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  {/* <User className="text-blue-600" size={24} /> */}
                  Enter Your Weight and Height
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.weight
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your Weight"
                  />
                  {errors.weight && (
                    <p className="mt-1 text-sm text-red-600">{errors.weight}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.height
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your Height"
                  />
                  {errors.height && (
                    <p className="mt-1 text-sm text-red-600">{errors.height}</p>
                  )}
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Calc BMI
                </button>
              </div>

              <div className="flex flex-col items-center justify-center md:flex-row gap-5">
                <img src={img.img} alt="" width={200} className="rounded" />
                {BMI && (
                  <h2 className="text-3xl">
                    The BMI is {BMI}, So {img.advice}
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
