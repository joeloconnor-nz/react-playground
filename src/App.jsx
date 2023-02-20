export default function App() {
    return (
        <div className="mx-auto flex flex-col">
            <header className="bg-slate-700 py-3 px-4 text-white">
                <div className="mx-auto max-w-screen-lg">
                    <span></span>
                    <p className="text-lg font-bold text-stone-50">
                        Album example
                    </p>
                </div>
            </header>
            <main>
                <section className="flex flex-col items-center py-24">
                    <h1 className="text-5xl font-light text-stone-700">
                        Card example
                    </h1>
                    <p className="max-w-xl p-2 text-center text-stone-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vehicula mauris eget enim ultricies condimentum.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames egestas. Nullam non fringilla est.
                    </p>
                    <div className="flex gap-3 p-4">
                        <a
                            className="rounded-md border-2 bg-blue-400 p-2 text-white"
                            href="#"
                        >
                            Main action
                        </a>
                        <a
                            className="rounded-md border-2 bg-slate-400 p-2 text-white"
                            href="#"
                        >
                            Secondary action
                        </a>
                    </div>
                </section>
                <section className="bg-stone-100 p-10">
                    <ul className="mx-auto grid max-w-screen-lg grid-cols-3 gap-10">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </ul>
                </section>
            </main>
            <footer>
                <div className="mx-auto flex max-w-screen-lg justify-between py-10 text-stone-500">
                    <section>
                        <p>
                            Recreation of a{' '}
                            <a
                                className="decoration-blue-400 hover:text-blue-400 hover:underline"
                                href="https://getbootstrap.com/docs/4.0/examples/album/"
                                target="_blank"
                            >
                                Bootstrap Album template
                            </a>{' '}
                            using{' '}
                            <a
                                className="decoration-blue-400 hover:text-blue-400 hover:underline"
                                href="https://vitejs.dev"
                                target="_blank"
                            >
                                Vite{' '}
                            </a>
                            and{' '}
                            <a
                                className="decoration-blue-400 hover:text-blue-400 hover:underline"
                                href="https://tailwindcss.com"
                                target="_blank"
                            >
                                Tailwind
                            </a>
                            .
                        </p>
                        <p>
                            Follow me on{' '}
                            <a
                                className="decoration-blue-400 hover:text-blue-400 hover:underline"
                                href="https://github.com/joeloconnor-nz"
                                target="_blank"
                            >
                                GitHub
                            </a>
                            .
                        </p>
                    </section>
                    <span>
                        <button
                            onClick={() =>
                                window.scroll({
                                    top: 0,
                                    behavior: 'smooth',
                                })
                            }
                        >
                            Back to top
                        </button>
                    </span>
                </div>
            </footer>
        </div>
    );
}

function Card() {
    return (
        <li className="overflow-hidden rounded-md bg-red-100">
            <img
                className="w-full"
                src="https://via.placeholder.com/350x225.png"
            />
            <div className="flex flex-col bg-white p-5">
                <p className="mb-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
                <div className="flex items-center justify-between text-stone-500">
                    <div>
                        <button className="rounded-l-md border-y-2 border-l-2 py-1 px-2">
                            View
                        </button>
                        <button className="rounded-r-md border-2 py-1 px-2">
                            Edit
                        </button>
                    </div>
                    <span className="text-sm">9 mins</span>
                </div>
            </div>
        </li>
    );
}

function Link(props) {
    return <a href={props.address}>{props.text}</a>;
}
