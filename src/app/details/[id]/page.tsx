'use client'
import { toTitleCase } from "@/utils/toTitleCase";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Details = {
    front_default?: string;
    abilities?: string;
    type?: string;
    name?: string;
    stats?: string;
    some_moves?: string;
}

function ShowFields({ title, value }: { title: string; value?: string }) {
    return (
        <div className="flex gap-3 text-lg">
            <p> <label className="font-semibold"> {title}: </label>  {value} </p>
        </div>
    )
}

export default function Page() {

    const [details, setDetails] = useState<Details>({});
    const params = useParams<{ id: string }>();

    const router = useRouter();

    const getPokemonDetail = async (id: string) => {
        const data = await (await fetch(`/api/details/${id}`)).json();
        setDetails(data);
    }

    useEffect(() => {
        const { id } = params;
        getPokemonDetail(id);
    }, [params])

    return (
        <div className="max-w-2xl m-auto">
            <div className="flex gap-x-1 mt-4" onClick={() => router.back()}>
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1">
                    <g data-name="Group 132" id="Group_132">
                        <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" />
                    </g>
                </svg>
                <button className="text-lg font-medium"> Back </button>
            </div>
            <div className="flex justify-center ">
                <div className="flex w-full max-w-lg flex-col rounded-lg shadow-md ">
                    <div className="bg-[#60e2c9] lg shadow flex justify-center items-center p-5">
                        <img className="pb-4 size-60" src={details.front_default} alt="" />
                    </div>
                    <div className="bg-[#fdc666] rounded-lg shadow">
                        <div className="flex justify-start flex-col p-2 gap-y-1">
                            <ShowFields title="Name" value={toTitleCase(details.name ?? "")} />
                            <ShowFields title="Type" value={details.type} />
                            <ShowFields title="Stats" value={details.stats} />
                            <ShowFields title="Abilities" value={details.abilities} />
                            <ShowFields title="Some Moves" value={details.some_moves} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}