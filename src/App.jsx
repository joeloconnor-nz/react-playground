import { InlineLink } from './components/inline-link';
import { Card } from './components/card';

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
                            className="rounded-md border-2 bg-blue-400 p-2 text-white transition ease-in-out hover:bg-blue-500"
                            href="#"
                        >
                            Main action
                        </a>
                        <a
                            className="rounded-md border-2 bg-slate-400 p-2 text-white transition ease-in-out hover:bg-slate-500"
                            href="#"
                        >
                            Secondary action
                        </a>
                    </div>
                </section>
                <section className="bg-stone-100 p-10">
                    <ul className="mx-auto grid max-w-screen-lg grid-cols-3 gap-10">
                        <Card
                            description="Card component with an undefined imageSrc prop."
                            duration={9}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={28}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={1}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={5}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={33}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={42}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={5}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={18}
                        />
                        <Card
                            imageSrc="https://loremflickr.com/350/225"
                            description="This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer."
                            duration={10}
                        />
                    </ul>
                </section>
            </main>
            <footer>
                <div className="mx-auto flex max-w-screen-lg justify-between py-10 text-stone-500">
                    <section>
                        <p>
                            Recreation of a{' '}
                            <InlineLink
                                address="https://getbootstrap.com/docs/4.0/examples/album/"
                                text="Bootstrap Album template"
                            />{' '}
                            using{' '}
                            <InlineLink
                                address="https://vitejs.dev"
                                text="Vite"
                            />{' '}
                            and{' '}
                            <InlineLink
                                address="https://tailwindcss.com"
                                text="Tailwind"
                            />
                            .
                        </p>
                        <p>
                            Follow me on{' '}
                            <InlineLink
                                address="https://github.com/joeloconnor-nz"
                                text="GitHub"
                            />
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
                            className="decoration-blue-400 hover:text-blue-400 hover:underline"
                        >
                            Back to top ↑
                        </button>
                    </span>
                </div>
            </footer>
        </div>
    );
}
