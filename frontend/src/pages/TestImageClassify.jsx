import { useState } from "react";
import {ClassifyImage} from "../lib/ImageClassify" // adjust path if needed

export const TestImageClassify = () => {
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle image upload + call Gemini classify
 const handleImageUpload = async (e) => {
   const file = e.target.files[0];
   if (!file) return;

   setPreview(URL.createObjectURL(file));
   setLoading(true);

   try {
     const result = await ClassifyImage(file); // pass File/Blob directly
     setCategory(result);
   } catch (err) {
     console.error("Error:", err);
     setCategory("Error classifying");
   } finally {
     setLoading(false);
   }
 };


  return (
    <div className="p-6 flex flex-col items-center space-y-4">
      <h1 className="text-xl font-semibold">Test Image Classification</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border p-2 rounded"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-64 h-64 object-cover rounded-md shadow"
        />
      )}

      {loading && <p className="text-blue-500">Classifying...</p>}
      {category && !loading && (
        <p className="text-lg font-medium text-green-600">
          Predicted Category: {category}
        </p>
      )}
    </div>
  );
};
