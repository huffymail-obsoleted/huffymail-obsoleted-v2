import { Head } from '@inertiajs/react'

declare type Props = {
  version: string,
}

export default function Welcome ({ version }: Props) {
  return (
    <section>
      <Head>
        <title>Laravel</title>
      </Head>

      <div className="p-4">
        <p>Welcome to Laravel v{version}</p>
      </div>
    </section>
  )
}
