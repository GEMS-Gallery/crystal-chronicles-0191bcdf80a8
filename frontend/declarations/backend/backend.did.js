export const idlFactory = ({ IDL }) => {
  const CharacterDetails = IDL.Record({
    'id' : IDL.Nat,
    'weaknesses' : IDL.Vec(IDL.Text),
    'strengths' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'image' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : CharacterDetails, 'err' : IDL.Text });
  const Character = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'image' : IDL.Text,
  });
  return IDL.Service({
    'getCharacterDetails' : IDL.Func([IDL.Nat], [Result], ['query']),
    'getCharacters' : IDL.Func([], [IDL.Vec(Character)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
