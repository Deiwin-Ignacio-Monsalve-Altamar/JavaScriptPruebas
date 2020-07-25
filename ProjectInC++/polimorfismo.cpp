#include <iostream>

using namespace std;

class Person
{
public:
    Person(int BasePower, int BaseHp)
    {
        power = BasePower;
        hp = BaseHp;
    }

    float Damage()
    {
        return power;
    }
    void GetDamage(int Value)
    {
        hp -= Value;
        std::cout << "A mi persona le queda: " << hp << std::endl;
    }

protected:
    int power, hp;
};

class IcePerson: public Person
{
public:
    IcePerson(int BasePower, int BaseHp) : Person(BasePower, BaseHp)
    {
        power = BasePower + 1;
        hp = BaseHp;
    }
};

class FirePerson: public Person
{
public:
    FirePerson(int BasePower, int BaseHp) : Person(BasePower, BaseHp)
    {
        power = BasePower;
        hp = BaseHp + 10;
    }
};

int	main(int argc, char **argv)
{
    Person *Current;
    FirePerson Candal(10, 10);
    IcePerson Dodor(10, 10);
    
    Current = &Candal;
    Current->GetDamage(1);
    
    Current = &Dodor;
    Current->GetDamage(5);
    return 0;
}
