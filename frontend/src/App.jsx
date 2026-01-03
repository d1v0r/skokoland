import { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: 'Standard',
      price: '1.500 kn',
      includes: [
        'Dekoracija po želji',
        'Torte i slatki stol',
        'Iznajmljivanje opreme',
        'Animatori i voditelji'
      ]
    },
    {
      name: 'Premium',
      price: '2.500 kn',
      includes: [
        'Sve iz Standard paketa',
        'Profesionalni fotograf',
        'Tema po želji',
        'Pokloni za goste'
      ]
    },
    {
      name: 'Deluxe',
      price: '4.000 kn',
      includes: [
        'Sve iz Premium paketa',
        'Vatromet',
        'Glazbeni nastup',
        'Video snimanje'
      ]
    }
  ];

  const selectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="app">
      <header>
        <h1>🎉 Party Obrt</h1>
        <p>Organiziramo nezaboravne rođendane i evente</p>
      </header>

      <main>
        <section className="hero">
          <h2>Učinite svoju proslavu posebnom!</h2>
          <p>Pružamo vrhunsku zabavu za sve prigode</p>
          <button className="cta-button">Rezervirajte sada</button>
        </section>

        <section className="packages">
          <h2>Naši paketi</h2>
          <div className="package-grid">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`package-card ${selectedPackage?.name === pkg.name ? 'selected' : ''}`}
                onClick={() => selectPackage(pkg)}
              >
                <h3>{pkg.name} Paket</h3>
                <div className="price">{pkg.price}</div>
                <ul>
                  {pkg.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button className="select-button">Odaberi</button>
              </div>
            ))}
          </div>
        </section>

        {selectedPackage && (
          <div className="selected-package">
            <h3>Odabrani paket: {selectedPackage.name}</h3>
            <p>Cijena: {selectedPackage.price}</p>
            <button className="cta-button">Rezerviraj sada</button>
          </div>
        )}
      </main>

      <footer>
        <p>📞 +385 99 123 4567</p>
        <p>📧 info@partyobrt.hr</p>
        <p>📍 Zagrebačka ulica 123, Zagreb</p>
      </footer>
    </div>
  );
}
