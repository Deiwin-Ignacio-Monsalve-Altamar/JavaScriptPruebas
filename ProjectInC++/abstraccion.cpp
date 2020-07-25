#include<iostream>

using namespace std;

class Human
{
public:
    Human(int SpawnAge)
    {
        Age = SpawnAge;
    }
    int Age;

    void Think()
    {
        cout << GetThinkingMessage() << endl;
    }

private:

    int SocialLevel;
    int Inteligence;
    int Luck;

    string GetThinkingMessage()
    {
        if(SocialLevel + Luck > 100)
        {
            return"Estoy teniendo pensamientos felies";
        }
        else if(Luck > Inteligence)
        {
            return"Soy un suertudo";
        }
        else if(Age > 18)
        {
            return"Soy un bb";
        }
        else
        {
            return"no pienso nada";
        }
    }
};


int main()
{
    Human Bob(19);

    Bob.Think();

    return 0;
}