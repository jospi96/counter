

const operator = document.querySelector(".operator");
const sMonitor = document.querySelector(".monitor");






function createItem(){
    createMonitor("result-monitor");
    createbutton("+","button-sum");
    createInput("operator-monitor");
    createbutton("-","button-sot");
    createbutton("Clean","button-clear");
}

function createbutton(value,id) {
    const element = document.createElement("button");
    element.type ="button";
    element.id = id;
    element.textContent = value;
    operator.appendChild(element);
    element.addEventListener("click", function () {

        console.log(value);
        operation(value);

    });
}

function createInput(id) {
    const element = document.createElement("input");
    element.type ="number";
    element.id = id;
    element.value=1;
    operator.appendChild(element);
    element.addEventListener("blur",function(){
        if(Number(element.value)<=0 ){
            alert("You can only enter an  greater than 0");
            operator.querySelector("input").value=1
        }
        operator.querySelector("input").value=Number(checkInt(Number(element.value)).textContent);

    })
}

function createMonitor(id){
    const monitor= document.createElement("p");
    monitor.type="p";
    monitor.id=id;
    const nodo=document.createTextNode("0");
    monitor.appendChild(nodo);
    sMonitor.appendChild(monitor);


    
}
