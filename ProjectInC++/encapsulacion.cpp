#include <iostream>

using namespace std;

class Dog
{
public:
    
    Dog(string name, string ladrido)
    {
        mName = name;
        nLadrido = ladrido;
    }
    string GetName()
    {
        return mName;
    }

    void SetName(string NewName)
    {
        mName = NewName;
    }

    void Ladrar()
    {
        std::cout << nLadrido << std::endl;
    }
private:
    string mName;
    string nLadrido;
};

int	main(int argc, char **argv)
{
    
    Dog perrouno("kick", "beck");
    perrouno.SetName("Ferro");

    Dog perror("Sense", "tueryr");

    std::cout << perrouno.GetName() << std::endl;
    std::cout << perror.GetName() << std::endl;

    perrouno.Ladrar();
    perror.Ladrar();
    return 0;
}
