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
        sMonitor.querySelector("p").textContent = checkInt(sum);
        texRed(sMonitor.querySelector("p"));
       
    }
    function sot() {
        let sot = Number(sMonitor.querySelector("p").textContent) -
            Number(operator.querySelector("input").value);
        sMonitor.querySelector("p").textContent = checkInt(sot);
        texRed(sMonitor.querySelector("p"));
      
       
    }
    
    function clean(){
        sMonitor.querySelector("p").textContent =0;
        operator.querySelector("input").value=1
        texRed(sMonitor.querySelector("p"));
        
    }
    
    
    
    
}