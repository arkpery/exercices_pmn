# PMN

## Semaine de cours sur les algorithmes

## Les bases

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
			si taille_s1 = taille_s2 * 2 alors
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


## Les classes

## Exercice #1


    /** 
	    name: chaine
	    weight: réel
	    tusksSize: réel
	**/
    class Hippopotame(name, weight, tusksSize) 
	debut
		fonction swim()
		debut
			Affecter à this.weight: this.weight - 0.3
		fin
		
		fonction eat()
		debut
			Affecter à this.weight: this.weight + 1.0
		fin
		
		/**
		  si fight, retourne vrai alors, l'hippopotame
		  "this" a gagné.
		 **/
		fonction fight(enemy: Hippopotame)
		debut
			retourner (this.tusksSize > enemy.tusksSize)
		fin

		fonction str()
		debut
			retourner "Name: " + str(this.name) + ", weight: " + str(this.weight) + ", tusksSize: " + str(this.tusksSize) + "."
		fin

		fonction timestamp_run()
		debut
			Affecter d1: Date.now()
			Affecter d2: d1
			Affecter d3: d2
		    tant que ((d2 - d1) < (3600 * 24 * 7 * 3))
				si (d2 - d3) >= 0 et (d2 - d3) < (3600 * 15) alors
					si (((d2 - d1) % 3600) = 0)) alors
						this.eat()
						this.eat()
						this.swim()
						this.swim()
						this.swim()
					finsi
				sinon si (d2 - d3) >= (3600 * 24) alors
					Affecter à d3: Date.now()
				sinon si ((d2 - d3) / 3600) = 19 alors
					Afficher this.str()
				finsi
				Affecter à d2: Date.now()
			fintantque
		fin
	
		fonction run()
		debut
			/* 1 fois par semaine, x3 */
			pour i de 1 à 3
			   /* 1 fois par jour, x7 */
				pour j de 1 à 7 
					/* 1 fois par heure, x15 */
					pour k de 1 à 15 de 
						this.eat()
						this.eat()
						this.swim()
						this.swim()
						this.swim()
					finpour
				finpour
			finpour
		fin
	fin
	
    programme exercice_1
    	h1: Hippopotame
    	h2: Hippopotame
    début
		Affecter à h1: Hippopotame("H1", 34.7, 12.3)
		Affecter à h2: Hippopotame("H2", 28.7, 10.3)
	
		si h1.fight(h2) alors
			Afficher "L'hippopotame " + h1.name + " a gagné."
		sinon
			Afficher "L'hippopotame " + h2.name + " a gagné."
		finsi
		h1.run()
	fin

## Exercice #2

    /** 
	    x: entier
	    y: entier
	**/
    class Point(private x, private y) 
	debut
		fonction getX()
		debut
			retourner this.x
		fin

		fonction getY()
		debut
			retourner this.y
		fin
	
		fonction setX(x)
		debut
			Affecter à this.x:x
		fin
	
		fonction setY(y)
		debut
			Affecter à this.y:y
		fin

		fonction str()
		debut
			retourner "(" + str(this.x) + "," + str(this.y) + ")"
		fin
	fin

    programme exercice_2
    	p1: Point
    début
		Affecter à p1: Point(3, 4)
		Afficher p1.str()
		p1.setX(10)
		Afficher p1.str()
	fin

## Exercice #3

    /** 
	    point: Point
	    radius: entier
	**/
    class Circle(point, radius) 
	debut
		
		fonction area()
		debut
			retourner π * (radius * radius)
		fin	
	
		fonction containsPoint(p)
		debut
			Affecter à diffX: point.getX() - p.getX()
			Affecter à diffY: point.getY() - p.getY()
			Affecter à longueur: sqrt((diffX * diffX) + (diffY * diffY))
			si longueur <= this.radius et longueur >= 0 alors
				retourner Vrai
			finsi
			retourner Faux
		fin

		fonction str()
		debut
			retourner "(Centre:" + this.point.str() + ", rayon" + str(this.radius) + ")"
		fin
	fin

    programme exercice_3
    	p1: Point
    	p2: Point
    	c1: Circle
    début
		Affecter à p1: Point(2, 3)
		Afficher p1.str()
		p1.setX(3)
		Afficher p1.str()
		Affecter à c1: Cercle(p1, 3)
		Affecter à p2: Point(4, 4)
		si c1.containsPoint(p2) alors
			Afficher "p2 est dans c1"
		sinon
			Afficher "p2 n'est pas dans c1"
		finsi
		Afficher "l'aire de c1 est de " + str(c1.area()) + "."
		Afficher c1.str()
	fin
	
		
## JavaScript

Initialiser le projet avec Docker:

	docker run -ti --rm -v "$PWD":/app -w /app node:latest npm init

Installer scanf avec Docker:

	docker run -ti --rm -v "$PWD":/app -w /app node:latest npm install scanf

Lancer un service Node.js:

	docker run -ti --rm -v "$PWD":/app -w /app node:latest node index.js

