#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*Creando user defined tapa type*/
struct client
{
    char Name[50];
    char Id[10];
    float Credit;
    char Address[100];
};

int main(int argc, char const *argv[])
{
    struct client client_1 = {0};
    strcpy(client_1.Name, "Chalo Osorio");
    strcpy(client_1.Id, "000000001");
    client_1.Credit = 10000000;
    strcpy(client_1.Address, "Cl 30, Cr 40 Ciudad Medellin");

    printf("The client name is %s\n", client_1.Name);
    printf("The client id is %s\n", client_1.Id);
    printf("The client credits is %f\n", client_1.Credit);
    printf("The client addres is %s\n", client_1.Address);
    return 0;
}
