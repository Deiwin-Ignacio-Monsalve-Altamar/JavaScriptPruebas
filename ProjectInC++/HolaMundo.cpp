#include <iostream>

/*es para imprimir informacion*/
using namespace std;
int main ()
{
    int counter = 0;
    
    while (counter < 100)
    {
        std::cout << counter << std::endl;
        counter++;
    }

    /*Segundo loop*/
    bool ishappy = true;
    char f = ' '; 
    do {
        std::cout << "SI es feliz t or f" << std::endl;
        cin >> f;

        if (f == 'f')
        {
            ishappy = false;
            std::cout << "correme" << std::endl;
        }
    }while (ishappy == true);


    /*Segundo For*/
    for (int i = 0; i < 100; i++)
    {
        if (i % 2 == 0)
        {
            std::cout << "ES PAR" << std::endl;
        }
        else
        {
            std::cout << "ES IMPAR" << std::endl;
        }
        
    }
    
    
    return 0;
    
}


    /* char Corbatas[5];
    Corbatas[0] = 'w';
    std::cout << Corbatas[0] << std::endl; */
 /*    int index = 0;
    cin >> index;

    string Name[4] = {"atriz", "names", "truy", "dewin"};
    std::cout << Name[4] << std::endl; */


/*     cout << "Dorado" << endl;
    cout << "Vaca" << endl;
    cout << "El teso" << endl;
    cout << "Dando de mas" << endl;

    return 0; */
/* 
    cout << 10 << endl;
    cout << 3.5454 << endl;
    cout << true << endl;
    cout << 'c' << endl;

    cout << "Hola Patzi" << endl;
     */
/*     int month = 12;
    int day = 4;

    day = month;
    float pi = 3.1416;
    bool gameInOver = false;

    cout << month << endl;
    cout << gameInOver << endl; */
    /*Regla tipo de dato, nombre de la variable
    char Minombre = 'd';
     */

/*     int a = 2;
    int b = 5;
    cout << a % 2 << endl;
    a = b - 100;
    cout << a << endl;
    return 0; */
    /* int direccion = 330;
    int segundadir = 1337;

    int *apuntador = &direccion;

    cout << apuntador << endl; */

    /*UTILIZAN CIJN ENTRADA OR CONSOLA*/
/* 
    int edad = 0;

    cout << "Introduce tu edad: " << endl;

    cin >> edad;

    std::cout << "Tu edad es " << edad << endl;
 */ 

/*     int base = 0;
    int altura = 0;

    std::cout << "Introduce base de tu renagulo" << std::endl;
    cin >> base;
    cout << "Introduce altura de tu renagulo" << endl;
    cin >> altura;
    cout << "el are es: " << base * altura << endl; */
    
 /*    int valor_A = 0;
    int valor_B = 0;

    std::cout << "Introduce tu primer numero" << std::endl;
    cin >> valor_A;
    cout << "Introduce tu segundo numero" << endl;
    cin >> valor_B;
    cout << "la multiplicacion es: " << valor_A * valor_B << endl;  */


    /**CONDICIONALES*/
    
    /* int  math = 0, biologia = 0, promedio = 0;

    std::cout << "Introduce cuanto sacastes en amtematicas?" << std::endl;
    cin >> math;
    std::cout << "Introduce cuanto sacastes en Biologia?" << std::endl;
    cin >> biologia;
    promedio = (math + biologia) / 2;
    switch (promedio)
    {
    case 6:
        std::cout << "La alumna gano" << std::endl;
        break;
    case 10:
        std::cout << "Ganastes" << std::endl;
        break;
    default:
        std::cout << "Bueno perdistes" << std::endl;
        break;
    } */

    /**FUNCIONES**/
/*     int totallife = 3;
    if (isDeath(totallife)){
        std::cout << "Game over" << std::endl;
    }
    return 0; */

/* void print(){
    std::cout << "Eres increible" << std::endl;
}

bool isDeath(int hp)
{
    if (hp <= 0)
    {
        return true;
    }
    return false;
} */