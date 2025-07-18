"use client";
// import { data } from "./data";
import { companies } from "./companies_data";
import {
    Command,
    CommandInput,
} from "@/components/ui/command"
import Combobox from "./Combobox";


const sortOptions = [
    { value: 'newest', label: 'Newest to oldest', certified: true },
    { value: 'oldest', label: 'Oldest to newest', certified: true },
    { value: 'alphabetical-az', label: 'Alphabetically A - Z', certified: false },
    { value: 'alphabetical-za', label: 'Alphabetically Z - A', certified: false }
];

const ownershipOptions = [
    { value: 'black', label: 'Black' },
    { value: 'employee', label: 'Employee' },
    { value: 'family', label: 'Family' },
    { value: 'immigrant', label: 'Immigrant' },
    { value: 'indigenous', label: 'Indigenous' },
    { value: 'lgbtq', label: 'LGBTQ' },
    { value: 'minority', label: 'Minority' },
    { value: 'person-with-disability', label: 'Person with disability' },
    { value: 'veteran', label: 'Veteran' },
    { value: 'women', label: 'Women' }
];


const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

function CommandSearch() {
    return (
        <Command className="rounded-lg shadow md:min-w-[450px] h-[76px] w-full max-w-[824px] flex-row items-center justify-between gap-4 rounded-[40px] bg-white pl-6 pr-2">
            <CommandInput  placeholder="Type a command or search..." />
            {/* <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
        </CommandGroup>
      </CommandList> */}
        </Command>
    )
}

export default function Page() {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto ">
                <div className="flex justify-center mb-5">
                    <CommandSearch />
                    {/* <SortCorp /> */}
                </div>
                <div className="flex justify-between">
                    <div>
                        <Combobox className="mr-4" frameworks={frameworks}>Location</Combobox>
                        <Combobox frameworks={ownershipOptions}>Ownership</Combobox>
                    </div>
                    <Combobox frameworks={sortOptions}>Sort by</Combobox>
                </div>
                <div className=" py-6" >
                    {
                        companies.slice(0, 9).map((item, index) => (
                            <div key={index} className="mb-8 shadow rounded-xl px-6 py-8 bg-white">
                                <h2 className="text-2xl font-bold mb-2">{item["Company name"]}</h2>
                                <p className="text-gray-700 mb-4">{item['Description']}</p>
                                <p className="text-gray-500 mb-2 ">Certified Since</p>
                                <span className="text-sm p-2 rounded-3xl bg-gray-200 my-4">{item['Certified Date']}</span>
                            </div>))
                    }
                </div>


            </div>
        </div>
    )
}