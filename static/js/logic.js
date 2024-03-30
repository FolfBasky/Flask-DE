const animateButtonVorteile = document.getElementById('animateButtonVorteile');
const animateButtonNachteile = document.getElementById('animateButtonNachteile');
const textContainer = document.getElementById('textContainer');

function createBlock(text_1, text_2, text_3, text_4) {
  return     `<div class="block">
            <p>${text_1}</p>  
            <p>${text_2}</p>  
            <p>${text_3}</p>  
            </div>`  ;
}

const vorteiletext1 = `Ein positiver Aspekt meiner Zukunftsstadt wäre das Vorhandensein von intelligenten Verkehrssystemen, die auf erneuerbaren Energien basieren. Dadurch könnten die Einwohner die Stadt stressfrei und umweltfreundlich durchqueren. `;
const vorteiletext2 = `Eine weitere positive Eigenschaft wäre das Bestehen einer innovativen Medizinindustrie, die es den Bewohnern der Stadt ermöglicht, eine hohe Lebensqualität zu genießen und gesund zu bleiben.`;
const vorteiletext3 = `Der Bildungsbereich wäre ebenfalls ein wichtiger Faktor meiner idealen Stadt. Meine Zukunftsstadt würde eine breite Palette an Bildungseinrichtungen sowohl für Kinder als auch für Erwachsene anbieten. Dabei sollte besonders darauf geachtet werden, dass die Ausbildung individualisiert und an die jeweiligen Bedürfnisse der Lernenden angepasst wird. Eine ausgewogene Mischung aus traditionellen Lehrmethoden und virtuellen Lernumgebungen würde dabei helfen, das hohe Lernniveau aufrechtzuerhalten und den Lernenden gleichzeitig eine maximale Flexibilität zu ermöglichen.`;

const vorteileBlock = createBlock(vorteiletext1, vorteiletext2, vorteiletext3);

const nachteiletext1 = "Neben diesen positiven Aspekten gibt es jedoch auch Herausforderungen in meiner idealen Zukunftsstadt. Die größte Herausforderung wäre das Vorhandensein von unabhängigen KI-Systemen. Um eine erfolgreiche Integration dieser Systeme gewährleisten zu können, müssen jedoch die notwendigen ethischen und moralischen Standards kontinuierlich überwacht und verbessert werden.";
const nachteiletext2 = "Eine weitere Herausforderung wäre die Bereitstellung ausreichender Wohn- und Arbeitsmöglichkeiten. Hier wäre es wichtig sicherzustellen, dass jeder Einwohner eine hohe Lebensqualität genießt, unabhängig von seinem sozialen Status und seiner Herkunft.";
const nachteiletext3 = "Es wird schwierig sein, einen freien Platz in der Stadt zu finden.";

const nachteileBlock = createBlock(nachteiletext1, nachteiletext2, nachteiletext3);

function showTextVorteile() {
    textContainer.innerHTML = vorteileBlock;
    textContainer.style.opacity = '1';
}

function showTextNachteile() {
    textContainer.innerHTML = nachteileBlock;
    textContainer.style.opacity = '1';
}

animateButtonVorteile.addEventListener('click', showTextVorteile);
animateButtonNachteile.addEventListener('click', showTextNachteile);