#include "GameMap.h"
#include <iostream>
#include <fstream>

using namespace std;
GameMap::GameMap()
{
    PlayerCell = NULL;
    LoadMapFile();
    isGameOver = false;
}
void GameMap::DrawIntro()
{
    string line;
    ifstream MyFile("Intro.txt");
    if (MyFile.is_open())
    {
        while (getline(MyFile, line ))
        {
            std::cout << line << std::endl;
        }
        cin >>line;
    }
    else
    {
        cout << "FATAL ERROR: MAP FILE INTRO" << endl;
    }
}

void GameMap::DrawVictory()
{
    string line;
    ifstream MyFile("Victory.txt");
    if (MyFile.is_open())
    {
        while (getline(MyFile, line ))
        {
            std::cout << line << std::endl;
        }
        cin >>line;
    }
    else
    {
        cout << "FATAL ERROR: MAP FILE VICTORY  " << endl;
    }
}

void GameMap::Draw()
{
    for (int i = 0; i < 15; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            cout << cells[i][j].id;
        }
        cout << endl;   
    }
    
}

bool GameMap::SetPlayer(int PlayerX, int PlayerY)
{

    if(cells[PlayerY][PlayerX].IsBlocked() == false)
    {   
        if (cells[PlayerY][PlayerX].id == '$')
        {
            DrawVictory();
            isGameOver = true;
            return true;
        }
        else
        {
            if (PlayerCell != NULL)
            {
                PlayerCell->id = 0;
            }
            PlayerCell = &cells[PlayerY][PlayerX];
            PlayerCell->id = '3';
            //std::cout << PlayerX << PlayerY << std::endl;
        }
        return true;
        
    }
    else
    {
        return false;
    }
    
}

void GameMap::LoadMapFile()
{
    //CREANDO ARCHIVO DEL MAPA
/*     ofstream FileCreated("Map.txt");
    if (FileCreated.is_open())
    {

    }
    else
    {
        std::cout << "FATAL ERROR: MAP FILE COULD" << std::endl;
    } */
    

    string line;

    ifstream MyFile("Map.txt");

    int row = 0;
    if (MyFile.is_open())
    {
        while (getline(MyFile, line ))
        {
            for (int i = 0; i < line.length(); i++)
            {
                /* code */
                if (line[i] = '0')
                {
                    cells[row][i].id = 0;
                }
                else
                {
                    cells[row][i].id = line[i];
                }
            }
            
            /* code */
            row++;
        }
    }
    else
    {
        cout << "FATAL ERROR: MAP FILE COULD" << endl;
    }
    
}