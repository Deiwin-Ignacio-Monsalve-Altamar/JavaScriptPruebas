class Singleton {
    private static intance: Singleton;

    private constructor(){
        //init
    }

    static getInstance(){
        if(!Singleton.intance){
            Singleton.intance = new Singleton()
        }

        return Singleton.intance;
    }
}


export default Singleton;