/*
J'utilise jquery, qui est une bibliothèque de fonction javascrispt qui permet de manipuler 
le document plus facilement. Elle fonctionne via une fonction unique qui s'appelle $,
ce qui permet une écriture plus succinte.
Notament il permet de selectionner les éléments html en utilisant une syntaxe proche du 
css par exemple:
$("#menunav") est équivalent au code javascript: document.getElementById ("menunav")
*/

/* On appelle la fonction $ sur l'objet document qui est une variable globale qui "ajoute"
des fonctions supplémentaires à document comme la fonction ready qui prend en argument une
fonction qui sera exécuté quand le document sera totalement "prêt" c'est a peut près équivalent
à déclarer une fonction onload sur la balise html body.
La fonction appelée va permettre de faire disparaître le menu. En appelant des fonction css comme:
display ou block */  
$(document).ready(() => {
    $("#bout_cache_menu").on("click", () => {
        $("#menunav").css("display", "none")
        $("#bout_montre_menu").css("display", "block")       
    });
    $("#bout_montre_menu").on("click", () => {
        $("#menunav").css("display", "block")
        $("#bout_montre_menu").css("display", "none")
    })
/* Ensuite nous appelons la fonction changeTheme qui, lorsque le document est prêt et que le bouton est
pressé le document change de theme, les themes dark et light sont définient dans le css,*/
    $("#change_theme").on("click", () => {
        changeTheme(document.documentElement)
    });

    $(document.documentElement).addClass("theme-dark");
})
/* la fonction changeTheme va changer le theme de,la page en faisant appel au css, mais aussi en changeant
le texte présent dans le bouton, il va varié selon le theme utiliser. */
function changeTheme(docElement) {
    if ($(docElement).hasClass("theme-dark")) {
        $("#change_theme").text("mode sombre")
        $(docElement).removeClass("theme-dark").addClass("theme-light")
    } else {
        $("#change_theme").text("mode clair")
        $(docElement).removeClass("theme-light").addClass("theme-dark")
    }
}
/* PROBLEME: Lorsque que nous changeront de page sur le site, le site oublie de garder le thème utilisé
Sur la page précédente, et utilise le thème initial, le thème dark. Je ne sais pas résoudre le problème. */ 


