/*var filename = 'https://apex.oracle.com/pls/apex/pierrealli/hr/employees/';
var callData = function() {
  $.ajax({
    type: 'GET',
    url: filename,
    dataType: 'json',
    success: function(pData) {
      for (var i = 0; i < pData.items.length; i++) {
        console.log(pData.items[0].ename);
      }
    }
  });
}

$(document).ready(function(){
  var callData_1 = callData();
  console.log(callData_1);

});*/

//Data Module
var categories = {};
categories["programmierung"] = {
  title: 'Programmierung',
  image: '/images/programmierung.jpg',
  subtitle: 'test',
  count: 6
};
categories["audiovideo"] = {
  title: 'Video & Audio',
  image: '/images/audiovideo.jpg',
  subtitle: '',
  count: 1
};
categories["foto"] = {
  title: 'Bildbearbeitung & Fotografie',
  image: '/images/foto.jpg',
  subtitle: '',
  count: 1
};
categories["business"] = {
  title: 'Business',
  image: '/images/business.jpg',
  subtitle: '',
  count: 1
};

var trainingArray = [{
    title: 'ASP.NET MVC',
    subtitle: 'Ein einfacher Einstieg',
    image: '/images/700_asp_net_mvc.jpg',
    trainer: 'Christian Wenz',
    price: 19.95,
    description: 'Mit MVC setzt Microsoft auf einen Architekturansatz, der eine Trennung von Ansichten, ' +
      'Logik und Daten geradezu erzwingt. Leider erkauft man sich dies zum Preis einer höheren ' +
      'Einstiegshürde sowie einer gestiegenen Komplexität. Doch die Angst vor ASP.NET MVC ist unbegründet. ' +
      'Sie erhalten eine didaktische Einführung in die Technologie, ohne erhobenen Architekten-Zeigefinger ' +
      'und ohne unnötige Komplexität, aber trotzdem anspruchsvoll.',
    category: categories["programmierung"],
    trailer: '/video/700_trailer_youtube_1280x720.mp4'
  },
  {
    title: 'JavaScript - Crashkurs für .NET-Entwickler',
    subtitle: 'Der praktische Einstieg',
    image: '/images/javascript.jpg',
    trainer: 'Ralph Steyer',
    price: 24.95,
    description: 'Die universelle Scriptsprache JavaScript wird immer mächtiger und erfährt nicht zuletzt durch den Boom von Rich Internet Applications (RIA) erhöhten Zuspruch. Mehr und mehr müssen sich auch erfahrene, professionelle Programmierer damit beschäftigen. Für .NET-Entwickler, die bereits fit in C# und/oder Visual Basic sind, bietet Ralph Steyer in diesem Video-Training eine praktische "Umschulung".',
    category: categories["programmierung"],
    trailer: '/video/822_trailer_youtube_1280x720.mp4'
  },
  {
    title: 'Visio 2010 Programmierung',
    subtitle: 'Das ShapeSheet || Visio mit VBA automatisieren',
    image: '/images/529_visio_programmierung.jpg',
    trainer: 'René Martin',
    price: 39.95,
    description: 'Dieses Video-Training zeigt, wie Sie mit dem ShapeSheet arbeiten – einer tabellenartigen Datenstruktur, die mit jedem Shape verbunden ist. Im zweiten Schritt lernen Sie das Objektmodell von Visio kennen, um mithilfe von VBA Aufgaben in Visio zu automatisieren, Daten mit anderen Anwendungen auszutauschen oder Visio zu erweitern. Speziell der Datenaustausch von Visio nach Excel (bzw. in eine Datenbank) und wieder zurück wird an mehreren Beispielen illustriert. Schließlich lernen Sie die wichtigsten Funktionen und Eigenschaften kennen, um mit Visio Bewegung dynamisch zu simulieren.',
    category: categories["programmierung"]
  },
  {
    title: 'AIR für Android',
    subtitle: 'Android-Apps mit der Flash-Plattform entwickeln',
    image: '/images/536_air_android.jpg',
    trainer: 'Saban Ünlü',
    price: 29.95,
    description: 'Einmal entwickeln, auf vielen Plattformen veröffentlichen – welcher Entwickler träumt nicht davon? Die Flash-Plattform bietet genau diese Vorteile: ActionScript- und Flex-Entwickler erstellen Anwendungen, Webseiten und Spiele und publizieren diese neben den herkömmlichen Zielplattformen auf mobilen Endgeräten mit z. B. Android oder iOS. In diesem Video-Training erfahren Sie, wie Sie den Zugriff auf das GPS-Modul, den Bewegungssensor, das Mikrofon sowie die Kamera meistern. Grundlagen wie die Konfiguration der Entwicklungsumgebung, die kommandozeilenbasierte Veröffentlichung und das Debugging mit ANT kommen nicht zu kurz. Somit bietet dieses Training eine solide Basis für alle, die für mobile Endgeräte entwickeln wollen.',
    category: categories["programmierung"],
    trailer: ''
  },
  {
    title: 'Neu in PowerPoint 2010',
    subtitle: 'Für Umsteiger von den Versionen 2003 und 2007',
    image: '/images/539_neu_in_powerpoint_new.jpg',
    trainer: 'Samuel Woitinski',
    price: 19.95,
    description: 'PowerPoint-Umsteiger von 2003 oder 2007 finden hier alle wichtigen Neuerungen kompakt im Überblick – und das sind eine ganze Menge: Von der neuen Benutzeroberfläche mit Menüband und Backstage-Ansicht über die vielen neuen 2D- und 3D-Effekte, bis hin zu SmartArt-Grafiken, Videoschnitt-Möglichkeiten und erweiterten Animationsmöglichkeiten. Haben Sie schon mal Fotos in PowerPoint freigestellt? Auch das geht in PowerPoint 2010. Und zwar ganz einfach – sehen Sie selbst!',
    category: categories["programmierung"],
    trailer: ''
  },
  {
    title: 'After Effects CS6 – Das große Training',
    subtitle: 'Grundlagen, Real-Live-Beispiele, Profi-Tipps',
    image: '/images/after_effects_cs6.jpg',
    trainer: 'Christian Schwechten',
    price: 49.80,
    description: 'Ob Sie After Effects für professionelle Film- und Videoproduktionen oder für eigene Projekte einsetzen – in diesem Video-Training lernen Sie die mächtigen Funktionen für Motion Designer kennen. Christian Schwechten erklärt nicht nur die Werkzeuge und das Funktionsprinzip von After Effects CS6, sondern zeigt auch, welche Möglichkeiten diese anspruchsvolle Software bietet und hat eine Menge Real-Live-Beispiele und Übungen aus Fernseh- und Videoproduktionen für Sie zusammengestellt',
    category: categories["audiovideo"],
    trailer: ''
  },
  {
    title: 'Calvinize IV',
    subtitle: 'Behind the Scenes',
    image: '/images/calvinize.jpg',
    trainer: 'Calvin Hollywood',
    price: 0,
    description: 'Es ist endlich soweit! Calvinize IV ist da! In diesem Video-Training begleiten Sie Calvin Hollywood live und hinter die Kulissen zu vier Auftragsarbeiten. Dabei wird ein Model für ein Sedcard Shooting, ein Golfspieler und ein Tänzer fotografiert sowie ein Auftrag für eine Auto-Werkstatt erledigt. Zusätzlich zeigt er an jeweils einem der dabei entstandenen Ergebnisbilder den kompletten Workflow bei der Bildbearbeitung und Retusche.',
    category: categories["foto"],
    trailer: ''
  },
  {
    title: 'E-Mail-Grundlagen mit Outlook 2010',
    subtitle: 'Stilregeln, Sicherheitstipps, Fallenvermeidung, Grundwissen',
    image: '/images/email_grundlagen_outlook.jpg',
    trainer: 'Holger Wöltje',
    price: 24.95,
    description: 'Dieses Video-Training wendet sich an Computernutzer, die noch keine oder wenig Erfahrung mit dem Medium E-Mail haben. Lernen Sie von Grund auf, wie Sie mithilfe von Microsoft Outlook 2010 Ihre E-Mail-Korrespondenz führen. Der erfahrene Outlook-Experte Holger Wöltje zeigt Ihnen dabei auch, worauf Sie beim Verfassen von E-Mails unbedingt achten sollten und wie Sie mit Outlook Ihre Kontakte und Verteilerlisten organisieren. Daneben geht er auf Sicherheitsrisiken im Zusammenhang mit E-Mails ein.',
    category: categories["business"],
    trailer: ''
  },
  {
    title: 'Facebook-Apps entwickeln',
    subtitle: 'Social Media aktiv und kreativ gestalten',
    image: '/images/facebook_apps_entwickeln_flach.jpg',
    trainer: 'Thomas Pfeiffer, Robert Turrall',
    price: 39.80,
    description: 'Die weltgrößte Social-Media-Plattform Facebook bietet auch für Software-Entwickler ein riesiges und anspruchsvolles Betätigungsfeld. In diesem Video-Training führen Robert Turrall und Thomas Pfeiffer durch die Struktur der Facebook-Plattform und bieten jede Menge Lösungen für kreative, stabile und schlanke Anwendungen.',
    category: categories["programmierung"],
    trailer: ''
  },
  {
    title: 'OS X Programmierung',
    subtitle: 'Starten mit Objective-C, Xcode und dem Cocoa-Framework',
    image: '/images/os_x_programmierung_new_flach.jpg',
    trainer: 'Marc Schlüpmann',
    price: 39.80,
    description: 'Das Video-Training stellt eine Einführung für Einsteiger in die Programmierung unter Mac OS X für die aktuelle Version (10.7 „Lion“) dar. Nach einer kurzen Übersicht der Inhalte des Workshops entwicklen Sie zusammen mit Ihrem Trainer Marc Schlüpmann eine komplette Anwendung "on the fly", von A bis Z. Dabei lernen Sie die Entwicklungsumgebung Xcode, die Programmiersprache Objective-C und das Cocoa-Framework ausführlich kennen.',
    category: categories["programmierung"],
    trailer: ''
  },
  {
    title: 'Oracle Jet',
    subtitle: 'Starten mit Objective-C, Xcode und dem Cocoa-Framework',
    image: 'https://www.w3schools.com/css/img_fjords.jpg',
    trainer: 'Marc Schlüpmann',
    price: 39.80,
    description: 'Oracle JavaScript Extension Toolkit (JET) empowers developers by providing a modular open source toolkit based on modern JavaScript, CSS3 and HTML5 design and development principles.',
    category: categories["programmierung"],
    trailer: ''
  }
];

exports.training = trainingArray;
