import { useLoading } from "@/app/providers/LoadingProvider";
import "./Loader.css";

export function Loader() {
    const { isLoading } = useLoading();

    return (
        <div
            className={`
                fixed inset-0 z-50 flex flex-col items-center justify-center
                transition-all duration-500 ease-out bg-black/85
                ${
                    isLoading
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-[120%] opacity-0 pointer-events-none"
                }
            `}
            aria-hidden={!isLoading}
            aria-busy={isLoading}
        >
            <ul
                className="relative w-50 h-35 rounded-[14px] shadow-2xl 
                shadow-[#8c64cc] bg-gradient-to-br from-violet-500 to-violet-800"
            >
                {Array.from({ length: 6 }).map((_, i) => {
                    const index = i + 1;

                    return (
                        <li
                            key={index}
                            className={`
                                    absolute top-[10px] left-[10px] origin-right-middle 
                                    text-violet-200
                                    ${index === 1 && "rotate-y-0 opacity-40"}
                                    ${index === 6 && "rotate-y-180 opacity-40"}
                                    ${index >= 2 && index <= 5 && `page-anim animate-page-${index}`}
                                `}
                        >
                            <svg
                                viewBox="0 0 90 120"
                                className="block w-[90px] h-[120px]"
                                fill="currentColor"
                            >
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z" />
                            </svg>
                        </li>
                    );
                })}
            </ul>

            <span className="block mt-5 text-center font-medium text-violet-300">Loading...</span>
        </div>
    );
}
