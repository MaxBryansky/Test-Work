function rangeInput() {
  const slider = document.getElementById("range");
  const output = document.getElementById("percent");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };
};

export default rangeInput;
