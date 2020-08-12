#!/usr/bin/python3
import sys
import datetime 
def selectionSort(array):
    
    for i in range(len(array)-1): #recorrer todo el array, no me imprimiria un recorrido de mas, ya que hasta ahi se encuentra ordenado 
        
        # encontrar el valor minimo restante dentro del array desordenado
        idxdes = i  # estamos comenzando en 0
        for j in range(i + 1, len(array)):
            if array[idxdes] > array[j]: # se confirma que va a ser el minimo
                idxdes = j
        
        # ya que encontramos el minimo elemento lo vamos a 
        # cambiar por el primer valor de nuestro array desordenado 
        array[i], array[idxdes] = array[idxdes], array[i]
   
    
if __name__ == '__main__':
    tiempoInicial = datetime.now()
    array = [20, 5, 21, 6, 23, 7, 34, 999, 68, 56, 348, 1, 90]
    print('')
    selectionSort(array)
    print('')
    print(datetime.now() - tiempoInicial)