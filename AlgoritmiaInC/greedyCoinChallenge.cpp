#include <iostream>
#include <climits>

using namespace std;

int greedyChange(int coinSet[], int n, int N)
{
    if (N == 0)
        return 0;
    if (N < 0)
        return INT_MAX;
    
    int coins = INT_MAX;
/*Se recorre todo el set de monedas*/
    for (int i = 0; i < n; i++)
    {
        int resultado = greedyChange(coinSet, n, N - coinSet[i]);
        if (resultado != INT_MAX)
            coins = min(coins, resultado+1);
    }
    return coins;
}

int	main(int argc, char **argv)
{
    int coinSet[] = {1,5,10,15,20};
    int n = sizeof(coinSet) / sizeof(coinSet[0]);

    int N = 27;


    std::cout << "El minimo de monedas es" << greedyChange(coinSet, n, N) <<std::endl;
    return 0;
}
