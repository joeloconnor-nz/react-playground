export function InlineLink(props) {
    return (
        <a
            className="decoration-blue-400 hover:text-blue-400 hover:underline"
            href={props.address}
            target="_blank"
        >
            {props.text}
        </a>
    );
}
