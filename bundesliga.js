window.TOUCHLINE_DB = (() => {
  const clubs = [
    {id:'fcb',name:'FC Bayern München',short:'Bayern',stadium:'Allianz Arena',capacity:75000,strength:91,reputation:96,transferBudget:150000000,wageBudget:5200000,ticketPrice:72,coach:'Vincent Kompany',sportingDirector:'Christoph Freund',board:'Max Eberl'},
    {id:'bvb',name:'Borussia Dortmund',short:'Dortmund',stadium:'Signal Iduna Park',capacity:81365,strength:86,reputation:91,transferBudget:85000000,wageBudget:3500000,ticketPrice:54,coach:'Niko Kovač',sportingDirector:'Ole Book',board:'Lars Ricken'},
    {id:'rbl',name:'RB Leipzig',short:'Leipzig',stadium:'Red Bull Arena',capacity:47800,strength:84,reputation:86,transferBudget:90000000,wageBudget:2900000,ticketPrice:48,coach:'Martín Demichelis',sportingDirector:'Sebastian Schuppan',board:'Marcel Schäfer'},
    {id:'vfb',name:'VfB Stuttgart',short:'Stuttgart',stadium:'MHPArena',capacity:60058,strength:82,reputation:83,transferBudget:58000000,wageBudget:2350000,ticketPrice:49,coach:'Sebastian Hoeneß',sportingDirector:'Christian Gentner',board:'Fabian Wohlgemuth'},
    {id:'b04',name:'Bayer 04 Leverkusen',short:'Leverkusen',stadium:'BayArena',capacity:30210,strength:85,reputation:87,transferBudget:82000000,wageBudget:2850000,ticketPrice:53,coach:'Carles Martínez',sportingDirector:'Kim Falkenberg',board:'Simon Rolfes'},
    {id:'scf',name:'Sport-Club Freiburg',short:'Freiburg',stadium:'Europa-Park Stadion',capacity:34700,strength:79,reputation:78,transferBudget:34000000,wageBudget:1550000,ticketPrice:42,coach:'Julian Schuster',sportingDirector:'Klemens Hartenbach',board:'Jochen Saier'},
    {id:'sge',name:'Eintracht Frankfurt',short:'Frankfurt',stadium:'Deutsche Bank Park',capacity:58000,strength:81,reputation:83,transferBudget:60000000,wageBudget:2250000,ticketPrice:51,coach:'Adi Hütter',sportingDirector:'Timmo Hardung',board:'Markus Krösche'},
    {id:'fca',name:'FC Augsburg',short:'Augsburg',stadium:'WWK Arena',capacity:30660,strength:75,reputation:72,transferBudget:22000000,wageBudget:1180000,ticketPrice:39,coach:'Manuel Baum',sportingDirector:'Benni Weber',board:'Geschäftsführung'},
    {id:'m05',name:'1. FSV Mainz 05',short:'Mainz',stadium:'MEWA ARENA',capacity:33305,strength:76,reputation:73,transferBudget:26000000,wageBudget:1260000,ticketPrice:40,coach:'Urs Fischer',sportingDirector:'Niko Bungert',board:'Christian Heidel'},
    {id:'bmg',name:'Borussia Mönchengladbach',short:'Gladbach',stadium:'ista-Borussia-Park',capacity:54042,strength:78,reputation:80,transferBudget:37000000,wageBudget:1700000,ticketPrice:45,coach:'Eugen Polanski',sportingDirector:'Rouven Schröder',board:'Geschäftsführung'},
    {id:'hsv',name:'Hamburger SV',short:'Hamburg',stadium:'Volksparkstadion',capacity:57000,strength:76,reputation:82,transferBudget:30000000,wageBudget:1500000,ticketPrice:46,coach:'Merlin Polzin',sportingDirector:'Claus Costa',board:'Stefan Kuntz'},
    {id:'koe',name:'1. FC Köln',short:'Köln',stadium:'RheinEnergieSTADION',capacity:50000,strength:76,reputation:79,transferBudget:28000000,wageBudget:1480000,ticketPrice:44,coach:'René Wagner',sportingDirector:'Thomas Kessler',board:'Geschäftsführung'},
    {id:'svw',name:'SV Werder Bremen',short:'Bremen',stadium:'Weserstadion',capacity:42100,strength:77,reputation:80,transferBudget:32000000,wageBudget:1520000,ticketPrice:44,coach:'Daniel Thioune',sportingDirector:'Clemens Fritz',board:'Geschäftsführung'},
    {id:'s04',name:'FC Schalke 04',short:'Schalke',stadium:'VELTINS-Arena',capacity:62271,strength:75,reputation:84,transferBudget:26000000,wageBudget:1550000,ticketPrice:43,coach:'Miron Muslić',sportingDirector:'Youri Mulder',board:'Vorstand'},
    {id:'elv',name:'SV Elversberg',short:'Elversberg',stadium:'URSAPHARM-Arena an der Kaiserlinde',capacity:10000,strength:72,reputation:64,transferBudget:12000000,wageBudget:720000,ticketPrice:31,coach:'Vincent Wagner',sportingDirector:'Sportliche Leitung',board:'Geschäftsführung'},
    {id:'scp',name:'SC Paderborn 07',short:'Paderborn',stadium:'Home Deluxe Arena',capacity:15000,strength:73,reputation:68,transferBudget:15000000,wageBudget:820000,ticketPrice:33,coach:'Ralf Kettemann',sportingDirector:'Sportliche Leitung',board:'Geschäftsführung'},
    {id:'tsg',name:'TSG Hoffenheim',short:'Hoffenheim',stadium:'SNP Arena',capacity:30150,strength:79,reputation:77,transferBudget:42000000,wageBudget:1900000,ticketPrice:39,coach:'Christian Ilzer',sportingDirector:'Andreas Schicker',board:'Geschäftsführung'},
    {id:'fcu',name:'1. FC Union Berlin',short:'Union Berlin',stadium:'Stadion An der Alten Försterei',capacity:22012,strength:75,reputation:74,transferBudget:23000000,wageBudget:1200000,ticketPrice:38,coach:'Mauro Lustrinelli',sportingDirector:'Horst Heldt',board:'Geschäftsführung'},
  ];

  const squads = {
    fca: {
      TW:['Finn Dahmen','Nediljko Labrović','Tom Wisbereit'],
      ABW:['Calvin Brackelmann','Chrislain Matsima','Jeffrey Gouweleeuw','Youngwoo Seol','Hennes Behrens','Marius Wolf','Juma Bah','Noahkai Banks'],
      MF:['Han-Noah Massengo','Sima Suso','Mert Kömür','Yannik Keitel','Tim Breithaupt','Robin Fellhauer','Alexis Claude-Maurice','Arijon Ibrahimović','Faik Sakar','Anton Kade','Fabian Rieder','Tim Schnitzer','Mahmut Küçükşahin'],
      ST:['Rodrigo Ribeiro','Michael Gregoritsch','Steve Mounié','Uchenna Ogundu']
    },
    fcu: {
      TW:['Frederik Rønnow','Carl Klaus','Matheo Raab','Fritz Gagzow'],
      ABW:['Felix Uduokhai','Andrik Markgraf','Zeno van den Bosch','Marvin Friedrich','Leopold Querfeld','Tom Rothe','Derrick Köhn','Josip Juranović','Christopher Trimmel','Stanley Nsoki'],
      MF:['Aljoscha Kemlein','Rani Khedira','Woo-yeong Jeong','András Schäfer','Janik Haberer','Michel Aebischer','Tim Skarke','Robert Skov','Kastriot Imeri','Duje Slišković','Linus Güther'],
      ST:['Oliver Burke','Livan Burcu','Andrej Ilić','Marin Ljubičić','Emmanuel Latte Lath','Mekhi Gray','Julien Friedrich']
    },
    rbl: {
      TW:['Ørjan Nyland','Leopold Zingerle','Maarten Vandevoordt'],
      ABW:['Abdoul Koné','Maxime Estève','Willi Orbán','Lukas Klostermann','David Raum','Castello Lukeba','Max Finkgräfe','Benjamin Henrichs'],
      MF:['Ezechiel Banzuzi','Assan Ouédraogo','Brajan Gruda','Nicolas Seiwald','Christoph Baumgartner','Ridle Baku','Rocco Reitz','Neil El Aynaoui','Andrija Maksimović','Benno Kaltefleiter','Viggo Gebel'],
      ST:['Antonio Nusa','Marc Guiu','Johan Bakayoko','Tidiam Gomis','Christopher Nkunku','Rômulo','Samba Konaté']
    },
    b04: {
      TW:['Mark Flekken','Janis Blaswich','Niklas Lomb'],
      ABW:['Facundo Medina','Miguel Gutiérrez','Jarell Quansah','Loïc Badé','Edmond Tapsoba','Tim Oermann','Lucas Vázquez','Guéla Doué'],
      MF:['Ezequiel Fernández','Jonas Hofmann','Robert Andrich','Malik Tillman','Kennet Eichhorn','Aleix García','Ibrahim Maza'],
      ST:['Afonso Moreira','Martin Terrier','Patrik Schick','Moussa Diaby','Victor Boniface','Nathan Tella','Eliesse Ben Seghir','Christian Kofane','Montrell Culbreath']
    },
    m05: {
      TW:['Alexander Schwolow','Robin Zentner','Maximilian Kinzig'],
      ABW:['Phillipp Mwene','Fabio Gruber','Stefan Posch','Eric Martel','Stefan Bell','Anthony Caci','Danny da Costa','Silvan Widmer','Dominik Kohr','Rael Nakuzola','Kacper Potulski'],
      MF:['Kaishu Sano','Jaesung Lee','Paul Nebel','Nadiem Amiri','Lennard Maloney','Otto Ruoppi','Sota Kawasaki'],
      ST:['Phillip Tietz','Ransford-Yeboah Königsdörffer','Benedict Hollerbach','Sheraldo Becker','Silas Katompa Mvumpa','Alynho Haïdara']
    },
    bmg: {
      TW:['Moritz Nicolas','Tobias Sippel','Jan Olschowsky','Daniel Batz'],
      ABW:['Fabio Chiarodia','Kevin Diks','Jan Leszczyński','Kō Itakura','Daiki Hashioka','David Herold','Yukhym Konoplya','Lukas Ullrich','Joe Scally'],
      MF:['Kevin Stöger','Enzo Leopold','Franck Honorat','Florian Neuhaus','Philipp Sander','Jens Castrop','Nicolas Kühn','Robin Hack','Fritz Fleck','Mathieu Nguefack','Wael Mohya','Hugo Bolin','Zento Uno'],
      ST:['Isac Lidberg','Tim Kleindienst','Shūto Machino','Iaia Manco Danfa']
    },
    fcb: {
      TW:['Manuel Neuer','Sven Ulreich','Jonas Urbig'],
      ABW:['Dayot Upamecano','Minjae Kim','Jonathan Tah','Nathaniel Brown','Alphonso Davies','Hiroki Ito','Sacha Boey','Josip Stanišić'],
      MF:['Joshua Kimmich','Tom Bischof','Jamal Musiala','Konrad Laimer','Ismael Saibari','Bara Sapoko Ndiaye','Lennart Karl','Aleksandar Pavlović','David Santos Daiber','Maycon Douglas Cardozo'],
      ST:['Serge Gnabry','Harry Kane','Luis Díaz','Michael Olise','Bastian Assomo']
    },
    scp: {
      TW:['Markus Schubert','Nahuel Noll','Florian Pruhs'],
      ABW:['Ruben Müller','Jonah Sticker','Nyamekye Awortwie-Grant','Laurin Curda','Felix Götze','Jan Oter Horst','Niklas Mohr','Tjark Scheller','Clemens Lippmann','Marcel Hoffmeier','Tristan Zobel'],
      MF:['Santiago Castaneda','Tom Baack','Oliver Batista Meier','Luka Durić','Mattes Hansen','Raphael Obermair','Sebastian Klaas','Laurin Ulrich','Gabriel Vidović','Timur Gayret','Vigo Wernet'],
      ST:['Rayan Philippe','Sven Michel','Marvin Pieringer','Albert Millgramm','Steffen Tigges','Stefano Marino','Lasse Eickel','Deniz Zeitler']
    },
    s04: {
      TW:['Loris Karius','Kevin Müller','Johannes Siebeking'],
      ABW:['Hasan Kuruçay','Timo Becker','Robin Gosens','Adrian Gantenbein','Nikola Katić','Tomáš Kalas','Anton Donkor','Vitalie Becker','Maximilian Wöber','Mertcan Ayhan'],
      MF:['Ron Schallenberg','Satoshi Tanaka','Janik Bachmann','Dejan Ljubičić','Soufiane El-Faouzi','Adil Aouchiche','Finn Porath','Junior Dina Ebimbe','Max Grüger','Luca Vozar'],
      ST:['Hee Chan Hwang','Moussa Sylla','Edin Džeko','Bryan Lasme','Emil Højlund','Kenan Karaman','Junior Adamu','Zaid Tchibara']
    },
    vfb: {
      TW:['Fabian Bredlow','Marius Funk','Dennis Seimen','Stefan Drljača'],
      ABW:['Ameen Al-Dakhil','Ramon Hendriks','Josha Vagnoman','Maximilian Mittelstädt','Luca Jaquez','Leonidas Stergiou','Lorenz Assignon','Dan-Axel Zagadou','Jeff Chabot','Finn Jeltsch','Maximilian Herwerth','Alexander Groiß','Dominik Nothnagel'],
      MF:['Angelo Stiller','Chris Führich','Bilal El Khannouss','Atakan Karazor','Grischa Prömel','Nikolas Nartey','Ertugrul Yigit','Jarzinho Malanga','Yanik Spalt'],
      ST:['Tiago Tomás','Ermedin Demirović','Dženan Pejčinović','Jamie Leweling','Deniz Undav','Justin Diehl','Leo Sauer']
    },
    svw: {
      TW:['Karl Hein','Markus Kolke','Alexander Schlager','Stefan Smarkalev'],
      ABW:['Olivier Deman','Oskar Wójcik','Niklas Stark','Amos Pieper','Mitchell Weiser','Arthur','Moussa Ndiaye','Felix Agu','Marco Friedl','Mick Schmetgens','Luca Höcker','Mats Heitmann','Ramiz Hamouda'],
      MF:['Jens Stage','Senne Lynen','Ludovit Reis','Eren Dinkçi','Chuki','Dariusz Stalmach','Skelly Alvero','Darwin Soylu','Arian Römers','Youri Regeer'],
      ST:['Keke Topp','Niclas Füllkrug','Justin Njinmah','Marco Grüll','Kenny Emmanuel Quetant','Cedric Itten','Salim Musah','Paul Erevbenagie','Karlo Mijo']
    },
    bvb: {
      TW:['Gregor Kobel','Patrick Drewes','Silas Ostrzinski','Alexander Meyer'],
      ABW:['Waldemar Anton','Nico Schlotterbeck','Ramy Bensebaini','Joane Gadou','Daniel Svensson','Julian Ryerson','Kauã Prates','Filippo Mane','Luca Reggiani'],
      MF:['Jobe Bellingham','Felix Nmecha','Carney Chukwuemeka','Ethan Nwaneri','Konstantinos Karetsas','Marcel Sabitzer','Emre Can','Joey Veerman','Justin Lerma','Enzo dos Santos','Giannis Konstantelias','Mussa Kaba'],
      ST:['Serhou Guirassy','Maximilian Beier','Fabio Silva','Samuele Inácio','Mathis Albert']
    },
    elv: {
      TW:['Frank Lehmann','Elias Etringer','Nicolas Kristof','Tim Boss'],
      ABW:['Nicholas Mickelson','Florian Le Joncour','Luis Seifert','Lukas Pinckert','Lasse Günther','Luca Sirch','Jan Gyamerah','Maximilian Rohr','Felix Keidel'],
      MF:['Amara Condé','Maurice Krattenmacher','Łukasz Poręba','Noah Darvich','Raif Adam','Frederik Schmahl','Lukas Petkov','Tom Zimmerschied','Francis Onyeka'],
      ST:['Noel Futkeu','Luca Pfeiffer','Luca Schnellbacher','Cole Campbell','David Mokwa']
    },
    sge: {
      TW:['Noah Atubolu','Jens Grahl','Amil Siljevic','Kauã Santos'],
      ABW:['Elias Baum','Lilian Brassier','Robin Koch','Otávio','Keita Kosugi','Nnamdi Collins','Julian Etse'],
      MF:['Oscar Højlund','Farès Chaïbi','Noëll Aséko','Ritsu Dōan','Timothy Chandler','Raphael Onyedika','Mario Götze','Love Arrhov','Jeremiaha Maluze','Can Uzun'],
      ST:['Ansgar Knauff','Jonathan Burkardt','Younes Ebnoutalib','Ayoube Amaimouni-Echghouyab','Malik Pimpong','Jessic Ngankam']
    },
    scf: {
      TW:['Mio Backhaus','Florian Müller','Jannik Huth'],
      ABW:['Philipp Lienhart','Anthony Jung','Lukas Kübler','Berkay Yilmaz','Matthias Ginter','Philipp Treu','Christian Günter','Jordy Makengo','Max Rosenfelder','Bruno Ogbus'],
      MF:['Patrick Osterhage','Maximilian Eggestein','Yuito Suzuki','Yannik Engelhardt','Niklas Beste','Rihito Yamamoto','Florent Muslija','Vincenzo Grifo','Rouven Tarnutzer'],
      ST:['Derry Scherhant','Lucas Höler','Cyriaque Irié','Igor Matanović','Keisuke Gotō']
    },
    hsv: {
      TW:['Daniel Heuer Fernandes','Sander Tangvik','Elias Lahti','Fernando Dickes'],
      ABW:['David Møller Wolfe','Zakaria El Ouahdi','Warmed Omari','Jordan Torunarigha','Nicolás Capaldo','Miro Muheim','Sebastiaan Bornauw','Louis Lemke','Joel Agyekum','Shafiq Nandja','Jason Bissi-Mouelle'],
      MF:['Bilal Nadir','Martin Adeline','Albert Sambi Lokonga','Immanuël Pherai','Albert Grønbæk','Fábio Vieira','Nicolai Remberg','Kofi Amoako','Kelvin Ojo'],
      ST:['Terem Moffi','Yussuf Poulsen','Bakery Jatta','Otto Stange','Patson Daka','Alexander Røssing-Lelesiit']
    },
    tsg: {
      TW:['Oliver Baumann','Lúkas Petersson','Luca Philipp'],
      ABW:['Robin Hranáč','Sean Dulic','Ozan Kabak','Bernardo','Valentin Gendrey','Albian Hajdari','Kōki Machida','Natnael Abraha','Vladimír Coufal','Mats Rots','Tristan Spranger'],
      MF:['Leon Avdullahu','Patrick Wimmer','Luis Engelns','Nathan De Cat','Wouter Burger','Bambasé Conté','Alexander Prass','Andrej Kramarić','Cajetan Lenz'],
      ST:['Max Moerstedt','Adam Hložek','Fisnik Asllani','Adam Daghim','Tim Lemperle']
    },
    koe: {
      TW:['Marvin Schwäbe','Ron-Robert Zieler','Martin James','Matthias Köbbing'],
      ABW:['Joël Schmied','Borna Sosa','Timo Hübers','Gideon Mensah','Jahmai Simpson-Pusey','Luka Lochoshvili','Sebastian Sebulonsen','Rav van den Berg','Jonathan Friemel'],
      MF:['Tom Krauß','Ellyes Skhiri','Ísak Jóhannesson','Saïd El Mala','Reigan Heskey','Alessio Castro-Montes','Paul Okon-Engstler','Jan Thielmann','Gil Neves','Fayssal Harchaoui','Linton Maina'],
      ST:['Luca Waldschmidt','Ragnar Ache','Imad Rondić','Malek El Mala','Thijs Dallinga','Marius Bülter','Mikey Moore']
    }
  };

  const starRatings = {
    'Harry Kane':[91,91], 'Jamal Musiala':[90,94], 'Michael Olise':[89,92], 'Joshua Kimmich':[89,89], 'Luis Díaz':[87,87], 'Alphonso Davies':[86,88], 'Jonathan Tah':[85,85], 'Dayot Upamecano':[85,87], 'Manuel Neuer':[84,84], 'Aleksandar Pavlović':[84,90], 'Lennart Karl':[78,91],
    'Serhou Guirassy':[87,87], 'Nico Schlotterbeck':[86,88], 'Gregor Kobel':[86,88], 'Ethan Nwaneri':[82,93], 'Jobe Bellingham':[82,89], 'Felix Nmecha':[83,87], 'Joey Veerman':[84,85],
    'Christopher Nkunku':[86,87], 'Antonio Nusa':[82,90], 'Castello Lukeba':[83,88], 'David Raum':[82,83], 'Johan Bakayoko':[82,88], 'Assan Ouédraogo':[79,90],
    'Patrik Schick':[85,85], 'Moussa Diaby':[84,85], 'Edmond Tapsoba':[84,86], 'Malik Tillman':[83,88], 'Victor Boniface':[83,87], 'Jarell Quansah':[82,88],
    'Deniz Undav':[84,84], 'Angelo Stiller':[83,88], 'Chris Führich':[82,82], 'Ermedin Demirović':[82,83], 'Jamie Leweling':[81,85],
    'Robin Gosens':[82,82], 'Hee Chan Hwang':[81,81], 'Edin Džeko':[79,79], 'Kenan Karaman':[78,78], 'Satoshi Tanaka':[78,84], 'Adil Aouchiche':[77,84],
    'Ritsu Dōan':[82,84], 'Mario Götze':[80,80], 'Jonathan Burkardt':[82,85], 'Can Uzun':[79,88], 'Robin Koch':[82,82],
    'Vincenzo Grifo':[82,82], 'Matthias Ginter':[81,81], 'Yuito Suzuki':[79,85], 'Igor Matanović':[79,85],
    'Adam Hložek':[81,85], 'Andrej Kramarić':[81,81], 'Oliver Baumann':[81,81],
    'Mert Kömür':[76,86], 'Michael Gregoritsch':[78,78], 'Fabian Rieder':[78,82], 'Arijon Ibrahimović':[75,85],
    'Tim Kleindienst':[81,81], 'Franck Honorat':[80,81], 'Kevin Stöger':[79,79], 'Nicolas Kühn':[79,84],
    'Nadiem Amiri':[80,80], 'Paul Nebel':[78,85], 'Phillip Tietz':[78,79],
    'Niclas Füllkrug':[81,81], 'Mitchell Weiser':[80,80], 'Marco Friedl':[79,81],
    'Terem Moffi':[81,82], 'Fábio Vieira':[82,86], 'Patson Daka':[79,81], 'Albert Sambi Lokonga':[79,83],
    'Ellyes Skhiri':[80,80], 'Thijs Dallinga':[79,82], 'Saïd El Mala':[77,89], 'Mikey Moore':[76,90],
    'Emmanuel Latte Lath':[78,81], 'Tom Rothe':[77,85], 'Aljoscha Kemlein':[76,84],
    'Maurice Krattenmacher':[75,86], 'Noah Darvich':[74,87], 'Cole Campbell':[73,86],
    'Gabriel Vidović':[76,84], 'Laurin Ulrich':[74,85], 'Marvin Pieringer':[76,79]
  };

  const posBase = {TW:0,ABW:0,MF:0,ST:0};
  const hash = s => [...s].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),7);
  const players=[];
  let pid=1;
  for(const club of clubs){
    const s=squads[club.id];
    for(const [pos,names] of Object.entries(s)){
      names.forEach((name,idx)=>{
        const h=hash(name);
        const noise=(h%7)-3;
        let rating=Math.max(64,Math.min(90,club.strength-2+noise));
        let potential=Math.min(94,rating + (h%5));
        if(starRatings[name]) [rating,potential]=starRatings[name];
        const age=18+(h%18);
        if(age<=21) potential=Math.max(potential,Math.min(92,rating+5+(h%4)));
        const value=Math.round((Math.pow(Math.max(1,rating-60),2)*65000) * (potential>rating?1.15:1));
        const wage=Math.round((club.wageBudget/Math.max(22,Object.values(s).flat().length))*(0.72+(rating-club.strength+8)/20));
        const contractYears=1+(h%5);
        players.push({id:'p'+pid++,name,clubId:club.id,position:pos,shirt:idx+1,rating,potential,age,value,wage,contractYears,form:70+(h%21),morale:72+(h%19)});
      });
    }
  }

  const leagues = {
    'Deutschland · Bundesliga': clubs.map(c=>c.id),
    'Deutschland · 2. Bundesliga': ['VfL Wolfsburg','FC St. Pauli','1. FC Heidenheim 1846','Hertha BSC','1. FC Nürnberg','1. FC Kaiserslautern','1. FC Magdeburg','VfL Bochum 1848','Hannover 96','VfL Osnabrück','SpVgg Greuther Fürth','Karlsruher SC','Eintracht Braunschweig','DSC Arminia Bielefeld','Holstein Kiel','SG Dynamo Dresden','SV Darmstadt 98','FC Energie Cottbus'],
    'England · Premier League': [], 'England · Championship': [], 'Spanien · La Liga': [], 'Spanien · Segunda División': [], 'Italien · Serie A': [], 'Italien · Serie B': [], 'Frankreich · Ligue 1': [], 'Frankreich · Ligue 2': []
  };

  return {clubs,players,leagues,meta:{season:'2026/27',ratingModel:'Touchline Eigenbewertung; keine EA-/FM-Werte',updated:'2026-10-06'}};
})();
