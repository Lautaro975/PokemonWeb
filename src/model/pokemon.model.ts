export const PokemonModel:PokemonType = {
    id:0,
    name:"",
    abilities:[{ability:{name:""}}],
    base_experience:0,
    height:0,
    types:[{type:{name:""}}],
    weight:0,
    sprites:{other:{home:{front_default:""}}}
};
export interface PokemonType {
    id: number;
    name: string;
    abilities: { ability: { name: string } }[];
    base_experience: number;
    height: number;
    types: { type: { name: string } }[];
    weight: number;
    sprites: {
        other: {
            home: {
                front_default: string;
            };
        };
    };
}
