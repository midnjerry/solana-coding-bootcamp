import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'
import { Project02votingapp } from '../target/types/project02votingapp'

describe('project02votingapp', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Project02votingapp as Program<Project02votingapp>

  const project02votingappKeypair = Keypair.generate()

  it('Initialize Project02votingapp', async () => {
    await program.methods
      .initialize()
      .accounts({
        project02votingapp: project02votingappKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([project02votingappKeypair])
      .rpc()

    const currentCount = await program.account.project02votingapp.fetch(project02votingappKeypair.publicKey)

    expect(currentCount.count).toEqual(0)
  })

  it('Increment Project02votingapp', async () => {
    await program.methods.increment().accounts({ project02votingapp: project02votingappKeypair.publicKey }).rpc()

    const currentCount = await program.account.project02votingapp.fetch(project02votingappKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Increment Project02votingapp Again', async () => {
    await program.methods.increment().accounts({ project02votingapp: project02votingappKeypair.publicKey }).rpc()

    const currentCount = await program.account.project02votingapp.fetch(project02votingappKeypair.publicKey)

    expect(currentCount.count).toEqual(2)
  })

  it('Decrement Project02votingapp', async () => {
    await program.methods.decrement().accounts({ project02votingapp: project02votingappKeypair.publicKey }).rpc()

    const currentCount = await program.account.project02votingapp.fetch(project02votingappKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Set project02votingapp value', async () => {
    await program.methods.set(42).accounts({ project02votingapp: project02votingappKeypair.publicKey }).rpc()

    const currentCount = await program.account.project02votingapp.fetch(project02votingappKeypair.publicKey)

    expect(currentCount.count).toEqual(42)
  })

  it('Set close the project02votingapp account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        project02votingapp: project02votingappKeypair.publicKey,
      })
      .rpc()

    // The account should no longer exist, returning null.
    const userAccount = await program.account.project02votingapp.fetchNullable(project02votingappKeypair.publicKey)
    expect(userAccount).toBeNull()
  })
})
