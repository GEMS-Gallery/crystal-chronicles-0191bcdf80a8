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
    { id = 1; name = "Cloud Strife"; image = "cloud.png" },
    { id = 2; name = "Tifa Lockhart"; image = "tifa.png" },
    { id = 3; name = "Aerith Gainsborough"; image = "aerith.png" }
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
    name = "Cloud Strife";
    image = "cloud.png";
    strengths = ["Powerful sword techniques", "Limit breaks"];
    weaknesses = ["Emotional trauma", "Identity crisis"];
  });
  characterDetails.put(2, {
    id = 2;
    name = "Tifa Lockhart";
    image = "tifa.png";
    strengths = ["Martial arts expert", "Strong physical attacks"];
    weaknesses = ["Limited ranged abilities", "Emotional attachment"];
  });
  characterDetails.put(3, {
    id = 3;
    name = "Aerith Gainsborough";
    image = "aerith.png";
    strengths = ["Powerful magic abilities", "Healing skills"];
    weaknesses = ["Physically fragile", "Targeted by antagonists"];
  });
}
