import { BsDiscord, BsGithub, BsX } from "react-icons/bs";

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative rounded footer w-full flex flex-col justify-center items-center px-4 py-8 h-[400px] shadow-lg bg-gradient-to-br from-gray-50 via-white to-white dark:from-gray-600 dark:via-gray-800 dark:to-gray-950 transition-colors duration-300">
            
            {/* Footer Title */}
            <div className="text-center py-4 border-t-[1px] w-full border-gray-300 dark:border-gray-700 text-3xl font-bold text-black dark:text-white">
                MangaMate
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center h-[40px] space-x-8 justify-center py-4 text-black dark:text-white">
                <a
                    href="https://github.com/Satyamyaduvanshi"
                    aria-label="Github link"
                    className="github-icon"
                >
                    <BsGithub size={40} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" />
                </a>

                <a
                    href=""
                    aria-label="Discord link"
                    className="discord-icon"
                >
                    <BsDiscord size={40} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" />
                </a>

                <a
                    href="https://x.com/ysatyaa"
                    aria-label="X link"
                    className="x-icon"
                >
                    <BsX size={40} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" />
                </a>
            </div>

            {/* Description Text */}
            <p className="max-w-[720px] text-black dark:text-white text-lg px-4 text-center mt-4 mb-6">
                MangaMate provides easy access to publicly available manga content from third-party providers. We do not host or own any of the manga displayed on this site. All content is the property of their respective owners, and this site serves as a platform for manga enthusiasts to discover and enjoy.
            </p>

            {/* Footer Bottom Text */}
            <p className="py-4 text-lg font-bold text-center text-black dark:text-white">
                © MANGAMATE | {new Date().getFullYear()}
            </p>

            {/* Subtle Background Effect */}
            <div className="absolute inset-0 z-[-1] backdrop-blur-sm">
                <div className="h-full w-full bg-gradient-to-tl from-gray-200/10 to-transparent dark:from-gray-900/10 blur-2xl rounded-full"></div>
            </div>
        </footer>
    );
}

export default Footer;
