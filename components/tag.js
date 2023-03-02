export default function Tag({ text }) {
  return text && text.length > 0 ? (
    //<label className="rounded bg-slate-500 text-blue-50 px-4 mr-4">
    <label className="text-slate-500  mr-4 text-sm">{text}</label>
  ) : null;
}
