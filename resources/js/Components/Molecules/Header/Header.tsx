import { Link } from '@inertiajs/react'

export const Header = () => {
  return (
    <section className="border-b border-gray-200">
      <div className="flex justify-between items-center px-4 mx-auto h-16 max-w-7xl">
        <div>
          <Link href="/" className="font-bold text-lg">
            Huffymail
          </Link>
        </div>

        <div/>
      </div>
    </section>
  )
}
