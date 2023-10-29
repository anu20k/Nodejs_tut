// event emitter

const EventEmitter = require('events');
const eventEmitter = new EventEmitter;

eventEmitter.on('tutorial',()=>{
    console.log('hello');
})
eventEmitter.emit('tutorial');

class person extends EventEmitter{
    
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

const petro = new person('anuja');
petro.on('name',(name)=>{
    console.log('my name is '+petro.name);
})

petro.emit('name');