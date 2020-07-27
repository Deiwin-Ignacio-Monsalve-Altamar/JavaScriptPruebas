/**
 * Crear un pointer para saber que hay en front(proximo a salir) y rear
Colocar estos valores en -1 al inicializar
Incrementar en 1 el valor de “rear” cuando agregamos un elemento
Retornar el valor de front al quitar un elemento e incrementar en 1 el valor de front a usar dequeue.
Antes de agregar un elemento revisar si hay espacios
Antes de remover un elemento revisamos que existan elementos
Asegurarnos de que al remover todos los elementos resetear nuestro front y rear a -1*/

#include <stdio.h>

/*Definiendo tamaño de el array*/
#define SIZE 5

int values[SIZE], front = -1, rear =-1;

/*Agregando datos en la lista*/
void enQueue(int value)
{
    if (rear == SIZE - 1)
        printf("We Queue is lleno\n");
    else
    {
        if (front == -1)
            front = 0;
        rear++;
        values[rear] = value;
        printf("Se inserto el valor correctamente %d\n", value);
    }    
}

/*Eliminando datos de la lista*/
void deQueue()
{
    if (front == -1)
        printf("We Queue is empty\n");
    else
    {
        printf("Se elimino el valor %d\n", values[front]);
        front++;
        rear++;
        if (front > rear )
        {
            front = rear = -1;
        }
    }
}

int	main(int argc, char **argv)
{
    
    for (int i = 0; i < 6; i++)
    {
        if (i == 6)
            deQueue();
        else
            enQueue(i);
    }
    
    return 0;
}
