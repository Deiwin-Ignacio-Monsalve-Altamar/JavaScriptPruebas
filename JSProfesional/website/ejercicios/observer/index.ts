interface Observer {
    update: (data: any) => void
}


interface Subject {
    subcribe: (observe: Observer) => void
    unsubscribe: (observe: Observer) => void
}

class BitcoinPrice implements Subject {

    constructor(){
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', ()=> {
            this.notify(el.value)
        })
    }
    observers: Observer[] = []
    subcribe(observe: Observer){
        this.observers.push(observe)
    }
    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obs =>{
            return obs === observer
        })

        this.observers.splice(index, 1);
    }

    notify(data: any){
        this.observers.forEach(observer => observer.update(data))
    }


}

class PriceDisplay implements Observer {
    
    private el: HTMLElement;
    
    constructor(){
        this.el = document.querySelector("price");
    }
    update(data: any){
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const diplay = new PriceDisplay();

value.subcribe(diplay);

setTimeout(()=> value.unsubscribe(diplay),
4000
)