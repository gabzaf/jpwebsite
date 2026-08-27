import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/">
      <span className="monogram" aria-hidden="true">
        <span className="monogram-a">a</span>
        <span className="monogram-j">j</span>
      </span>
      <span className="logo-texto">
        <span className="logo-nome">Alves Jatobá</span>
        <span className="logo-tag">Creative Studio</span>
      </span>
    </Link>
  );
}
