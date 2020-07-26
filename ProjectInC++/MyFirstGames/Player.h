#ifndef __PLAYER__H__
#define __PLAYER__H__

class Player
{
    public:
        Player();

        void CallInput();
        void ResetToPosition();
    
        int x, y;
        int Lastx, Lasty;
    protected:
    private:
    
};

#endif //Player