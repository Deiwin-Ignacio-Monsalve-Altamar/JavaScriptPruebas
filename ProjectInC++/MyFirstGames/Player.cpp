#include "Player.h"
#include <iostream>

using namespace std;
/*Llma los valores en la cabecera*/
Player::Player()
{
    x = 1;
    y = 1;   
}

void Player::CallInput()
{
    char UserInput = ' ';

    cin >> UserInput;

    /*Movimiento del JUgador*/
    switch (UserInput)
    {
        case 'w':
            Lasty = y;
            y -= 1;
            break;
        
        case 's':
            Lasty = y;
            y += 1;
            break;
        
        case 'a':
            Lastx = x;
            x -= 1;
            break;
        
        case 'd':
            Lastx = x;
            x += 1;
            break;
        
        default:
            break;
    }

}

void Player::ResetToPosition()
{
    x = Lastx;
    y = Lasty;
}