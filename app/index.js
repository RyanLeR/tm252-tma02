document.addEventListener("DOMContentLoaded", () => {

    const tm252_tma01 = document.getElementById("tm252-25b-tma01-body");
    const m269_tma03 = document.getElementById("m269-24j-tma03-body");
    const tm252_tma02 = document.getElementById("tm252-25b-tma02-body");
    const tm252_tma01_button = document.querySelector("#tm252-25b-tma01 button");
    const m269_tma03_button = document.querySelector("#m269-24j-tma03 button");
    const tm252_tma02_button = document.querySelector("#tm252-25b-tma02 button");
    
    //Ensuring initial state of tm252_tma01 card body is visible
    tm252_tma01.classList.remove("d-none");
    tm252_tma01.classList.remove("d-block");
    //Ensuring initial state of tm252_tma01 card body is visible
    m269_tma03.classList.remove("d-none");
    m269_tma03.classList.remove("d-block");
    //Ensuring initial state of tm252_tma02 card body is hidden
    tm252_tma02.classList.add("d-none");

    //Ensuring initial state of tm252_tma01 and m259_tma03 button HTML is 'Hide details'
    tm252_tma01_button.innerHTML = "Hide details";
    m269_tma03_button.innerHTML = "Hide details";

    //Ensuring initial state of tm252_tma02 button HTML is 'Show details'
    tm252_tma02_button.innerHTML = "Show details";

    //Ensuring initial state of tm252_tma01 and m269_tma03 button's aria-expanded value is set to 'true' to reflect visible card body
    tm252_tma01_button.setAttribute("aria-expanded", "true");
    m269_tma03_button.setAttribute("aria-expanded", "true");
    //Ensuring initial state of tm252_tma02 button's aria-expanded value is set to 'false' to reflect hidden card body
    tm252_tma02_button.setAttribute("aria-expanded", "false");
    

    //Toggle function to reveal or hide card body for tm252_tma01 and change button innerHTML, as well as toggling aria-expanded value
    function toggleTm252Tma01Btn()
    {
        tm252_tma01.classList.toggle("d-none");
        tm252_tma01.classList.toggle("d-block");
        if(tm252_tma01_button.innerHTML === "Hide details") {
            tm252_tma01_button.innerHTML = "Show details"
        } else {
            tm252_tma01_button.innerHTML = "Hide details";
        }
        if(tm252_tma01_button.getAttribute("aria-expanded") === "true")
        {
            tm252_tma01_button.setAttribute("aria-expanded", "false")
        } else {
            tm252_tma01_button.setAttribute("aria-expanded", "true")
        }  
    }

    //Toggle function to reveal or hide card body for m259_tma03 and change button innerHTML, as well as toggling aria-expanded value
    function toggleM269Btn()
    {
        m269_tma03.classList.toggle("d-none");
        m269_tma03.classList.toggle("d-block");
        if(m269_tma03_button.innerHTML === "Hide details") {
            m269_tma03_button.innerHTML = "Show details"
        } else {
            m269_tma03_button.innerHTML = "Hide details";
        }
        if(m269_tma03_button.getAttribute("aria-expanded") === "true")
        {
            m269_tma03_button.setAttribute("aria-expanded", "false")
        } else {
            m269_tma03_button.setAttribute("aria-expanded", "true")
        }
    }

    //Toggle function to reveal or hide card body for tm252_tma02 and change button innerHTML, as well as toggling aria-expanded value
    function toggleTm252Tma02Btn()
    {
        tm252_tma02.classList.toggle("d-none");
        tm252_tma02.classList.toggle("d-block");
        if(tm252_tma02_button.innerHTML === "Hide details") {
            tm252_tma02_button.innerHTML = "Show details"
        } else {
            tm252_tma02_button.innerHTML = "Hide details";
        }
        if(tm252_tma02_button.getAttribute("aria-expanded") === "true")
        {
            tm252_tma02_button.setAttribute("aria-expanded", "false")
        } else {
            tm252_tma02_button.setAttribute("aria-expanded", "true")
        }
    }

    //Event listeners for click actions on the buttons for tm252_tma01, m269_tma03 and tm252_tma02 assessment card bodies
    tm252_tma01_button.addEventListener("click", () => {
        toggleTm252Tma01Btn();
    });
        
    m269_tma03_button.addEventListener("click", () => {
        toggleM269Btn();
    });
        
    tm252_tma02_button.addEventListener("click", () => {
        toggleTm252Tma02Btn();
    });
});
