import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img className="h-8 w-auto" src="https://www.blockchaininafrica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblockchain-in-africa-logo.9135844a.png&w=256&q=75" alt="Cruip" />
    </Link>
  )
}
