"use client";
// import { data } from "./data";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { companies } from "./companies_data";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";


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

function CommandDemo() {
    return (
        <Command className="rounded-lg shadow md:min-w-[450px] h-[76px] w-full max-w-[824px] flex-row items-center justify-between gap-4 rounded-[40px] bg-white pl-6 pr-2">
            <CommandInput placeholder="Type a command or search..." />
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
function Combobox(props: any) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? props?.frameworks.find((framework:any) => framework.value === value)?.label
                        : props.children}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {props?.frameworks.map((framework:any) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
function OwnershipCombobox() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Location"}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
function SortbyCombobox(props: any) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : props.children}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework:any) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


// function SortCorp() {
//     return (
//         <div className="mb-4">
//             Sort by
//             <select className="ml-2 p-2 border rounded">
//                 {options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                         {option.label}
//                     </option>
//                 ))}
//             </select>
//             <div className="flex justify-center">

//             </div>
//         </div>
//     );
// }

export default function Page() {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto ">
                <div className="flex justify-center mb-5">
                    <CommandDemo />
                    {/* <SortCorp /> */}
                </div>
                <div className="flex justify-between">
                    <div>
                        <Combobox frameworks={frameworks}>Location</Combobox>
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