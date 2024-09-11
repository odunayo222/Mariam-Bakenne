export default function Button(props) {
  return (
    <>
        <a href={`${props.link}`} className={`${props.background} ${props.hover} ${props.textColor} font-bold py-2 px-4 border border-gray-800 rounded`}>{props.content}</a>
    </>
  );
}