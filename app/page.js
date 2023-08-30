import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Decentralized Governance on NEAR
          {/* <code className={styles.code}>#NEARWorkshops</code> */}
        </p>
        <div>
          <a
            href="https://neardc.org/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/NDCLogo.svg"
              alt="NDC Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/NDCLogo.svg"
          alt="NEAR Digital Collective Logo"
          width={300}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
      <a
          href="https://neardc.org/home"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            🏠 NDC BOS Gateway<span>-&gt;</span>
          </h2>
          <p>NDC Gateway, your portal to NDC BOS products.</p>
        </a>
        <a
          href="https://i-am-human.app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
             ✅ Verify As A Human<span>-&gt;</span>
          </h2>
          <p>Get your human-sbt & becoming a voting meber for the NDC</p>
        </a>
        <a
          href="https://neardc.org/wg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ✨ Constellations<span>-&gt;</span>
          </h2>
          <p>Join a vertical in the NDC and build community today!</p>
        </a>

        <a
          href="https://neardc.org/nominate"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          🗳️ NDC Nominations<span>-&gt;</span>
          </h2>
          <p>If you are an OG run for office in NDC Congress, if you are a human, comment on candidates' platforms.</p>
        </a>

        <a
          href="https://neardc.org/docs"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            📚 NDC Docs <span>-&gt;</span>
          </h2>
          <p>NEAR Digital Collective's public knowledge base built on BOS</p>
        </a>
        <a
          href="https://neardc.org/poll"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            📊 NDC Easy Poll <span>-&gt;</span>
          </h2>
          <p>NDC Polls</p>
        </a>
        <a
          href="https://neardc.org/funding"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            💸 Funding Dashboard<span>-&gt;</span>
          </h2>
          <p>Track funding across NDC trust, congressional bodies, and constellations.</p>
        </a>

        <a
          href="https://neardc.org/office-hours"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ⏰ Office Hours<span>-&gt;</span>
          </h2>
          <p>Get Help from NDC leadership in their office hours & setup your own schedule.</p>
        </a>
        <a
          href="https://neardc.org/updates"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            📣 NDC Say A Lot<span>-&gt;</span>
          </h2>
          <p>Check out the say-a-lot BOS widget to see what key members of the NDC are saying.</p>
        </a>
        <a
          href="https://neardc.org/sbt-holderes"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            📛 SBT Holders<span>-&gt;</span>
          </h2>
          <p>See the OGs, Human, Regens, Vibees, and everyone that has a community SBT!</p>
        </a>
      </div>
    </main>
  )
}
