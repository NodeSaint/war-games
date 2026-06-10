import type { Scenario } from '@/engine/types'
import { silentLedger } from './silent-ledger'
import { porcelainTide } from './porcelain-tide'
import { atlanticTilt } from './atlantic-tilt'
import { narrowWaters } from './narrow-waters'
import { greyCascade } from './grey-cascade'
import { northernTithe } from './northern-tithe'
import { tridentPact } from './trident-pact'
import { nightCrossing } from './night-crossing'

/**
 * The scenario catalogue. Adding a war game is a one-line change here plus a data
 * file — the engine needs no edits. See SCHEMA.md for the authoring contract.
 * Ordered flagship-first, then broadly by descending difficulty.
 */
export const SCENARIOS: Scenario[] = [
  silentLedger,
  porcelainTide,
  atlanticTilt,
  narrowWaters,
  greyCascade,
  northernTithe,
  tridentPact,
  nightCrossing,
]

const BY_ID = new Map(SCENARIOS.map((s) => [s.id, s]))

export function getScenario(id: string): Scenario | undefined {
  return BY_ID.get(id)
}

export function listScenarios(): Scenario[] {
  return SCENARIOS
}
