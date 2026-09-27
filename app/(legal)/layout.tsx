export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <div className="container legal">
        <article className="prose">{children}</article>
      </div>
    </div>
  );
}
