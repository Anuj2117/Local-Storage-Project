
const textarea = document.querySelector("#textarea");


const savedText = localStorage.getItem("UserInput");

if(savedText.length==0){
    textarea.innerHTML="Start typing here......";
}else{
    textarea.innerHTML=savedText;
}

textarea.addEventListener("input", function() {
    localStorage.setItem("UserInput", textarea.value);
});


const text = "Auto Save TextArea";
const typingSpeed = 100; // Adjust typing speed (in milliseconds)

const typingElement = document.getElementById("typingEffect");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
    } else {
        typingElement.textContent = text.charAt(0); // Reset to the first character
        index = 1; // Start from the second character
    }
    setTimeout(typeWriter, typingSpeed);
}

// Start typing effect
typeWriter();

