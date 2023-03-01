export default function Tag({ text }) {
  return text && text.length > 0 ? (
    <label className="bg-slate-700 text-blue-50 px-4 mr-4">{text}</label>
  ) : null;
}
