import BookmarkButton from "./BookmarkButton";

export default function MessageCard({
  id, title, body, verse
}: { id: string; title: string; body: string; verse?: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold leading-snug">{title}</h2>
        <BookmarkButton id={id} />
      </div>
      <p className="text-base leading-relaxed text-gray-800">{body}</p>
      {verse && (
        <div className="text-sm text-gray-500">📖 {verse}</div>
      )}
    </div>
  );
}
