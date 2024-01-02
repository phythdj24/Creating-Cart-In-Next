import Image from 'next/image'
import styles from './page.module.css'
import ExampleClient from 'src/components/ExampleClient'


export default function Home() {
  console.log("Where Do i render")
  return (
    <main className={styles.main}>
      
<h1>hello</h1>
<ExampleClient />

    </main>
  )
}
