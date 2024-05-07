import * as cKzg from 'c-kzg'
import { setupKzg } from 'viem'
import { resolve } from 'path'

// import { mainnetTrustedSetupPath  } from 'viem/node'

export const mainnetTrustedSetupPath = resolve(
    './mainnet.json',
)

export const kzg = setupKzg(cKzg, mainnetTrustedSetupPath)

