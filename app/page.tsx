export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow">
          <h1 className="text-4xl font-bold tracking-tight">
            Funding Protocol (Arbitrum • USDC)
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Not a lottery. A transparent protocol that routes contributions to:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Instant rewards</div>
              <div className="text-2xl font-semibold">75%</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Jackpot pool</div>
              <div className="text-2xl font-semibold">5%</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Development</div>
              <div className="text-2xl font-semibold">10%</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Charity</div>
              <div className="text-2xl font-semibold">10%</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-white px-5 py-3 font-semibold text-black hover:opacity-90">
              Connect Wallet (soon)
            </button>
            <button className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 font-semibold text-white hover:bg-white/5">
              View Transparency
            </button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Next step: show live stats, participant list (events), and USDC participation on Arbitrum.
          </p>
        </div>
      </div>
    </main>
  );
}
