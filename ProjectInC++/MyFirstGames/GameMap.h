#ifndef __GAMEMAP__H__
#define __GAMEMAP__H__
#include "MapCell.h"

class GameMap
{
    public:
        GameMap();

        MapCell *PlayerCell;
        MapCell cells [15][10];

        void DrawIntro();
        void DrawVictory();
        void Draw();

        /*Esta funcion obtine cordenadas y actuliza el mapa creado*/
        bool SetPlayer(int PlayerX, int PlayerY);
        bool isGameOver = false;
    protected:
        void LoadMapFile();
    private:

};
#endif