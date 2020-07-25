#include <iostream>

using namespace std;

int	main()
{
/*     string Names[5] = {"Aterix","oberi","cajar","tutu","asdads"};
    for (int i = 0; i < 5; i++)
    {
        std::cout << Names[i] << std::endl;
    }   
 */int ids[5][3] = {
     {0, 0, 0},
     {0, 0, 0},
     {0, 0, 0},
     {0, 0, 0},
     {0, 0, 0}
 };
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << ids[i][j];
        }
        cout << endl;
    }  
    return 0;
}
