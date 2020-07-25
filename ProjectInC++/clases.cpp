#include <iostream>

using namespace std;

class Cat
{
    public:
        string name;
        Cat()
        {
            name = "Guapo";
        }

        Cat(string iname)
        {
            name = iname;
        }
        void Meow()
        {
            std::cout << name << " dice meow" << std::endl;
        }

};

int	main(int argc, char **argv)
{
    Cat myfirst;
    Cat secod("totorie");
    std::cout << myfirst.name << std::endl;
    std::cout << secod.name << std::endl;

    myfirst.Meow();

    for (size_t i = 0; i < 3; i++)
    {
        secod.Meow();
    }
    
    return 0;
}
