Airdropper Project — Invariant Test Guarantees (v1)

Scope: smart contract Project.sol (round-based deposits, payouts, JackDrop, emergency refunds).
Tooling: Foundry forge test with invariant fuzzing (high runs/depth) + time-warp (vm.warp) + multi-round sequencing.

What is proven by invariants (high confidence)

1) No double-claim / no replay drain

If payoutClaimed(round, user) == true then payoutAmount(round, user) == 0.

If jackDropClaimed(round) == true then jackDropAmount(round) == 0.
This prevents repeated withdrawals of the same entitlement under arbitrary call ordering.

2) Contract token balance always covers internal accounting

USDC.balanceOf(Project) >= jackpotBalance + devBalance + aggregatorBalance
Holds under random sequences of deposits, closes, claims, emergency flows, and time-warp.

3) Multi-round state isolation (“closed rounds are frozen”)

After a round is closed and the next round opens, the per-round participant entry state does not mutate.
In practice: entriesOf(closedRoundId, user) remains unchanged forever after closure.
This eliminates cross-round state bleed and “retroactive mutation” bugs.

4) Time-dependent edge cases exercised

vm.warp fuzzing explores payout/refund deadline boundaries and ordering.
Ensures behavior remains safe around expiry conditions and mixed call sequences.

What this eliminates (attack classes)

Double-claim / replay drains

State bleed between rounds (round N affecting round N−1)

“Accounting promises > token balance” style insolvency bugs (within tested accounting scope)

Deadline edge-case regressions under adversarial ordering

Version pin

This invariant suite corresponds to git tag: audit-invariants-v1.
