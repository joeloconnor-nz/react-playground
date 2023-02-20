export function Card(props) {
    const { description, duration } = props;

    const formattedDuration =
        duration === 1 ? `${duration} min` : `${duration} mins`;

    const imageSrc =
        props.imageSrc || 'https://via.placeholder.com/350x225.png';

    return (
        <li className="overflow-hidden rounded-md bg-red-100">
            <img className="w-full" src={imageSrc} />
            <div className="flex flex-col bg-white p-5">
                <p className="mb-5">{description}</p>
                <div className="flex items-center justify-between text-stone-500">
                    <div>
                        <button className="rounded-l-md border-y-2 border-l-2 py-1 px-2 transition ease-in-out hover:bg-slate-200">
                            View
                        </button>
                        <button className="rounded-r-md border-2 py-1 px-2 transition ease-in-out hover:bg-slate-200">
                            Edit
                        </button>
                    </div>
                    <span className="text-sm">{formattedDuration}</span>
                </div>
            </div>
        </li>
    );
}
