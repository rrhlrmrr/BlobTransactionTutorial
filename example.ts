import { parseGwei, stringToHex, toBlobs, parseEther, setupKzg, createTestClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from 'viem/chains'
import * as cKzg from 'c-kzg'
import { resolve } from 'path'
import dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY: string = process.env.PRIVATEKEY
const mainnetTrustedSetupPath = resolve(
    './mainnet.json',
)
const kzg = setupKzg(cKzg, mainnetTrustedSetupPath);
const blobs = toBlobs({ data: stringToHex('hello world') });
const account = privateKeyToAccount(`0x${PRIVATE_KEY}`);
const client = createWalletClient({
    account,
    chain: sepolia,
    transport: http()
});

async function type0transaction() {
    const hash =  await client.sendTransaction({
      account,
      kzg,
      to: '0x0000000000000000000000000000000000000000',
      value: parseEther('1'),
      chain: sepolia,
      gasPrice: parseGwei('11'),
      gas: 21000n,
    })
    console.log("TxHash:", hash)
}
export type AccessList = {
    address: `0x${string}`;
    storageKeys: `0x${string}`[];
}[];

// 올바른 AccessList 예제
const accessList: AccessList = [
    {
        address: '0x0000000000000000000000000000000000000000',
        storageKeys: [
            '0x0000000000000000000000000000000000000000000000000000000000000000'
        ]
    }
];

async function type1transaction() {
    const hash =  await client.sendTransaction({
      account,
      kzg,
      to: '0x0000000000000000000000000000000000000000',
      value: 1n,
      chain: sepolia,
      gas: 30000n,
      accessList: accessList,
    })
    console.log("TxHash:", hash)
}

async function type2transaction() {
    const hash = await client.sendTransaction({
      account,
      kzg,
      to: '0x0000000000000000000000000000000000000000',
      value: 1n,
      chain: sepolia,
      maxFeePerGas: parseGwei('30'),
      maxPriorityFeePerGas: parseGwei('3'),
      gas: 21000n,
    })
    console.log("TxHash:", hash)
}

async function type3transaction() {
    const hash =  await client.sendTransaction({
        account,
        blobs: blobs,
        kzg,
        maxFeePerBlobGas: parseGwei('30'),
        to: '0x0000000000000000000000000000000000000000',
        chain: sepolia,
        gas: 21000n,
    })
    console.log("TxHash:", hash);
}

// type0transaction();

type1transaction();
// type2transaction();
// type3transaction();


