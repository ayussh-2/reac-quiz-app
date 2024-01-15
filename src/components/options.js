export default function Options({ children, onHandleAnswer, optNo, qNo }) {
    return (
        <div
            id={`opt`}
            className={`flex group p-1 rounded-3xl cursor-pointer active:scale-95 hover:scale-105 duration-700 `}
            onClick={() => onHandleAnswer({ optNo })}
        >
            <div className="p-2">
                <p
                    id={`s${qNo}-opt${optNo}`}
                    className="text-sm md:text-base duration-300 opttxt"
                >
                    {children}
                </p>
            </div>
            <input
                type="text"
                id={`q${qNo}-opt${optNo}`}
                value={children}
                hidden
                readOnly
            />
        </div>
    );
}
