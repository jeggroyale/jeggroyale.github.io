import React, { useState } from "react";
import { cards } from "./cards";
import "./App.css";

function App() {
  const [deck, setDeck] = useState([]);

  const toggleCard = (card) => {
    if (deck.find((c) => c.id === card.id)) {
      setDeck(deck.filter((c) => c.id !== card.id));
    } else if (deck.length < 8) {
      setDeck([...deck, card]);
    }
  };

  const clearDeck = () => setDeck([]);

  return (
    <div className="app-container">
      <h1>Clash Royale Deck Creator</h1>
      <div className="deck-bar">
        {deck.map((card) => (
          <div className="deck-card" key={card.id}>
            <img src={card.image} alt={card.name} />
            <span>{card.name}</span>
          </div>
        ))}
        {Array.from({ length: 8 - deck.length }).map((_, i) => (
          <div className="deck-card" key={10000 + i}>
            <img
              src="https://royaleapi.github.io/cr-api-assets/ui/empty-slot.png"
              alt="Empty"
              style={{ opacity: 0.3 }}
            />
            <span style={{ opacity: 0.5 }}>Empty</span>
          </div>
        ))}
      </div>
      <button onClick={clearDeck} disabled={deck.length === 0}>
        Clear Deck
      </button>
      <h2 style={{ marginTop: "1.5rem", fontSize: "1.1rem" }}>Select 8 Cards</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            className={`card-item${deck.find((c) => c.id === card.id) ? " selected" : ""}`}
            key={card.id}
            onClick={() => toggleCard(card)}
            aria-pressed={!!deck.find((c) => c.id === card.id)}
            tabIndex={0}
          >
            <img src={card.image} alt={card.name} />
            <span>{card.name}</span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 16, fontSize: "0.93rem", color: "#aaa" }}>
        {deck.length === 8
          ? "Deck Complete!"
          : `Select ${8 - deck.length} more card${8 - deck.length !== 1 ? "s" : ""}`}
      </div>
    </div>
  );
}

export default App;
