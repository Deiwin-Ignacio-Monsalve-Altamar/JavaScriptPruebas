#include <stdio.h>

/**Cambiar posicion*/
void cambiarPosicion(int *n1 , int *n2 )
{
    /*Ayudar a almacenar mientras hacemos el cambio*/
    int temporal = *n1;
    /*Numero menor va a hacer el primero*/
    *n1 = *n2;
    /*El mayor va hacer el segundo*/
    *n2 = temporal;
}

/*Logica de ordenamaiento*/
void bubbleSort(int vectorEntrada[], int n)
{
	/*condicion para comenzar en la posicion anterior*/
	for (int i = 0; i < n - 1; i++)
	{
		/*Comparando el actual con el siguiente*/
		for(int j = 0; j < n - i - 1; j++)
		{
			if(vectorEntrada[j] > vectorEntrada[j + 1 ])
			{
				cambiarPosicion(&vectorEntrada[j], &vectorEntrada[j + 1]);
			}
		}
	}
}

/*Imprimir la lista organizada*/
int printarray(int vectorEntrada[],int n)
{
	for(int i = 0; i < n; i++)
	{
		/*No imprimir comma*/
		if (i == (n -1))
			printf("%d\n",vectorEntrada[i]);
		else
			printf("%d  ,",vectorEntrada[i]);
	}
	printf("Fin del ordenamiento\n");
}

int main()
{
	int vectorEntrada[] = {100, 90, 60, 0, -1, 14, 83, 89, 96, 5};
    
	/*Saber el total de datos de nuestro array*/
	int n = sizeof(vectorEntrada) / sizeof(vectorEntrada[0]);

	/*Metodo para el ordenamiento*/
	bubbleSort(vectorEntrada,n);
	printarray(vectorEntrada,n);
	return 0;
}