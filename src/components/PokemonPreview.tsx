import { toTitleCase } from "@/utils/toTitleCase";
import { useRouter } from "next/navigation";

type PokemonPreviewProps = { data: Pokemon };

export default function PokemonPreview({ data }: PokemonPreviewProps) {
    const router = useRouter();
    return (
        <div className="cursor-pointer" onClick={() => { router.push(`/details/${data.id}`) }} >
            <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-center items-center">
                    <img className="pb-4 rounded-t-lg size-60 " src={data.front_default} alt="" />
                </div>
                <div className="flex flex-col">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  justify-center"> {toTitleCase(data.name)} </h5>
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-400 hover:text-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Details &nbsp;
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}