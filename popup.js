document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const button = document.getElementById("summarize");
  const output = document.getElementById("output");

  button.addEventListener("click", async () => {
    const text = input.value.trim();

    if (!text) {
      output.textContent = "Please enter some text to summarize.";
      return;
    }

    await summarizeText(text);
  });

  async function summarizeText(text) {
    output.textContent = "Summarizing...";

    try {
      console.log("Sending text to backend:", text);
      const response = await fetch("http://localhost:5000/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(`Backend error: ${data.error || "Unknown error"}`);
      }

      if (!data.summary) {
        throw new Error("No summary in response");
      }

      output.textContent = data.summary;
    } catch (error) {
      console.error("Summarization error:", error);
      output.textContent = `Error: ${
        error.message || "Could not summarize text"
      }`;
    }
  }
});
