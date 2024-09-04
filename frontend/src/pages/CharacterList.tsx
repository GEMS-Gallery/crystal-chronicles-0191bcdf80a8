import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { backend } from 'declarations/backend';

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const result = await backend.getCharacters();
        setCharacters(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="loading-spinner"></div></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero-banner h-64 flex items-center justify-center mb-8">
        <h1 className="text-4xl font-bold text-white text-shadow-lg">Final Fantasy 14 Characters</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id} className="character-card rounded-lg p-4 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center overflow-hidden">
              <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gold">{character.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
