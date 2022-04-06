1.    Non, le diagramme ne respecte pas le principe de responsabilité unique
2.    Les classes ont plusieurs responsabilités comme dans la classe Pokemon ou l’action soigner() est affectée à un pokemon alors que l’action n’est pas réalisée par celui-ci

3.    Oui, Le diagramme respecte le principe Open/Close
4.    On retrouve ce principe dans le diagramme car si un nouveau pokémon ou un nouveau type est ajouté, il n’y a pas de modifications des autres classes 

5.    Oui, Le diagramme respecte le principe de substitution de Liskov
6.    Car les classes Carapuce, Salamèche et Bulbizarre héritent bien de Pokémon et les classes

7.    Non, le diagramme ne respecte pas le principe de ségrégation des interfaces
8.    Car les interfaces sont ici utilisées de manières généraliste (Pokemon et Type) alors qu’il serait possible de les diviser en petites interfaces liées par exemple aux status des pokémon (captif, horsjeu)

9.    Oui, le diagramme respecte le principe d’inversion des dépendances
10.    Car on retrouve bien sur le diagramme les classes Bulbizarre, Salamèche et Carapuce qui dépendent des classes abstraites TypeEau, TypeFeu et TypePlante qui elle-même dépendent de la classe d’interface Type
