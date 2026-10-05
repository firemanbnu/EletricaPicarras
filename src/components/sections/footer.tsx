export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Elétrica Picarras. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}