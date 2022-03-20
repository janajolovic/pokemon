export default interface PokemonInterface {
    name: string,
    id?: number, 
    height?: number,
    weight?: number,
    types?: string[]
    abilities?: string[],
    stats?: string[],
    statsValue?: number[]
}