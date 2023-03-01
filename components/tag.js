export default function Tag({ text }) {
  return text && text.length > 0 ? <label>{text}</label> : null;
}
