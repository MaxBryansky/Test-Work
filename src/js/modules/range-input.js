function rangeInput() {
  var slider = document.getElementById("range");
  var output = document.getElementById("percent");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };
};

export default rangeInput;