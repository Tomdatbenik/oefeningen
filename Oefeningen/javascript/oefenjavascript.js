/*De functie die wordt aangeroepen in het element:
<li><button type="button" id="tab1" class="form-control" onclick="tab2_click();">tab2</button></li>
staat hieronder:*/

function tab1_click(e) {
    // als je een value wilt zien kan je deze naar de console schrijven door middel van "console.log(value)" 
    // dit hoeft niet perse afgesloten te worden met ;
    console.log("tab1.html");
    //om dit te zien gebruik element inspecteren dan console.

    // in javascript is het heel onhandig om een anderen pagina's in te laden in een html element
    // IK RAAD JE AAN OM JQUERY TE GEBRUIKEN
    // dit wordt niet uitgelegd aangezien dit verwarrend is
    (e || window.event).preventDefault();
    var con = document.getElementById('inhoud')
        , xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            con.innerHTML = xhr.responseText;
        }
    }

    xhr.open("GET", "tab1.html", true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
}



//het script voor de knop kleuren. als u tab1.html nog niet heeft ingezien zie eerst tab1.html


function changecoloronId(color) {
    //De color en het id van de button zijn het zelfde hierdoor kan ik met 1 parameter de kleur en het element aanroepen.
    var buttonname = color;
    //deze var heet buttenname voor duidelijkheid.
    //in getElementById kan je ook variable/strings mee sturen waar de waarde het id is van een button.

    //een element kan ook in een variable gestopt worden:
    var button = document.getElementById(buttonname);

    // hier zal de style (css) aangepast van de var button (de knop in de html)
    button.style.backgroundColor = color;

}

function changecolorOnColor(color) {
    //De color en het name van de button zijn het zelfde hierdoor kan ik met 1 parameter de kleur en het element aanroepen
    var buttonname = color; //in GetElementsByName kan je ook variable/strings mee sturen waar de waarde de name is van een button

    //een element kan ook in een variable gestopt worden:
    var button = document.getElementsByName(buttonname);
    //het verschil is getelement-S by name dit pakt niet 1 maar meerderen html elements. je kunt defenineren welke je wilt doormiddel van "button[getal]"
    console.log(button[0]);

    //hier zal de style (css) aangepast van de var button (de knop in de html)
    //ELK html element kan ".style" gebruiken. ".style" heeft alles wat gedaan zou kunnen worden in css.
    button[0].style.backgroundColor = color;
}