export async function ClassifyImage(imageBlob, userText = "") {
  const API_KEY = "your_api_key_here";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

  // Convert Blob to base64 inlineData
  function blobToGenerativePart(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.split(",")[1];
        resolve({
          inlineData: {
            mimeType: blob.type,
            data: base64Data,
          },
        });
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(blob);
    });
  }

  const imagePart = await blobToGenerativePart(imageBlob);

  // Prompt
  const prompt = `You are an expert maintenance dispatcher. Analyze the attached image and classify the issue into EXACTLY one of the following specific issues:

  "water leakage", "broken water pipe", "street light not working", "broken traffic signal", "power outage", "road damage", "damaged footpath",  "garbage not collected", "blocked drain", "stray animals", "animal attack"

  User report (optional): "${userText}"

  Return ONLY the single specific issue from the above list. Do not invent new issues and if you can't find anything from the list then return "couldn't classify provide description"`;

  const requestBody = {
    contents: [
      {
        parts: [{ text: prompt }, imagePart],
      },
    ],
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.error?.message || `API Error: ${response.status}`
    );
  }

  const result = await response.json();
  const category = result.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

  if (!category || category === "Unknown") {
    throw new Error(
      "Unable to classify image. Please re-upload a clearer image."
    );
  }

  return category;
}
