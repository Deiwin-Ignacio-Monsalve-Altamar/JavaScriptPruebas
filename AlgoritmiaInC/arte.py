#!/usr/bin/python3

import turtle

myTurtle = turtle.Turtle()
myWin = turtle.Screen()

def draw(myTurtle, lenght):
    if lenght > 0:
        myTurtle.forward(lenght)
        myTurtle.left(53)
        draw(myTurtle, lenght - 2)

draw(myTurtle, 100)
myWin.exitonclick()

    