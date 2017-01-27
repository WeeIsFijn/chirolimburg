(function () {
  'use strict';

  /* Deze items later uit een db halen zodat 
     dit gemakkelijk aangepast kan worden */ 
  var team             = [],
      uitleenMateriaal = [];

  /* The team */
  team = [
    {
      name:"Wouter Deferme", 
      info: "Inhoud", 
      img:"img/team/wouter.png"
    },
    {
      name:"Mania Caelen",  
      info: "Som", 
      img:"img/team/mania.png"
    },
    {
      name:"Olaf Meert", 
      info: "Som", 
      img:"img/team/olaf.png"
    },
    {
      name:"Anouk Wirix", 
      info: "Voorzitster, Inhoud", 
      img:"img/team/anouk.png"
    },
    {
      name:"Thomas Machiels", 
      info: "Inhoud", 
      img:"img/team/thomas.png"
    },
    {
      name:"Wouter Dupain", 
      info: "Som", 
      img:"img/team/wouterD.png"
    },
    {
      name:"Raf Decabooter", 
      info: "Voorzitter, Inhoud", 
      img:"img/team/raf.png"
    },
    {
      name:"Lot Martens", 
      info: "Som", 
      img:"img/team/lot.png"
    },
    {
      name:"Bartelt Van Meerbeek", 
      info: "Educatief medewerker, Som", 
      img:"img/team/bartelt.png"
    },
    {
      name:"Cathelijne Martens", 
      info: "Inhoud", 
      img:"img/team/cathelijne.png"
    },
    {
      name:"Ester Degreef", 
      info: "Inhoud", 
      img:"img/team/ester.png"
    },
    {
      name:"Frederik Van Hoof", 
      info: "Som", 
      img:"img/team/frederik.png"
    },
    {
      name:"Koen Ombelets", 
      info: "Som", 
      img:"img/team/koen.png"
    },
    {
      name:"Petra Fouriers", 
      info: "Som", 
      img:"img/team/petra.png"
    },
    {
      name:"Sarah Plessers", 
      info: "Educatief medewerker, Inhoud", 
      img:"img/team/Sarah.png"
    }
  ];

  /* Uitleen items */
  uitleenMateriaal = [
    {
      name:"Circuskoffer", 
      waarborg:"€ 25,00", 
      img:"img/uitleen/circuskoffer.png"
    },
    {
      name:"EHBO-koffer", 
      waarborg:"€ 5,00", 
      img:"img/uitleen/ehbokoffer.png"
    },
    {
      name:"Kleine knutselkoffer", 
      waarborg:"€ 5,00", 
      img:"img/uitleen/kleineknutsel.png"
    },
    {
      name:"Grote knutselkoffer", 
      waarborg:"€ 25,00", 
      img:"img/uitleen/groteknutsel.png"
    },
    {
      name:"Spellenkoffer", 
      waarborg:"€ 5,00 per spel", 
      img:"img/uitleen/spellenkoffer.png"
    },
    {
      name:"Sfeervlaggen", 
      waarborg:"€ 10,00 per vlag", 
      img:"img/uitleen/sfeervlaggen.png"
    },
    {
      name:"Baches", 
      waarborg:"€ 10,00 per bache", 
      img:"img/uitleen/bache.png"
    },
    {
      name:"Bibliotheek (vb. Afdelingsboeken, tochttechnieken, spelfiches, ...)", 
      waarborg:"€ 5,00 per boek", 
      img:"img/uitleen/bib.png"
    },
    {
      name:"Badgemachine", 
      waarborg:"enkel te gebruiken op de Vaartstraat", 
      img:"img/uitleen/badgemachine.png"
    },
    {
      name:"Zangboekjes", 
      waarborg:"€ 1,00 per boekje", 
      img:"img/uitleen/zang.png"
    },
    {
      name:"Materiaalkot Kalei", 
      waarborg:"€ 100,00", 
      img:"img/uitleen/kalei.png"
    },
    {
      name:"Grote vergaderzaal", 
      waarborg:"Gratis", 
      img:"img/uitleen/grotezaal.png"
    }
  ];

  $(document).ready(function(){
      addCarouselelements(team);
      addUitleenMateriaal(uitleenMateriaal);
  });

  $('#uitleenButton').click(function(){
    window.location.href = 'https://chiro.be/formulier/promo-en-spelmateriaal-lenen';
  });

  function addCarouselelements(list){
    var teller = 0;

    while( list.length>0 ) {

      var idRow = "carouselRow" + teller;
      var idItem = "carouselItem" + teller;
      var teamMember;

      $('<div id="'+idItem+'" class="item"> <div id="'+idRow+'" class="row">').appendTo('.carousel-inner');

      if( list.length > 2 ) {

        for(var i = 0; i < 3; i++){
          teamMember = list.shift();
          $('<div class="col-sm-4"><div class="team-member"><img src="'+teamMember.img+'" class="img-responsive img-circle" alt=""><h4>'+teamMember.name+'</h4><p class="text-muted">'+teamMember.info+'</p></div></div>').appendTo('#'+idRow);
        }

      }else if( list.length == 2 ) {

        for(var j = 0; j < 2; j++) {
          teamMember = list.shift();
          $('<div class="col-sm-4"><div class="team-member"><img src="'+teamMember.img+'" class="img-responsive img-circle" alt=""><h4>'+teamMember.name+'</h4><p class="text-muted">'+teamMember.info+'</p></div></div>').appendTo('#'+idRow);
        }

      }else if( list.length == 1 ) {

        teamMember = list.shift();
        $('<div class="col-sm-4"><div class="team-member"><img src="'+teamMember.img+'" class="img-responsive img-circle" alt=""><h4>'+teamMember.name+'</h4><p class="text-muted">'+teamMember.info+'</p></div></div>').appendTo('#'+idRow);
      
      }

      $('<div class="carousel-caption"></div>   </div></div>').appendTo('#'+idItem);
      $('<li data-target="#teamCarousel" data-slide-to="'+teller+'"></li>').appendTo('.carousel-indicators');
      
      teller++;
    }

    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');

    // Activate Carousel
    $("#teamCarousel").carousel();

    // Enable Carousel Indicators
    $(".item").click(function(){
        $("#teamCarousel").carousel(1);
    });
  }

  function addUitleenMateriaal(list){
    for(var k = 0; k < list.length; k++) {
      var item = list[k];
      $('<div class="col-sm-4"><div class="uitleen-item"><img src="'+item.img+'" class="img-responsive" alt=""><h4>'+item.name+'</h4><p class="text-muted">Waarborg: '+item.waarborg+'</p></div></div>').appendTo('#uitleenMateriaal');
    }
  }
  
})();