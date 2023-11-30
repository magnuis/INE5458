An MVP for the fictional blockchain startup BlickTicket

## Run locally

First you need to run you blockchain application:

```bash
cd block-ticket/contracts
ganache-cli
```

Then you have to migrate the TicketContract. To do so, open a new terminal and run:

```bash
cd block-ticket/contracts
truffle migrate --network development
```

In the terminal output, you will see a `contract address`. Copy this into a file `.env.local`:

```
NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS=
```

Then, in a third terminal run the frontend application:

```bash
cd block-ticket/app
npm run dev
```

If you are using Google Chrome, make sure you have [MetaMask](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) preoperly configured.
