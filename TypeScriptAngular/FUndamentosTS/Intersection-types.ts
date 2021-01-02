interface Interface1{
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

type InterfaceMix = Interface2 & Interface1;

const interfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 23
}