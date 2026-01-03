import { useState } from 'react';
import './App.css';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="error-fallback">
        <h2>Došlo je do pogreške</h2>
        <p>Oprostite, došlo je do neočekivane pogreške. Molimo osvježite stranicu.</p>
        <button onClick={() => window.location.reload()}>Osvježi stranicu</button>
      </div>
    );
  }

  return children;
};

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const selectPackage = (pkg, e) => {
    e?.stopPropagation();
    setSelectedPackage(pkg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, selectedPackage });
    // Add your form submission logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ErrorBoundary>
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
                <button 
                  className="select-button"
                  onClick={(e) => selectPackage(pkg, e)}
                >
                  Odaberi
                </button>
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
        <div className="contact-form">
          <h3>Kontaktirajte nas</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ime i prezime"
              required
              aria-label="Ime i prezime"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email adresa"
              required
              aria-label="Email adresa"
            />
            <input
              type="text"
              name="package"
              value={selectedPackage ? `${selectedPackage.name} (${selectedPackage.price})` : ''}
              readOnly
              placeholder="Odabrani paket"
              aria-label="Odabrani paket"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Vaša poruka"
              rows="4"
              required
              aria-label="Vaša poruka"
            />
            <button type="submit" className="cta-button">
              Pošalji upit
            </button>
          </form>
        </div>
        <div className="contact-info">
          <p>📞 +385 99 123 4567</p>
          <p>📧 info@partyobrt.hr</p>
          <p>📍 Zagrebačka ulica 123, Zagreb</p>
        </div>
      </footer>
      </div>
    </ErrorBoundary>
  );
}
