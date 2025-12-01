
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-brand-dark mb-8">Ochrana osobních údajů</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="mb-4">
            V souvislosti s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) vás informujeme o tom, jak SpectraWash zpracovává vaše osobní údaje.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Správce údajů</h3>
          <p className="mb-4">
            Správcem osobních údajů je provozovatel studia SpectraWash, se sídlem Přílepská 1901, 252 63 Roztoky.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Jaké údaje sbíráme</h3>
          <p className="mb-4">
            Zpracováváme pouze údaje nezbytné pro vyřízení vaší objednávky a komunikaci:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Jméno a příjmení</li>
            <li>Telefonní číslo (pro potvrzení termínu a oznámení o dokončení)</li>
            <li>E-mailová adresa (pro zaslání faktury či potvrzení)</li>
            <li>Informace o vozidle (SPZ, model) pro potřeby servisu</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Účel zpracování</h3>
          <p className="mb-4">
            Údaje využíváme výhradně k:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Plnění smlouvy (poskytnutí služby mytí/detailing)</li>
            <li>Komunikaci se zákazníkem ohledně stavu zakázky</li>
            <li>Vystavení účetních dokladů</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Vaše práva</h3>
          <p className="mb-4">
            Máte právo na přístup ke svým údajům, jejich opravu, výmaz ("právo být zapomenut") nebo omezení zpracování. Pro uplatnění těchto práv nás kontaktujte na info@spectrawash.cz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
