import React from 'react';
import SEO from '../components/SEO';

const Care = () => {
    return (
        <div className="page care-page">
            <SEO
                title="Jewelry Care Guide | Bijoux"
                description="Tips and guides on how to care for your fine jewelry to ensure it lasts a lifetime."
            />

            <div className="container section">
                <div className="care-header">
                    <h1>Jewelry Care Guide</h1>
                    <p>Preserve the beauty of your Bijoux pieces for generations to come.</p>
                </div>

                <div className="care-grid">
                    <div className="care-card">
                        <div className="care-icon">✨</div>
                        <h2>General Care</h2>
                        <p>
                            Remove jewelry before swimming, bathing, or exercising. Avoid contact with perfumes, lotions, and household chemicals,
                            as these can tarnish metals and damage gemstones.
                        </p>
                    </div>

                    <div className="care-card">
                        <div className="care-icon">🧼</div>
                        <h2>Cleaning</h2>
                        <p>
                            Clean your gold and diamond jewelry gently with warm water and a mild soap. Use a soft brush to remove dirt.
                            For pearls, simply wipe them with a soft, damp cloth after wearing.
                        </p>
                    </div>

                    <div className="care-card">
                        <div className="care-icon">📦</div>
                        <h2>Storage</h2>
                        <p>
                            Store each piece separately in its original box or a soft pouch to prevent scratching and tangling.
                            Keep in a cool, dry place away from direct sunlight.
                        </p>
                    </div>

                    <div className="care-card">
                        <div className="care-icon">🔍</div>
                        <h2>Maintenance</h2>
                        <p>
                            We recommend having your jewelry professionally inspected and cleaned once a year.
                            Check clasps and settings regularly to ensure stones are secure.
                        </p>
                    </div>
                </div>

                <div className="material-guide">
                    <h2>Material Specifics</h2>
                    <div className="material-row">
                        <div className="material-col">
                            <h3>Gold</h3>
                            <p>Gold is a durable metal but can scratch. Buff gently with a polishing cloth to restore shine.</p>
                        </div>
                        <div className="material-col">
                            <h3>Silver</h3>
                            <p>Sterling silver naturally tarnishes over time. Use a silver polishing cloth to remove tarnish.</p>
                        </div>
                        <div className="material-col">
                            <h3>Pearls</h3>
                            <p>Pearls are organic and delicate. They need moisture from the air, so wear them often!</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .care-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .care-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-family: var(--font-serif);
        }

        .care-header p {
          color: var(--color-secondary);
          font-size: 1.2rem;
        }

        .care-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .care-card {
          background-color: var(--color-card-bg);
          padding: 2.5rem;
          padding: 2.5rem;
          border-radius: 4px;
          text-align: center;
        }

        .care-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .care-card h2 {
          font-family: var(--font-serif);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .care-card p {
          color: var(--color-secondary);
          line-height: 1.6;
        }

        .material-guide {
            text-align: center;
            padding: 4rem 0;
            text-align: center;
            padding: 4rem 0;
            border-top: 1px solid var(--color-border);
        }

        .material-guide h2 {
            font-size: 2rem;
            font-family: var(--font-serif);
            margin-bottom: 3rem;
        }

        .material-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
        }

        .material-col h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .material-col p {
            color: var(--color-secondary);
        }

        @media (max-width: 768px) {
          .care-grid, .material-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Care;
