
function AppCard({ app }: { app: any }) {
    return (
        <div className="group bg-white dark:bg-darkTheme rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:-translate-y-2 duration-500 shadow-sm">

            {/* Banner */}
            <div
                className={`h-48 bg-gradient-to-br ${app.gradient} flex items-center justify-center text-6xl`}
            >
                <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                    {/* <div
                        className={`w-12 h-12 rounded-xl ${app.iconBg} flex items-center justify-center text-2xl`} style={{ backgroundImage: `url(${app.icon})` }}
                    >

                    </div> */}

                    <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${app.badgeColor}`}
                    >
                        {app.categoryLabel}
                    </span>
                </div>

                <h3 className="font-semibold text-lg dark:text-white">
                    {app.name}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
                    {app.description}
                </p>

                {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1">
                        <DownloadIcon />
                        {app.downloads}
                    </span>

                    <span className="flex items-center gap-1">
                        <StarIcon />
                        {app.rating}
                    </span>

                    <span className="flex items-center gap-1">
                        <UsersIcon />
                        {app.users}
                    </span>
                </div> */}

                <a
                    href={app.playstoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-black dark:border-white rounded-full py-2.5 hover:bg-lime-300 dark:hover:bg-darkHover duration-300"
                >
                    <PlayStoreIcon />
                    View App
                </a>
            </div>
        </div>
    );
}
function StarIcon() {
    return (
        <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
    );
}

function PlayStoreIcon() {
    return (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M3.18 23.76a2 2 0 001.1-.33l12.78-7.38-2.85-2.85L3.18 23.76zM.31 1.11A2 2 0 000 2v20a2 2 0 00.31.89l.11.1 11.2-11.2v-.27L.42 1 .31 1.11zM22.47 10.37l-2.92-1.69-3.16 3.16 3.16 3.17 2.94-1.7a2 2 0 000-2.94zM4.28.57l12.78 7.38-2.85 2.85L4.28.57z" />
        </svg>
    );
}

export default function Work() {
    const apps = [
        {
            id: 1,
            name: "KTM India",
            category: "Automobile",
            categoryLabel: "Automobile",
            icon: './assets/KTMLogo.png',
            iconBg: "bg-emerald-50",
            badgeColor: "bg-emerald-100 text-emerald-800",
            description:
                "It’s a single app that helps KTM riders manage servicing, paperwork, and useful riding information from one place.",
            downloads: "24k",
            rating: "4.7",
            users: "18k",
            gradient: "from-emerald-50 to-emerald-200",
            playstoreLink: "https://play.google.com/store/apps/details?id=com.excellonsoft.bajajcarektm&pcampaignid=web_share",
        },
        {
            id: 2,
            name: "Rular App",
            category: "Utilities",
            categoryLabel: "Utilities",
            icon: "./assets/rularapp.png",
            iconBg: "bg-amber-50",
            badgeColor: "bg-amber-100 text-amber-800",
            description:
                "An ARCore-powered ruler app that measures real-world objects using your phone camera with high accuracy and real-time AR overlays.",
            downloads: "51k",
            rating: "4.8",
            users: "40k",
            gradient: "from-amber-50 to-amber-200",
            playstoreLink: "https://github.com/vishpatil1999/RularApp.git",
        },
         {
            id: 3,
            name: "Truimph India",
            category: "Automobile",
            categoryLabel: "Automobile",
            icon: './assets/truimph.png',
            iconBg: "bg-emerald-50",
            badgeColor: "bg-emerald-100 text-emerald-800",
            description:
                "It’s a single app that helps Triumph riders manage servicing, paperwork, and useful riding information from one place.",
            downloads: "24k",
            rating: "4.7",
            users: "18k",
            gradient: "from-emerald-50 to-emerald-200",
            playstoreLink: "https://play.google.com/store/apps/details?id=com.excellonsoft.bajajtriumph&pcampaignid=web_share",
        },
        {
            id: 3,
            name: "CMS One App",
            category: "finance",
            categoryLabel: "Finance",
            icon: "./assets/mobile-icon.png",
            iconBg: "bg-blue-50",
            badgeColor: "bg-blue-100 text-blue-800",
            description:
                "Track expenses, set budgets, and visualize your spending habits with beautiful charts.",
            downloads: "32k",
            rating: "4.6",
            users: "25k",
            gradient: "from-blue-50 to-blue-200",
            playstoreLink: "https://play.google.com/store/apps/details?id=com.cms.oneconnect&pcampaignid=web_share",
        },
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>

        </div>
    )
}