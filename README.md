
# PMN

## Semaine de cours sur les algorithmes

## Exercice #1

    programme exercice_1
    	s1: chaine
    	s2: chaine
    	taille_s1: entier
    	taille_s2: entier
    début
			Afficher "Saisissez une première chaine"
			Saisir s1
			Afficher Saissisez une deuxième chaine"
			Saisir s2
			Affecter à taille_s1: taille(s1)
			Affecter à taille_s2: taille(s2)
			si taille_s1 * 2 = taille_s2 alors
			  Afficher "La première chaine est 2 fois plus grande que la deuxième"
			sinon
			  Afficher "La première chaine n'est pas 2 fois plus grande que la deuxième"
			finsi
	fin

## Exercice #2

    programme exercice_2
    	nb: entier
    	somme: entier
    	index: entier
    début
		  Afficher "Entrer un nombre"
		  Saisir nb
		  Affecter à index: 1
		  Affecter à somme: 0
		  tantque index <= nb
			  Affecter à somme: somme + index
			  Affecter à index: index + 1
		  fintantque
		  Afficher "la somme des nombres de 1 à " + str(nb) + " est égale à " + str(somme)
	fin

## Exercice #3

    programme exercice_3
    	tab[0..4]: entier
		nb: entier
		moyenne: entier
		index: entier
		tmp: entier
		somme: entier
    début
		Affecter à index: 0
		Affecter à somme: 0
		Affecter à tmp: 0
		Affecter à moyenne: 0
		Affecter à nb: 0
		tantque index < 5
			Saisir tmp
			si tmp > nb alors
				Affecter à nb: index
			finsi
			Affecter à somme: somme + tmp
			Affecter à tab[index]: tmp
			Affecter à index: index + 1
		fintantque
		Affecter à moyenne: somme / index
		Afficher "l'indice du plus grand élément du tableau est " + str(nb)
		Afficher "la moyenne des entiers du tableau est de " + str(moyenne)
	fin

