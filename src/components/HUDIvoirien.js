export default function HUDIvoirien({ players, myScore }) {
  return (
    <div className="hud-ivoirien">
      <div className="score">
        <span>🇨🇮 {myScore} KILLS</span>
        <span>🔥 {players.length} ÉLÉPHANTS</span>
      </div>
      
      <div className="skins">
        <button className="skin-btn ivoirien">⚽️</button>
        <button className="skin-btn zoblazo">💃</button>
        <button className="skin-btn alloco">🥞</button>
      </div>
      
      <div className="ivoirien-chat">
        <div>💬 "Gbich gbich !"</div>
        <div>😂 "Na pété frère !"</div>
      </div>
    </div>
  );
}
