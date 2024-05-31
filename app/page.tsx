export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="bg-white shadow rounded w-[500px]">
                {/* Card Heading */}
                <div className="flex justify-between py-3 px-5">
                    <h3 className="font-bold tracking-wide">RANKING</h3>
                    <div>Icon</div>
                </div>
                {/* Card List */}
                <ul className="ranking-list list-none">
                    <li className="flex justify-between items-center p-5">
                        <div className="flex items-center">
                            <h4 className="font-bold me-3">1</h4>
                            <span className="text-sm font-bold mt-[-2px]">
                                Ricardo Franklin
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm font-bold me-3">
                                258,244
                            </span>
                            <span>icon</span>
                        </div>
                    </li>
                    <li className="flex justify-between items-center p-5">
                        <div className="flex items-center">
                            <h4 className="font-bold me-3">2</h4>
                            <span className="text-sm font-bold mt-[-2px]">
                                Brandon Lawson
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm font-bold me-3">
                                258,240
                            </span>
                            <span>icon</span>
                        </div>
                    </li>
                    <li className="flex justify-between items-center p-5">
                        <div className="flex items-center">
                            <h4 className="font-bold me-3">3</h4>
                            <span className="text-sm font-bold mt-[-2px]">
                                Ruby Shelton
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm font-bold me-3">
                                258,000
                            </span>
                            <span>icon</span>
                        </div>
                    </li>
                </ul>
                {/* Card Footer */}
                <div className="flex items-center justify-center h-[150px]">
                    {/* Exit Button */}
                    <button className="text-gray-400 py-3 px-5 rounded-full me-5">
                        EXIT
                    </button>
                    <button className="bg-blue-500 text-white py-3 px-5 rounded-full">
                        CONTINUE
                    </button>
                </div>
            </div>
        </main>
    );
}
