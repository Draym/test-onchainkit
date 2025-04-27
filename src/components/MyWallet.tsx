'use client'

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
  WalletDropdownLink
} from '@coinbase/onchainkit/wallet'
import { Address, Avatar, EthBalance, Identity, Name } from '@coinbase/onchainkit/identity'
import { Icon } from '@iconify/react'

export default function MyWallet() {
  return (<Wallet>
    <ConnectWallet>
      <Avatar className="h-6 w-6" />
      <Name />
    </ConnectWallet>
    <WalletDropdown>
      <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
        <Avatar />
        <Name />
        <Address />
        <EthBalance />
      </Identity>
      <WalletDropdownLink href="/page-1"
                          icon={<Icon icon="ic:round-collections" width={25} />}>
        Page 1
      </WalletDropdownLink>
      <WalletDropdownLink href="/page-2"
                          icon={<Icon icon="tabler:cards" width={30} />}>
        Page 2
      </WalletDropdownLink>
      <WalletDropdownDisconnect />
    </WalletDropdown>
  </Wallet>)
}