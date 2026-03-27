import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SKINS = {
  ivoirien: {
    color: '#FDB927', // Orange Éléphants
    hat: '⚽️',
    weapon: '🔫'
  },
  zoblazo: {
    color: '#00FF88', // Vert fluo
    dance: true,
    weapon: '💃🔫'
  },
  alloco: {
    color: '#FF6B6B',
    food: '🥞', // Alloco
    weapon: '🍌💣'
  }
};

export default function IvoirienPlayer({ player, isMe }) {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      // Animation danse Zoblazo
      if (player.skin === 'zoblazo' && player.alive) {
        meshRef.current.rotation.z += 0.1;
      }
      
      // Effet mort "Na pété !"
      if (!player.alive) {
        meshRef.current.scale.set(0.1, 0.1, 0.1);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[player.x/100, player.y/100, 0]}>
      {/* Corps ivoirien */}
      <cylinderGeometry args={[0.5, 0.8, 2, 8]} />
      <meshStandardMaterial 
        color={SKINS[player.skin]?.color || '#FDB927'}
      />
      
      {/* Tête avec emoji ivoirien */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshStandardMaterial color="white" />
        {/* Nom ivoirien */}
        <textGeometry args={['KONE\nYAO', { size: 0.2, font: 'helvetica' }]} />
      </mesh>
      
      {/* Arme */}
      <mesh position={[0.3, 0.5, 0.5]}>
        <boxGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </mesh>
  );
}
