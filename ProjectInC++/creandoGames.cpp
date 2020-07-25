#include <iostream>
#include <fstream>

using namespace std;


void save(int col, int row, int position)
{
    fstream fp("newGame.txt"); 

    if (fp.is_open())
    {
        fp <<"Columas:";
        fp << col;
        fp <<"Filas:";
        fp << row;
        fp <<"Positions:";
        fp << position;
    }
    fp.close();
}

void DrawMap(int heroPx, int heropy, string map[r][c])
{
    /*Mapa del jugador*/
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            if (i != heropy)
            {
                cout << map[j][i];
            }
            else
            {
                if (j != heroPx)
                {

                    cout << map[j][i];
                }
                else
                {
                    cout << "*";
                    /* code */
                }
                
            }
        }
        cout << endl;
    }

}
int main(int argc, const char** argv) {
    
    int options, col, row, position;
    cout << "******************" << endl;
    cout << "*****WELCOME******" << endl;
    cout << "******************" << endl;
    cout << "*****1. LOAD******" << endl;
    cout << "****2. NEW GAME***" << endl;
    cout << "******************" << endl;

    cin >>options;

    if (options == 1)
    {
        cout << "Cuantas columnas del mapa deseas: ";
        cin >>col;
        cout << "Cuantas filas del mapa deseas: ";
        cin >>row;
        cout << "En donde desea comenzar 1. inico, 2. centro, 3. fin";
        cin >>position;
        save(col, row, position);
    }
    else
    {
        col = 6, row = 5, position = 0; 
    }


    int heroPx = 0, heroPy = 0;
    char input = ' ';
    bool gameOver = true;
    string map[row][col];

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; i++)
        {
            map[i][j] = '#';
        }
        
    }
    

    while (gameOver == true)
    {
        cin >>input;
        if (input == 'd'){
            heroPx += 1;
        }
        else if (input == 'a')
        {
            heroPx = heroPx - 1;
        }
        else if (input == 'w')
        {
            heroPy -= 1;
        }
        else if (input == 's')
        {
            heroPy += 1;
        }
        else if (input == 'p')
        {
            gameOver = false;
        }
        else
        {
            std::cout << "Comando no valido!" << std::endl;
            exit(98);
        }
        /*Posicion del mapa*/
        DrawMap(heroPx, heroPy, map[row][col]);
    }
    
    return 0;
}