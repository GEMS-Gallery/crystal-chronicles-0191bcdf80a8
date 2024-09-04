import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { backend } from 'declarations/backend';

interface CharacterDetails {
  id: number;
  name: string;
  image: string;
  strengths: string[];
  weaknesses: string[];
}

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      if (!id) return;
      try {
        const result = await backend.getCharacterDetails(BigInt(id));
        if ('ok' in result) {
          setCharacter(result.ok);
        } else {
          setError('Character not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setError('Failed to load character details');
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="loading-spinner"></div></div>;
  }

  if (error || !character) {
    return <div className="text-center text-red-500 mt-8">{error || 'Character not found'}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-gold hover:text-white transition-colors mb-4 inline-block">&larr; Back to Characters</Link>
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-48 h-48 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-8 flex items-center justify-center overflow-hidden">
            <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gold mb-4">{character.name}</h1>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-silver">Strengths</h2>
              <ul className="list-disc list-inside">
                {character.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-silver">Weaknesses</h2>
              <ul className="list-disc list-inside">
                {character.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
