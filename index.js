const inputs = document.querySelectorAll(".controls input")
console.log(inputs);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}



const output1 = document.querySelector("#spaceID");
const output2 = document.querySelector("#blurID");

output1.innerHTML = inputs[0].value;
output2.innerHTML = inputs[1].value;

inputs[0].oninput = function () {
    output1.innerHTML = this.value;
}

inputs[1].oninput = function () {
    output2.innerHTML = this.value;
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
