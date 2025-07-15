const navList = [
  { title: "The Movement" },
  { title: "Standards" },
  { title: "Programs & Tools" },
  { title: "About B Corps" },
  { title: "Find a B Corp" },
  { title: "News" },
];

export default function Nav() {
    return(
        <div className="sticky shadow-md">
            <nav className="mx-auto max-w-6xl flex flex-row justify-between">
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
                    {/* <a href="/about" className="py-4 mr-4">About</a>
                    <a href="/services" className="py-4 mr-4">Services</a>
                    <a href="/contact" className="py-4 mr-4">Contact</a> */}
                </div>
                <div>
                    <button className="mr-4">Donate</button>
                    <a>login</a>
                </div>
            </nav>
        </div>
    );
}