import InputField from "./components/index.js";

if (!customElements.get("alien-input")) {
    customElements.define("alien-input", InputField);
}