import Char "mo:base/Char";
import Hash "mo:base/Hash";

import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Result "mo:base/Result";

actor {
  type Character = {
    id: Nat;
    name: Text;
    image: Text;
  };

  type CharacterDetails = {
    id: Nat;
    name: Text;
    image: Text;
    strengths: [Text];
    weaknesses: [Text];
  };

  stable var characters: [Character] = [
    { id = 1; name = "Y'shtola Rhul"; image = "yshtola.png" },
    { id = 2; name = "Alphinaud Leveilleur"; image = "alphinaud.png" },
    { id = 3; name = "Thancred Waters"; image = "thancred.png" }
  ];

  let characterDetails = HashMap.HashMap<Nat, CharacterDetails>(10, Nat.equal, Nat.hash);

  public query func getCharacters() : async [Character] {
    return characters;
  };

  public query func getCharacterDetails(id: Nat) : async Result.Result<CharacterDetails, Text> {
    switch (characterDetails.get(id)) {
      case (null) { #err("Character not found") };
      case (?details) { #ok(details) };
    };
  };

  // Initialize character details
  characterDetails.put(1, {
    id = 1;
    name = "Y'shtola Rhul";
    image = "yshtola.png";
    strengths = ["Powerful magic", "Tactical genius"];
    weaknesses = ["Physical combat", "Overconfidence"];
  });
  characterDetails.put(2, {
    id = 2;
    name = "Alphinaud Leveilleur";
    image = "alphinaud.png";
    strengths = ["Diplomacy", "Summoning abilities"];
    weaknesses = ["Physical strength", "Naivety"];
  });
  characterDetails.put(3, {
    id = 3;
    name = "Thancred Waters";
    image = "thancred.png";
    strengths = ["Stealth", "Gunbreaker skills"];
    weaknesses = ["Loss of magical abilities", "Emotional baggage"];
  });
}
