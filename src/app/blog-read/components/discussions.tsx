export function Discussions() {
  return (
    <div className="space-y-2">
      <p>No discussions yet. Start a conversation!</p>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Ask a question or start a discussion..."
      />
      <button className="bg-green-500 text-white p-2">Post</button>
    </div>
  );
}
