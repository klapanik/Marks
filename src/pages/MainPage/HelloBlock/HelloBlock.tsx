import "./HelloBlock.css";

export function HelloBlock({ userName }: { userName: string }) {
    return (
        <section
            className="rounded-lg p-6 w-full flex justify-between gradient-block 
            shadow-2xl transition-all duration-500"
        >
            <div>
                <h2 className="font-bold text-2xl">
                    Добро пожаловать,
                    <span className="cursor-pointer flowtext"> {userName}</span>!
                </h2>
                <p className="text-gray-500">9А класс</p>
            </div>

            <div>
                <p className="text-gray-500">суббота, 18 октября</p>
                <p>Уроки закончились</p>
            </div>
        </section>
    );
}
