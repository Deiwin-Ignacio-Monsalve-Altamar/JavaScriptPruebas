#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
/* typedef struct Node {
	int number;
	struct Node * next;
} NODE;

NODE * createNode( int number )
{
	NODE * newNode;

	newNode = malloc( sizeof(NODE) );
	newNode->next = NULL;
	newNode->number = number;

	return newNode;
}

int main( int argc, const char * arg[] )
{
	NODE * start = NULL, * current, *next;
	char goOn;
	int listSize = 0, number;

	do {
		printf( "La lista contiene %d nodos. Ingrese el siguiente numero (0 para finalizar)\n", listSize );
		scanf("%d", &number );
		if ( number ) {
			if ( !start ) {
				start = createNode( number );
				listSize++;
			} else {
				current = start;
				while ( current->next ) {
					current = current->next;
				}
				current->next = createNode( number );
				listSize++;
			}
			goOn = 1;
		} else {
			goOn = 0;
		}
	} while ( goOn );

	current = start;
	printf( "La lista contiene los numeros: \n" );
	while (current) {
		printf( "%d", current->number );
		printf( current->next ? ", " : "\n" );
		current = current->next;
	}
	while (start)
    {
        printf("%d\n", start->number);
        start = start->next;
    }
    
	return 0;
} */
int main( int argc, const char * argv[] )
{
/*     srand(time(NULL));
    printf("%d\n", rand()); */
/* 	time_t oneDay = 24 * 60 * 60, today = time(NULL), nextDate;

	nextDate = today + oneDay * atoi( argv[1] );

	printf( "%s\n", ctime( &nextDate ) );

	return 0; */

    //LEER ARCHIVOS
    /* FILE *fp = fopen(argv[1], "r");
    char c;

    while ((c = fgetc(fp)) != EOF)
    {
        printf("%c", c);
    }
    fclose(fp);
    return 0; */


    //WRITE EN CARCHIVO CREADO
    FILE * out;
	char buffer[100];

	if ( !( out = fopen( argv[1], "w" ) ) ) {
		printf( "No puedo escribir el archivo %s\n", argv[1] );

		return -1;
	}

	do {
		printf("Ingrese una palabra:" );
		scanf("%99s", buffer);
		fputs( buffer, out );
		fputs("\n", out);
		printf("Grabada! Otra? (s/n)" );
		scanf("%1s", buffer);
	} while ( buffer[0] != 'n' );

	fclose( out );

	return 0;

}

