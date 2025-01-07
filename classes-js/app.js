
/*Each phone have color, weight, display resolution, camara, RAM.
Each phone can turn on, restart, take picture and record.
High range phone can do the same but almost they can record slow-motion, facial recognition, and they have an extra camara.
*/
class phone {
    name;
    color;
    weight;
    displayResolution;
    camara;
    ram;
    phoneStatus = false;

    constructor (name, color, weight, displayResolution, camara, ram){
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.displayResolution = displayResolution;
        this.camara = camara;
        this.ram = ram;
    }

    set setPhoneStatus(phoneStatus){
        if( toString.call(phoneStatus) === '[object Boolean]'){
            this.phoneStatus = phoneStatus;
        }
        else{
            alert(`Error: Value ${phoneStatus} its not a boolean`);
        }
        
    }

    get getPhoneStatus(){return this.phoneStatus;}

    turnOn () {
        
        if(!this.getPhoneStatus){
            this.setPhoneStatus = true;
            alert(`${this.name} on`);
            
        }
        else{
            alert(`The phone ${this.name} its already on`);
        }
    }

    showPhone () {
        console.log(`${this.name}, ${this.color}, ${this.weight}, ${this.displayResolution}, 
        ${this.camara}, ${this.ram}`)
        ;

        console.log(this.getPhoneStatus);
    }


}

const celu1 = new phone("sam","black",200,"500px",1, 4);
celu1.showPhone();
celu1.turnOn();
celu1.showPhone();
celu1.turnOn();

