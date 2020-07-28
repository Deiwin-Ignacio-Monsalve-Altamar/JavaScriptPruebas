#!/usr/bin/python3

"""Comenzar a hacer comparaciones adyacentes
    Repetir hasta tener una pasada completa sin nigun swap
"""

def bubbleSort(array):
    n = len(array)
    
    for i in range(n):
        print(array)
        change = True
        for j in range(0, n- i - 1):
            if array[j] > array[j+1]:
                change = False
                array[j], array[j+1] = array[j+1], array[j]
        if change:
            break

array = [1900, 908, 37,-4, 0, 5, 764, 8]
bubbleSort(array)

print("El arreglo ordenado")
print(array)