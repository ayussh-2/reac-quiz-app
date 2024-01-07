export default function Questions({ children }) {
    return (
        <div
            id="questions"
            className="text-center md:text-3xl md:p-10 tracking-wider text-xl p-5 mb-5"
        >
            {children}
        </div>
    );
}
