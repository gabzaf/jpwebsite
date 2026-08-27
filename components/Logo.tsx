import Link from "next/link";

type Props = {
  href?: string;
};

export function Logo({ href = "/" }: Props) {
  return (
    <Link className="logo" href={href}>
      <img src="/Logo2Grafite.png" alt="Alves Jatobá Creative Studio" />
    </Link>
  );
}
