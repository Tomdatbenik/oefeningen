/*
JQuery is geschreven in javascript alleen maar jquery heeft functies gemaakt om javascript (makkelijker) te maken.
in jquery kan javascript gebruikt worden

In jquery moeten de events eerst ingeladen worden voordat ze gebruikt kunnen worden
dit kan op 2 manieren

manier 1:

$(document).ready(function () {

});


manier 2:

(function ()
{

});


Beide manieren laden de events zodra de pagina (document) klaar is met laden. 
Manier 1 is netter.
*/


$(document).ready(function () {




    /*De functie die wordt aangeroepen in het element:
    <li><button type="button" id="tab1" class="form-control">tab1</button></li>
    staat hieronder:*/


    // De code "$("#tab1")" is het zelfde als "document.getElementById("tab1")".
    // $("#tab1") = jquery
    // document.getElementById("tab1") = javascript

    $("#tab2").click(function () {
        /* Jquery is zeer fijn om een pagina te laden op een html element.
        De javascript code om dit te doen was 11 lijnen code.
        dit is de Jquery code in 1 lijn: */

        //eerst roep ik de div inhoud op met $("#inhoud") daarna voer ik de jquery functie load uit met de pagina als parameter.
        $("#inhoud").load("tab2.html");

        //dat was het. veel makkelijker dan javascript.



    });


    //Hier zijn de functies van de uitleg knoppen:







    /*
    $("#knop1") zal het html element met id "knop1" pakken.
    zie hieronder hoe de achtergrond van deze knop groen wordt gemaakt met een .click
    .click is een functie!! met een normale functie zou je een parameter doorsturen tussen de (), 
    maar in jquery events word hier uitgevoerd wat er tussen de () staat.
    Hieronder in de knop1.click staat de functie hier zou je wel een parameter mee kunnen geven tussen de ().
    Dat zal hier niet worden gedaan.
    */




    //Hier zorg ik ervoor dat jquery het element pakt by id: "$("#knop1")""

    $("#knop1").click(function () {
        //Als u niet bekend bent met "this" dat betekend dat je het object/class aanroept waarin je werkt.
        //Hier is "this" knop1 zie voorbeeld hieronder:
        var knop1 = this;

        /*
        Uit knop1 kan zijn value worden gahaald zijn value was de kleur waar hij naar veranderd.
        Zijn value halen we op door de functie .value <-- dat is javascript
        ALS je de value van een input wilt halen gebruik je .val(); 
        */

        var kleur = knop1.value;

        //Nu dat we de kleur uit de value hebben gehaald kan de achtergrond kleur veranderd worden.
        //In javascript zou dit met .style gedaan worden. in jquery gebruik je .css.
        //Als je iets wilt aanpassen moet je het weer aanroepen doormiddel van $().

        $(knop1).css("background-color", kleur);

        /*
        Hier werd de .css functie uitgevoerd.
        De eerste parameter in deze functie is wat je aan wilt passen dit is het zelfde als in css
        als je dus de color wilt aanpassen zou de functie er zou uitzien: "css.(color,"gewensde kleur");"
        de achtergrond kleur van knop1 zal nu veranderd worden door op de knop te klikken.
        */

    });


    // Jquery kan elementen ook pakken by name.
    // Je kan jquery verschillenden eisen meesture die de naam van het element moet hebben,
    // hier zijn verschillenden manieren voor (hier word het element button gebruikt):

    // $('button[name=knop]') // matches exactly 'knop'

    // $('button[name^=knop]') // matches those that begin with 'knop'

    // $('button[name$=knop]') // matches those that end with 'knop'

    // $('button[name*=knop]') // matches those that contain 'knop'


    //Dit kan ook met anderen element

    //$('p[name=paragraaf]') // matches exactly 'knop'



    // 2 knoppen hebben de naam gekregen knopjekleur
    // Deze pakken we dus via de code hierboven 
    // Zelfde geld voor het .click event

    $('button[name=knopjekleur').click(function () {
        //In deze functie doen we het zelfde als in de vorige functie.
        var knop1 = this;
        var kleur = knop1.value;
        $(knop1).css("background-color", kleur);

    });

    // Jquery kan elementen ook pakken by class.
    //dit word gedaan door de volgende code:

    $(".blue").click(function () {
        // "this" hoeft niet perse in een variable gestop te worden
        var kleur = this.value;
        $(this).css("background-color", kleur);
    });

    //inplaats van # zet je een . neer om het element te pakken by class


});