import Link from "next/link";

const navList = [
    // { title: "CLEAN" , url:'/'},
    // { title: "Standards" },
    // { title: "Programs & Tools" },
    // { title: "About B Corps" },
    { title: "Find a Clearn Corp", url: "/find-a-corp" },
    // { title: "News" },
];

export default function Nav() {
    return (
        <div className="sticky top-0 bg-white shadow shadow-gray-200 z-50">
            <div className=" mx-auto px-4 container flex-row flex flex-grow items-center">
                <nav className="flex flex-row flex-grow justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="mr-4">
                            <img className="w-auto h-13" src={"/images/branding/Logotipo-Cl3an-12.png"}/>
                        </Link>
                        {
                            navList.map((item, index) => (
                                <a
                                    key={index}
                                    href={`${item.url.toLowerCase().replace(/ /g, '-')}`}
                                    className="py-6 mr-4 font-bold text-sm"
                                >
                                    {item.title}
                                </a>
                            ))
                        }
                    </div>
                </nav>
                <div>
                    <a className="mr-2 rounded-md border-2 border-solid border-black text-base px-4 py-3">Donate</a>
                    <a className="rounded-md border-2 border-solid border-black bg-black text-white text-base px-4 py-3">login</a>
                </div>
            </div>
        </div>
    );
}