var desc = {
  "Acappella Club": "The UW A Cappella Club is the umbrella club of all a cappella groups at the University of Waterloo! UWACC was founded in 2008 originally with one ensemble and has since expanded to include many different groups including the AcaBellas, the Unaccompanied Minors, ACE, the Musical InterDudes, the Water Boys, and In Full Colour. ",
  "Former Films Creator Club": "The film making center at the University of Waterloo.",
  "Crafts 4 Charity":"We are a UW DIY campus club that seeks to spark creativity. Every term we host a couple of workshops teaching you how to make cute plushies, polymer clay charms, and more- we will provide the materials and instructions, all levels are welcome! ",
  "Breakdancing": " The UW Breakers promotes hip hop culture and break dancing as a fun and exciting activity for students and others as a form of self-expression and as an opportunity to get to know one another. The club mainly hosts a weekly open practice that is open to all levels of dancers to learn and practice breaking",
  "Zine Club":"Waterloo Zine Club (aka WAT Is Zine?) is a club dedicated to showcasing the creativity of the UW student body. We put out monthly issues that feature artwork, poetry, articles and more from UW students exclusively! ",
  "Chess Club":"We wish to provide an environment where people throughout the Kitchener-Waterloo Region can enjoy the game and share their love for chess through discussions and strong tournaments for all levels. ",
  "University of Waterloo Raising the Roof Club":"University of Waterloo’s Raising the Roof club is partnered with the Raising the Roof non-profit organization, whose mission is to provide national leadership on solutions to homelessness.",
  "Improv Club":"UW Improv meets every week for games, exercises, sports and warfare from the world of *improvisational drama*, made famous by Whose Line is it Anyway. Our objectives are fun, enjoyment and belly laughs-- no experience necessary, drop-ins welcome!",
  "Intramural Sports":"insert description here8",
  "Cooking Club":"The Cooking Club serves up cooking classes, bake sales, barbeques, and other food related adventures. We cover the full spectrum of foods from fancy sushi rolling classes to quick and dirty tips to help you manage the necessary evil known as ‘cooking during midterms’.",
  "Debate Society":" Our purpose is to hone our skills for competitive debate, within the CUSID (Canadian University Society for Intercollegiate Debate) and beyond.",
  "Tech+ UW":"Tech+ UW's mission is to cultivate a more inclusive and diverse tech community at UWaterloo by making resources more accessible to the community and students in need. ",
  "Moot Court":"The University of Waterloo Moot Court is a club for students interested in building their verbal advocacy skills, knowledge of critical legal issues, and presentation abilities in the courtroom. ",
  "Ace Chapter":"DECA is an international student organization that joins college and university students together to engage in business related activities.",
  "UW Canadian Association for Global Health":"We are the University of Waterloo Student Chapter of the Canadian Association for Global Health (UW CAGH). We represent a student-led initiative designed to foster research and networking in global health among University of Waterloo students across all disciplines. "
}

document.addEventListener('DOMContentLoaded', function() {
    const result = localStorage.getItem('result');
    const topThreeClubs = result ? JSON.parse(result) : [];
  
    console.log(topThreeClubs);
    var clubTitle = document.getElementById('resultTitle1');
    clubTitle.textContent = topThreeClubs[0];
    var paragraph = document.getElementById('result1');
    paragraph.textContent = desc[topThreeClubs[0]];

    clubTitle = document.getElementById('resultTitle2');
    clubTitle.textContent = topThreeClubs[1];
    paragraph = document.getElementById('result2');
    paragraph.textContent = desc[topThreeClubs[1]];

    clubTitle = document.getElementById('resultTitle3');
    clubTitle.textContent = topThreeClubs[2];
    paragraph = document.getElementById('result3');
    paragraph.textContent = desc[topThreeClubs[2]];
    
    var chr = document.getElementById('character');
    console.log(topThreeClubs[3]);
    chr.src = '/imgs/characters/'+topThreeClubs[3]+'.jpg';
  });




