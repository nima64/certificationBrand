const navList = [
    { title: "The Movement" },
    { title: "Standards" },
    { title: "Programs & Tools" },
    { title: "About B Corps" },
    { title: "Find a B Corp" },
    { title: "News" },
];

export default function Nav() {
    return (
        <div className=" mx-auto px-4 container sticky ">
            <div className=" flex-row flex flex-grow items-center">
                <nav className="flex flex-row flex-grow justify-between">
                    <div className="flex">
                        {
                            navList.map((item, index) => (
                                <a
                                    key={index}
                                    href={`/${item.title.toLowerCase().replace(/ /g, '-')}`}
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