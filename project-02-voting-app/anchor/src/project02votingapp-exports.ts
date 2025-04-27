// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import Project02votingappIDL from '../target/idl/project02votingapp.json'
import type { Project02votingapp } from '../target/types/project02votingapp'

// Re-export the generated IDL and type
export { Project02votingapp, Project02votingappIDL }

// The programId is imported from the program IDL.
export const PROJECT02VOTINGAPP_PROGRAM_ID = new PublicKey(Project02votingappIDL.address)

// This is a helper function to get the Project02votingapp Anchor program.
export function getProject02votingappProgram(provider: AnchorProvider, address?: PublicKey) {
  return new Program({ ...Project02votingappIDL, address: address ? address.toBase58() : Project02votingappIDL.address } as Project02votingapp, provider)
}

// This is a helper function to get the program ID for the Project02votingapp program depending on the cluster.
export function getProject02votingappProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Project02votingapp program on devnet and testnet.
      return new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF')
    case 'mainnet-beta':
    default:
      return PROJECT02VOTINGAPP_PROGRAM_ID
  }
}
