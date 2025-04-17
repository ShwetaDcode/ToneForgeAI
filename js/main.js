async function humanizeText() {
  const input = document.getElementById("inputText").value.trim();
  const outputBox = document.getElementById("outputText");

  if (!input) {
    alert("Please enter some text.");
    return;
  }

  outputBox.value = "Humanizing... Please wait.";

  const prompt = `Make this sound more natural, and use robotic words with human local words:\n\n"${input}"`;

  // const body = {
  //   model: "tinyllama",
  //   system: "You are Elara Vance, a behavioral analyst and communication strategist who transforms robotic, technical, or overly formal language into expressive, natural, human-sounding communication.",
  //   prompt: prompt,
  //   stream: false
  // };

    const body = {
    model: "tinyllama",
    prompt: prompt,
    system: "You are Elara Vance, a behavioral analyst with 20 years of experience studying human communication. Your expertise lies in detecting the subtle nuances that distinguish genuine human expression from artificial constructs. Your task is to transform the following AI-generated text into a form that is **completely indistinguishable from human writing**. ### Instructions:            1. **Authentic Voice:** - Capture the natural flow of human speech, including hesitations, filler words, and colloquialisms. - Vary sentence structures and avoid mechanical precision.- Incorporate idioms and regional expressions. 2. **Emotional Nuance:** - Infuse the text with **genuine emotion** reflecting the speaker's attitude.- Use descriptive language to **subtly shift tone and mood**.  3. **Contextual Relevance:**  - Ensure appropriate language for the **intended audience**.- Avoid robotic patterns and unnatural word repetitions. 4. **Inconsistencies:** - **Break AI-like consistencies**, introduce human-like variations. - Add natural run-on sentences or off-topic remarks if needed. 5. **Do Not Add AI-like Disclaimers:** - The goal is to produce text that is 100% human.",
    stream: false,
    temperature: 1.0, // Higher temperature for more creativity.
    top_k: 100, // Top k tokens, higher for more variety.
    top_p: 0.9, // Top-p for sampling probability.
    repeat_penalty: 1.2, // Penalize repeated phrases.
    num_predict: 250, // Maximum number of tokens (length of output).
    min_p: 0.2, // Minimum probability for token selection.
    num_ctx: 512, // Context size (you can adjust depending on the length of the text).
    repeat_last_n: 20 // Number of previous tokens to consider for repetition.
  };


  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    outputBox.value = data.response?.trim() || "No response received from model.";
  } catch (error) {
    outputBox.value = "Error connecting to Ollama: " + error.message;
  }
}

function copyOutput() {
  const output = document.getElementById("outputText").value;
  if (!output.trim()) {
    alert("No output to copy.");
    return;
  }

  navigator.clipboard.writeText(output).then(() => {
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Output"), 1500);
  });
}
