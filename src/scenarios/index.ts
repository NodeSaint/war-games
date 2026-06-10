import type { Scenario } from '@/engine/types'
import { silentLedger } from './silent-ledger'
import { greyCascade } from './grey-cascade'
import { nightCrossing } from './night-crossing'

/**
 * The scenario catalogue. Adding a war game is a one-line change here plus a data
 * file — the engine needs no edits. See SCHEMA.md for the authoring contract.
 * Ordered flagship-first, then by ascending difficulty.
 */
export const SCENARIOS: Scenario[] = [silentLedger, greyCascade, nightCrossing]

const BY_ID = new Map(SCENARIOS.map((s) => [s.id, s]))

export function getScenario(id: string): Scenario | undefined {
  return BY_ID.get(id)
}

export function listScenarios(): Scenario[] {
  return SCENARIOS
}
