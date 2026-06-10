import type { Scenario } from '@/engine/types'
import { silentLedger } from './silent-ledger'

/**
 * The scenario catalogue. Adding a war game is a one-line change here plus a data
 * file — the engine needs no edits. See SCHEMA.md for the authoring contract.
 */
export const SCENARIOS: Scenario[] = [silentLedger]

const BY_ID = new Map(SCENARIOS.map((s) => [s.id, s]))

export function getScenario(id: string): Scenario | undefined {
  return BY_ID.get(id)
}

export function listScenarios(): Scenario[] {
  return SCENARIOS
}
