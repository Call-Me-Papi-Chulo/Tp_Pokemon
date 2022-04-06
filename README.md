1.    Non, le diagramme ne respecte pas le principe de responsabilité unique
2.    Les classes ont plusieurs responsabilités comme dans la classe Pokemon ou l’action soigner() est affectée à un pokemon alors que l’action n’est pas réalisée par celui-ci

3.    Non, le diagramme ne respecte pas le principe Open/Close
4.    On ne retrouve pas ce principe dans le diagramme car si un pokémon attaque un autre il faudrait modifier la fonction attaquer() en vérifiant le type de la cible. Donc en cas d’ajout de type cela viendras modifier les classes Bulbizarre, Salamèche et Carapuce.

5.    Non, le diagramme ne respecte pas le principe de substitution de Liskov
6.    Car en cas d’ajout de Type les classes Carapuce, Salamèche et Bulbizarre seront altérés

7.    Non, le diagramme ne respecte pas le principe de ségrégation des interfaces
8.    Car les interfaces sont ici utilisées de manières généraliste (Pokemon et Type) alors qu’il serait possible de les diviser en petites interfaces liées par exemple aux status des pokémon (captif, horsjeu)

9.    Oui, le diagramme respecte le principe d’inversion des dépendances
10.    Car on retrouve bien sur le diagramme les classes Bulbizarre, Salamèche et Carapuce qui dépendent des classes abstraites TypeEau, TypeFeu et TypePlante qui elle-même dépendent de la classe d’interface Type
