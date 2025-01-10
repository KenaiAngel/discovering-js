
/*Each phone have color, weight, display resolution, camara, RAM.
Each phone can turn on, restart, take picture and record.
High range phone can do the same but almost they can record slow-motion, facial recognition, and they have an extra camara.
*/
class phone {
    name;
    color;
    weight;
    displayResolution;
    camara = 1 ;
    ram;
    phoneStatus = false;

    constructor (name, color, weight, displayResolution, ram){
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.displayResolution = displayResolution;
        this.ram = ram;
    }

    set setPhoneStatus(phoneStatus){
        (toString.call(phoneStatus) === '[object Boolean]') 
            ? (this.phoneStatus = phoneStatus) : console.log(`Error: Value ${phoneStatus} its not a boolean`)
        ;
        
    }

    get getPhoneStatus(){return this.phoneStatus;}

    turnOn () {
        
        (!this.getPhoneStatus)
            ? (this.setPhoneStatus = true,console.log(`${this.name} on`))
            : console.log(`The phone ${this.name} its already on`)
        ;

    }

    turnOff (){
        (this.getPhoneStatus) 
            ? (this.setPhoneStatus = false, console.log(`${this.name} off`))
            : console.log(`The phone ${this.name} its already off`)
        ;

    }

    restartPhone (){
        this.setPhoneStatus = false;
        console.log(`Restarting ${this.name}`);
    }

    showPhone () {
        console.log(`${this.name}, ${this.color}, ${this.weight}, ${this.displayResolution}, ${this.camara}, ${this.ram}`);

        (this.getPhoneStatus) ? console.log("This phone is off") : console.log("This phone is off");
    }

    takePicture(){
        (this.getPhoneStatus) ? console.log(`${this.name} have taken a photo`) : console.log(`${this.name} can not take photo without being on`);
    }

    record(){
        (this.getPhoneStatus) ? console.log(`${this.name}  had recorded a video`) : console.log(`${this.name} can not take record  without being on`);
    }
}

class highTechPhone extends phone {
    constructor (name, color, weight, displayResolution, ram){
        super(name, color, weight, displayResolution, ram);
        this.camara = 2;
        this.face = "me";
    }

    showPhone(){
        console.log("High-Tech phone details:")
        super.showPhone();
    }

    recordSlowMotion(){
        (this.getPhoneStatus) 
            ? (console.log(`${this.name} had recorded a slow-motion video`)) : (console.log(`${this.name} needs to be on to record`))
        ;
    }
    
    facialRecognition(){
        if (this.getPhoneStatus){
            let input = prompt(`Face for ${this.name}`);
            (input === this.face) 
                ? (console.log(`Welcome back ${this.face}`), this.setPhoneStatus = true)
                : (console.log(`Try again`), this.facialRecognition())
            ;

        }else{
            alert(`This function is not availiable while the phone is off`);
        }
        
    }
}

const celu1 = new phone("Iphone","black",200,"500px", 4);
celu1.showPhone();
celu1.turnOn();
celu1.showPhone();
celu1.turnOff();
celu1.showPhone();
celu1.takePicture();
celu1.turnOn();
celu1.record();

const celu2 = new highTechPhone("Samsung","black",200,"500px", 4);
celu2.showPhone();
celu2.turnOn();
celu2.recordSlowMotion();
celu2.facialRecognition();