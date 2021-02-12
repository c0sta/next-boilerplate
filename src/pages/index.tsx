import Head from 'next/head'

type Props = {
  title: string
}

const foo = 'ksdjfkajksf'

export default function Home({ title = 'nhaa' }: Props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h2>{title}</h2>
      </main>
    </div>
  )
}
