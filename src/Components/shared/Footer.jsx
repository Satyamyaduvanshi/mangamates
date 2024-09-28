import { BsDiscord,BsGithub,BsX} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer(){
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <footer className="relative footer w-full flex justify-center items-center flex-col px-2 py-4 h-[300px]">
            <div className="text-center py-2 border-t-[1px] w-[320px]">
               
                MangaMate
            </div>
            <div className="flex items-center h-[30px] mx-[40px] justify-center py-2">
                <div className="github-icon mx-[6px]">
                    <a 
                    href="https://github.com/Satyamyaduvanshi"
                    aria-label="Github link"
                    className="align-middle"
                    >
                    <BsGithub size={30} />
                    </a>
                </div>
                <div className="discord-icon mx-[6px]">
                    <a 
                    href=""
                    aria-label="Discord link"
                    className="align-middle"
                    >
                    <BsDiscord size={30} />
                    </a>
                </div>
                <div className="x-icon mx-[6px]">
                    <a 
                    href="https://x.com/ysatyaa"
                    aria-label="X link"
                    className="align-middle"
                    >
                    <BsX size={30} />
                    </a>
                </div>
            </div>
            <p className="max-w-[640px] text-slate-400 text-sm px-2 h-[104px] overflow-y-scroll">
                   MangaMate is not affiliated with or endorsed by any of the anime studios behind the creation of the anime presented on this site. This website is only a user interface presenting/linking various self-hosted files across the internet by other third-party providers for easy access. 
            </p>
            <p className="py-2 font-bold max-md: text-center">
                        © MANGAMATE | {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer