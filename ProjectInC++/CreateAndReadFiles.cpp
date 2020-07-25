#include <iostream>
#include <fstream>

using namespace std;

int	main()
{
    /* ofstream fp("game.txt");
    string namePlayer = " "; 

    if (fp.is_open())
    {
        fp << "Hola gente " << endl;
        fp << "mi nombre es: " << endl;
        std::cout << "Introduce tu nombre de tu heroe" << std::endl;
        cin >>namePlayer;
        fp << namePlayer << endl;
    }
    fp.close();
 */
    ifstream file("game.txt");
    string line;
    string nameHero = "";
    int renglon = 0;

    if (file.is_open())
    {
        while (getline(file, line))
        {
            renglon += 1;
            if (renglon == 3)
            {
                nameHero = line;
            }
        }
    }
    else
    {
        std::cout << "No logre abrir tu archivo" << std::endl;
    }
    cout << "Bienvenida a tu aventura: ";
    std::cout << nameHero << std::endl;
    
    return 0;
}
