export function meta() {
  return [
    { title: "Porter Nilsson" },
    { name: "description", content: "Porter Nilsson's Personal Site" },
  ];
}

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>
      </div>
    </section>
  );
}
