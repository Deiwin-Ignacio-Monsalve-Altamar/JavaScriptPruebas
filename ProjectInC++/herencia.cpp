#include <iostream>

using namespace std;

class Person
{
public:
    int mana, hp, power;

    Person(int iMana, int HP, int iPower)
    {
        mana = iMana;
        hp = HP;
        power = iPower;
    }
    void Algo()
    {
        std::cout << "Fireworks!! " << power << std::endl;
    }
};

class IcePersona : public Person
{
public:
    IcePersona(int iMana, int HP, int iPower) : Person(iMana, HP, iPower)
    {
        mana = iMana;
        hp = HP;
        power = iPower + 10;
    }
};
int	main()
{
    Person Dei(100, 10, 30);
    IcePersona tut(100, 20, 30);

    Dei.Algo();
    tut.Algo();
    return 0;
}
