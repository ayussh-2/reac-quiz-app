export default function Options({ children, onHandleAnswer, optNo, qNo }) {
    return (
        <div
            id="opt"
            className="flex group p-1 rounded-3xl cursor-pointer   duration-700"
            onClick={() => onHandleAnswer({ optNo })}
        >
            <button
                className="rounded-full bg-white 
                    group-hover:scale-90 group-active:scale-75 duration-200 p-5"
            ></button>
            <div className="p-2">
                <p className="tracking-wider">{children}</p>
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
