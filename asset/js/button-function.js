function operation(id) {
    switch (id) {
        case "+":
            sum();
            break;
        case "-":
            sot();
            break;
        case "Clean":
            clean();
            break;

    }

    function sum() {

        let sum = Number(operator.querySelector("input").value) +
            Number(sMonitor.querySelector("p").textContent);
            console.log(sMonitor.querySelector("p").textContent);
        sMonitor.querySelector("p").replaceChild(checkInt(sum), sMonitor.querySelector("p").firstChild);
        texRed(sMonitor.querySelector("p"));

    }
    function sot() {
        let sot = Number(sMonitor.querySelector("p").textContent) -
        Number(operator.querySelector("input").value);
        
        console.log(sMonitor.querySelector("p").textContent);
    sMonitor.querySelector("p").replaceChild
    (checkInt(sot), sMonitor.querySelector("p").firstChild);
    texRed(sMonitor.querySelector("p"));


    }

    function clean() {
        const nodo = document.createTextNode("0");
        sMonitor.querySelector("p").replaceChild
        (nodo,sMonitor.querySelector("p").firstChild )
        operator.querySelector("input").value = 1
        texRed(sMonitor.querySelector("p"));

    }




}