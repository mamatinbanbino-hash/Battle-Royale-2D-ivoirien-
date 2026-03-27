// pages/api/game.js (ou api/game.js pour Vite)
let rooms = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { roomId, playerId, action, x, y } = req.body;
    
    if (!rooms[roomId]) {
      rooms[roomId] = {
        players: {},
        bullets: [],
        circleRadius: 1000
      };
    }
    
    const room = rooms[roomId];
    
    if (action === 'join') {
      room.players[playerId] = {
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        skin: ['ivoirien', 'zoblazo', 'alloco'][Math.floor(Math.random()*3)],
        alive: true,
        score: 0
      };
    } else if (action === 'move') {
      if (room.players[playerId]) {
        room.players[playerId].x = x;
        room.players[playerId].y = y;
      }
    } else if (action === 'shoot') {
      room.bullets.push({
        x, y,
        vx: Math.cos(Math.random()*Math.PI*2)*10,
        vy: Math.sin(Math.random()*Math.PI*2)*10,
        owner: playerId
      });
    }
    
    res.json({ success: true, room });
  }
}
