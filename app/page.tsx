import Image from "next/image";
export default function Home() {
    return (
        <div className="background-accent">
            <main className="flex-col-stack-6 container mx-auto max-h-full p-4">
                <div className="grid grid-cols-6 gap-8 lg:grid-cols-12">
                    {/* LEFT HERO */}
                    <div className="col-span-6 hidden lg:flex">
                        <div className="flex-col-stack-3 mx-auto w-80 ">
                            <h1 data-testid="hero-header " className="text-6xl font-bold my-3">Make Business a Force For Good</h1>
                            <p className="my-4">B Lab is the nonprofit network transforming the global economy to benefit all people, communities,
                                and the planet.</p>
                            <p className="font-bold my-4">{"We won't stop until all business is a force for good."}</p>
                            <a type="button"
                                className="bg-yellow-400 rounded-3xl lg:max-w-max border-yellow-400 flex flex-col items-center border-4 px-16 py-3 font-bold"
                                target="_blank" href="https://donate.bcorporation.net/give/333999/#!/donation/checkout">
                                Donate today
                            </a>
                        </div>
                    </div>
                    {/* RIGHT GRID GALLERY*/}
                    <div className="col-span-6 hidden lg:flex">
                        <div className="flex-row-gutter-3">
                            <div className="flex-col-stack-3">
                                <Image
                                    alt=""
                                    loading="lazy"
                                    width={320}
                                    height={303}
                                    decoding="async"

                                    style={{ color: "transparent" }}
                                    // srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-crowd%402x.96ac5714.png&w=384&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-crowd%402x.96ac5714.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 2x"
                                    src="/homepage_gallery/b-crowd@2x.webp"
                                />

                                <div
                                    className="flex flex-col items-center py-8 text-white"
                                    style={{ backgroundColor: "#076e95" }}
                                >
                                    <div className="text-4xl font-bold">1,002,035</div>
                                    <div className="text-2xl text-center">Workers</div>
                                </div>
                                <Image
                                    alt=""
                                    loading="lazy"
                                    width={321}
                                    height={212}
                                    decoding="async"

                                    style={{ color: "transparent" }}
                                    src="/homepage_gallery/sd-g-thats-a-cool-box@2x.webp"
                                />
                            </div>
                            <div className="flex-col-stack-3">
                                <div
                                    className="flex flex-col items-center py-8 text-white"
                                    style={{
                                        backgroundColor: "#ef4044",
                                    }}>
                                    <div className="text-4xl font-bold">1</div>
                                    <div className="text-2xl text-center">Unifying goal</div>
                                </div>
                                <Image
                                    alt=""
                                    data-nimg="1"
                                    decoding="async"
                                    height="444"
                                    loading="lazy"
                                    src="/homepage_gallery/b-microphone@2x.webp"
                                    style={{
                                        color: "transparent",
                                    }}
                                    width="320"
                                />
                                <div
                                    className="flex flex-col items-center py-8 text-white"
                                    style={{
                                        backgroundColor: "#076e95",
                                    }}>
                                    <div className="text-4xl font-bold">10,000</div>
                                    <div className="text-2xl text-center">Companies</div>
                                </div>
                                <div
                                    className="flex flex-col items-center py-8 text-white"
                                    style={{
                                        backgroundColor: "#076e95",
                                    }}>
                                    <div className="text-4xl font-bold">160</div>
                                    <div className="text-2xl text-center">Industries</div>
                                </div>

                            </div>
                            <div className="flex-col-stack-3">
                                <Image
                                    alt=""
                                    data-nimg="1"
                                    decoding="async"
                                    height="519"
                                    loading="lazy"
                                    src="/homepage_gallery/b-decal@2x.webp"
                                    style={{
                                        color: "transparent",
                                    }}
                                    width="317"
                                />
                                <div
                                    className="flex flex-col items-center py-8 text-white"
                                    style={{
                                        backgroundColor: "#076e95",
                                    }}>
                                    <div className="text-4xl font-bold">103</div>
                                    <div className="text-2xl text-center">Countries</div>
                                </div>
                                <Image
                                    alt=""
                                    data-nimg="1"
                                    decoding="async"
                                    height="431"
                                    loading="lazy"

                                    src="/homepage_gallery/b-hilarious@2x.webp"
                                    style={{
                                        color: "transparent",
                                    }}
                                    width="320"
                                />
                            </div>
                        </div>
                        {/* <div className="flex-row-gutter-3">
                        <div className="flex-col-stack-3">
                            <Image
                                alt=""
                                loading="lazy"
                                width={320}
                                height={303}
                                decoding="async"

                                style={{ color: "transparent" }}
                                // srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-crowd%402x.96ac5714.png&w=384&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-crowd%402x.96ac5714.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 2x"
                                src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-crowd%402x.96ac5714.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46"
                            />
                            <div
                                className="flex flex-col items-center py-8 text-white"
                                style={{ backgroundColor: "#076e95" }}
                            >
                                <div className="text-4xl font-bold">1,002,035</div>
                                <div className="text-2xl text-center">Workers</div>
                            </div>
                            <Image
                                alt=""
                                loading="lazy"
                                width={321}
                                height={212}
                                decoding="async"

                                style={{ color: "transparent" }}
                                // srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsd-g-thats-a-cool-box%402x.0c4b4370.png&w=384&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsd-g-thats-a-cool-box%402x.0c4b4370.png&w=750&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 2x"
                                src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsd-g-thats-a-cool-box%402x.0c4b4370.png&w=750&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46"
                            />
                        </div>
                        <div className="flex-col-stack-3">
                            <div
                                className="flex flex-col items-center py-8 text-white"
                                style={{ backgroundColor: "#ef4044" }}
                            >
                                <div className="text-4xl font-bold">1</div>
                                <div className="text-2xl text-center">Unifying goal</div>
                            </div>
                            <Image
                                alt=""
                                loading="lazy"
                                width={320}
                                height={444}
                                decoding="async"

                                style={{ color: "transparent" }}
                                // srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-microphone%402x.7331535e.png&w=384&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-microphone%402x.7331535e.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 2x"
                                src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-microphone%402x.7331535e.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46"
                            />
                            <div
                                className="flex flex-col items-center py-8 text-white"
                                style={{ backgroundColor: "#076e95" }}
                            >
                                <div className="text-4xl font-bold">10,000</div>
                                <div className="text-2xl text-center">Companies</div>
                            </div>
                            <div
                                className="flex flex-col items-center py-8 text-white"
                                style={{ backgroundColor: "#076e95" }}
                            >
                                <div className="text-4xl font-bold">160</div>
                                <div className="text-2xl text-center">Industries</div>
                            </div>
                        </div>
                        <div className="flex-col-stack-3">
                            <Image
                                alt=""
                                loading="lazy"
                                width={317}
                                height={519}
                                decoding="async"

                                style={{ color: "transparent" }}
                                src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-decal%402x.ddfe2cc4.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46"
                            />
                            <div
                                className="flex flex-col items-center py-8 text-white"
                                style={{ backgroundColor: "#076e95" }}
                            >
                                <div className="text-4xl font-bold">103</div>
                                <div className="text-2xl text-center">Countries</div>
                            </div>
                            <Image
                                alt=""
                                loading="lazy"
                                width={320}
                                height={431}
                                decoding="async"

                                style={{ color: "transparent" }}
                                // srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-hilarious%402x.394c7dc1.png&w=384&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-hilarious%402x.394c7dc1.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46 2x"
                                src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fb-hilarious%402x.394c7dc1.png&w=640&q=75&dpl=dpl_CFdaBxp1nexZs1AbEVjgfUMFSJ46"
                            />
                        </div>
                    </div> */}

                    </div>
                </div>

            </main>
        </div>);
}
