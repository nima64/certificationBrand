
export default function Footer() {
        const footerSections = [
        {
            title: "The Movement",
            links: [
                "Building the Movement",
                "About B Lab",
                "Support Our Work",
                "Global Network"
            ]
        },
        {
            title: "Standards",
            links: [
                "Building the Movement",
                "Clean standards",
                "Support Our Work",
                "Global Network"
            ]
        },
        {
            title: "Programs & Tools",
            links: [
                "Building the Movement",
                "About B Lab",
                "Support Our Work",
                "Global Network"
            ]
        }
    ];

    return (
        <footer className="py-4">
            <div className="container mx-auto px-4">

                <div className="flex flex-row-gutter-3 justify-center">
                    <div className="flex flex-col-stack-3 p-4 max-w-xl">
                        <p>
                            Sign up to our Insights newsletter, a monthly digest of the latest news on economic systems change from B Lab Global.
                        </p>
                        <input className="p-2 border-1 border-b-3 border-black" placeholder="Email Adress"></input>
                        <input className="p-2 border-1 border-b-3 border-black" placeholder="Organization"></input>
                        <button className="bg-yellow-400 border-yellow-400 flex flex-col items-center border-4 px-16 py-3 font-bold">Submit</button>

                    </div>
                    {footerSections.map((section, index) => (
                        <div key={index} className="flex flex-col-stack-2">
                            <h2 className="font-bold">{section.title}</h2>
                            {section.links.map((link, linkIndex) => (
                                <p key={linkIndex}>{link}</p>
                            ))}
                        </div>
                    ))}
                </div>
                {/* <p className="text-sm text-gray-600">© {new Date().getFullYear()} Clearn Corp. All rights reserved.</p>
                <p className="text-sm text-gray-600">Follow us on 
                    <a href="https://twitter.com" className="text-blue-500 ml-1">Twitter</a> | 
                    <a href="https://facebook.com" className="text-blue-500 ml-1">Facebook</a> | 
                    <a href="https://instagram.com" className="text-blue-500 ml-1">Instagram</a>
                </p> */}
            </div>
        </footer>
    );
}