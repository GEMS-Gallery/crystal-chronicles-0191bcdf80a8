import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Character { 'id' : bigint, 'name' : string, 'image' : string }
export interface CharacterDetails {
  'id' : bigint,
  'weaknesses' : Array<string>,
  'strengths' : Array<string>,
  'name' : string,
  'image' : string,
}
export type Result = { 'ok' : CharacterDetails } |
  { 'err' : string };
export interface _SERVICE {
  'getCharacterDetails' : ActorMethod<[bigint], Result>,
  'getCharacters' : ActorMethod<[], Array<Character>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
