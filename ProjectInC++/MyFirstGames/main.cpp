#include <iostream>
#include "Player.h"
#include "MapCell.h"
#include "GameMap.h"

using namespace std;

// JUGADOR

int main(int argc, char const *argv[])
{
    Player Hero;
    GameMap Map;

    Map.DrawIntro();
    Map.Draw();

    while (Map.isGameOver == false)
    {
        /*Dentro del loop de juego*/
        std::cout << "Introduce el movimiento " << std::endl;
        Hero.CallInput();


        /*Actualizacion de mapa*/
        if (Map.SetPlayer(Hero.x, Hero.y))
        {
            Map.Draw();
        }
        else
        {
            /* Se dibuja el mapa del juego*/
            Hero.ResetToPosition();
            Map.Draw();
        }

    }
    

    return 0;
}
