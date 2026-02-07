const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none"
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function subscribe() {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("please enter your email");
    } else {
        alert("Thank you for subscribe");
        document.getElementById("email").value = "";
    }
}

window.onload = () => {
    document.body.style.opacity = "1";
}