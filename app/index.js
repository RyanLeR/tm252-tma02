document.addEventListener("DOMContentLoaded", () => {

    const tm252_tma01 = document.getElementById("tm252-25b-tma01-body");
    const m269_tma03 = document.getElementById("m269-24j-tma03-body");
    const tm252_tma02 = document.getElementById("tm252-25b-tma02-body");
    tm252_tma01.classList.remove("d-none");
    tm252_tma01.classList.remove("d-block");
    

    m269_tma03.classList.remove("d-none");
    m269_tma03.classList.remove("d-block");

    tm252_tma02.classList.add("d-none");

    const tm252_tma01_button = document.querySelector("#tm252-25b-tma01 button");
    const m269_tma03_button = document.querySelector("#m269-24j-tma03 button");
    tm252_tma01_button.innerHTML = "Hide details";
    m269_tma03_button.innerHTML = "Hide details";

});
