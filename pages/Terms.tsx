
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-brand-dark mb-8">Obchodní podmínky</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="mb-6 font-bold">
            Tyto obchodní podmínky upravují vztah mezi poskytovatelem služeb (SpectraWash) a zákazníkem.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Objednávka služeb</h3>
          <p className="mb-4">
            Objednávka je závazná okamžikem potvrzení termínu ze strany poskytovatele. Zákazník je povinen přistavit vozidlo v dohodnutý čas. V případě zpoždění delšího než 15 minut si vyhrazujeme právo termín zrušit nebo přesunout.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Ceny a platby</h3>
          <p className="mb-4">
            Ceny uvedené na webu jsou orientační ("od"). Konečná cena se může lišit v závislosti na míře znečištění vozu a stavu laku. Přesná cena je stanovena při fyzické prohlídce vozu před zahájením prací.
          </p>
          <p className="mb-4">
             Při nadměrném znečištění (zvířecí chlupy, stavební prach, silné znečištění interiéru) bude účtován příplatek dle platného ceníku doplňkových služeb.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Odpovědnost za vady a reklamace</h3>
          <p className="mb-4">
            Zákazník je povinen si vozidlo při převzetí důkladně prohlédnout. Reklamace zjevných vad musí být uplatněna ihned při předání vozu.
          </p>
          <p className="mb-4 bg-gray-100 p-4 border-l-4 border-brand-blue">
            Zákazník je povinen po poskytnutí sjednaných služeb provést řádnou prohlídku vyčištěného vozidla s tím, že po jeho převzetí, úhradě a opuštění prostor provozovny poskytovatele nebude brán na pozdější reklamace zřetel.
          </p>
          <p className="mb-4">
            Poskytovatel neručí za škody způsobené skrytými vadami vozu (např. odlupující se lak vlivem předchozího poškození, uvolněné lišty, poškozená elektroinstalace zatékáním před mytím).
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Storno podmínky</h3>
          <p className="mb-4">
            Zrušení rezervace je možné nejpozději 24 hodin předem. Při pozdějším zrušení může být účtován storno poplatek ve výši až 50% z ceny objednané služby.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
