interface Ability2 {
  name: string;
  url: string;
}

interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndice {
  game_index: number;
  version: Version;
}

interface Move2 {
  name: string;
  url: string;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface Move {
  move: Move2;
  version_group_details: VersionGroupDetail[];
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: any;
  versions: any;
}

interface Stat2 {
  name: string;
  url: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

interface Type2 {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Type2;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
