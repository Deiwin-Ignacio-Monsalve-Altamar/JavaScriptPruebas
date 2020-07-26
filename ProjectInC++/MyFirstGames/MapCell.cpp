#include "MapCell.h"
#include <iostream>

MapCell::MapCell()
{
    id = 0;
}

bool MapCell::IsBlocked()
{
    if (id == '1')
    {
        return true;
    }
    return false;
}
