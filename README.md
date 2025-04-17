# ToneForge AI

A web-based tool that transforms robotic, technical, or overly formal text into more expressive, natural, human-sounding communication. Powered by TinyLlama and Ollama, this tool uses advanced language models to rephrase input text into a more conversational tone.

## Features

-   **Input**: Enter any formal or robotic text.
-   **Humanize**: Click the button to transform it into a more natural, human-sounding version.
-   **Copy Output**: Copy the rephrased text to your clipboard easily.
-   **Adjustable Parameters**: Modify backend parameters for more control over text output.

## Technology Stack

-   **Frontend**: HTML, CSS, JavaScript
-   **Backend**: Ollama (TinyLlama model)
-   **Libraries/Tools**:
    -   JavaScript Fetch API for data interaction
    -   Ollama API for text generation
    -   Simple CSS styling for user interface design

## How to Use

1.  **Clone the Repository**

    To get started, clone the repository to your local machine:

    ```bash
    git clone [https://github.com/](https://github.com/)<username>/text-humanizer.git
    cd text-humanizer
    ```

2.  **Run the Ollama Server**

    Make sure you have Ollama installed and running on your machine. Follow the installation instructions from Ollama's official guide to set up the server.

    ```bash
    ollama run
    ```

    Make sure your Ollama server is running on `http://localhost:11434` or the endpoint specified in the `main.js` file.

3. **Run this in case JavaScript Is Blocked by CORS or HTTPS**

   Inside code directory, open terminal and run `python -m http.server 8080` , and open http://localhost:8080/index.html in web browser.  

4.  **Open the Web App**

    Open the `index.html` file in your browser to access the Text Humanizer tool. Input formal or robotic text into the text area, click **Humanize**, and see the transformed text in the output box.

5.  **Optional Adjustments**

    Modify text generation parameters in `main.js` to control creativity, token selection, or repetition settings for customized outputs.

## Development

If you'd like to contribute to the project:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Implement your changes.
4.  Commit your changes (`git commit -m 'Add your feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

-   **TinyLlama and Ollama** for providing the API used to generate human-like text.
-   **The OpenAI community** for contributions to language model research.
