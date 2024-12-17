import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json();

    const abilities = data.abilities.map((value: any) => value.ability.name).join(", ");
    const type = data.types.map((value: any) => value.type.name).join(", ");
    const name = data.name;
    const stats = data.stats.map((value: any) => value.stat.name).join(", ");
    const some_moves = data.moves.slice(0, 5).map((value: any) => value.move.name).join(", ")
    const front_default = data.sprites.other["official-artwork"].front_default ?? "/fallback-image.png";
    
    return Response.json({
        abilities,
        type,
        name,
        stats,
        some_moves,
        front_default,
    });
}
