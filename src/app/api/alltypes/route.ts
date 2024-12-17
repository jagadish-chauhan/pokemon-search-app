import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const { results }: { results: { name: string }[] } = await (await fetch(`https://pokeapi.co/api/v2/type?offset=1&limit=250`)).json();
    const names = results.map(({ name }) => name);
    return Response.json(names);
}
