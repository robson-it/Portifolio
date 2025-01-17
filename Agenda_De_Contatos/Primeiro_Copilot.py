"""Crie uma lista com 10 números inteiros desordenados, imprima essa lista na tela. Crie uma função quicksort para ordenar essa lista e depois imprima a lista ordenada."""
"""
Ordena uma lista de números inteiros usando o algoritmo Quicksort.
Parâmetros:
lista (list): Lista de números inteiros a ser ordenada.
Retorna:
list: Lista de números inteiros ordenada em ordem crescente.
"""

# Importando a biblioteca random
import random

# Função para ordenar a lista
def quicksort(lista):
    if len(lista) <= 1:
        return lista
    else:
        pivo = lista[0]
        menores = [i for i in lista[1:] if i <= pivo]
        maiores = [i for i in lista[1:] if i > pivo]

        return quicksort(menores) + [pivo] + quicksort(maiores)
    
# Lista com 10 números inteiros desordenados
lista = random.sample(range(1, 100), 10)

# Imprimindo a lista desordenada
print("Lista desordenada: ", lista)

# Imprimindo a lista ordenada
print("Lista ordenada: ", quicksort(lista))

# Fim do código


"""Crie uma função que gere todas as sequências de 15 números possíveis utilizando números de 1 a 80"""

# Função para gerar todas as sequências de 15 números possíveis

def sequencias():
    sequencias = []
    for i in range(1, 81):
            for k in range(j+1, 81):
                for l in range(k+1, 81):
                    for m in range(l+1, 81):
                        for n in range(m+1, 81):
                            for o in range(n+1, 81):
                                for p in range(o+1, 81):
                                    for q in range(p+1, 81):
                                        for r in range(q+1, 81):
                                            for s in range(r+1, 81):
                                                for t in range(s+1, 81):
                                                    for u in range(t+1, 81):
                                                        for v in range(u+1, 81):
                                                            for w in range(v+1, 81):
        for j in range(i+1, 81):
                                                                sequencias.append([i, j, k, l, m, n, o, p, q, r, s, t, u, v, w])
    return sequencias


print(sequencias())

