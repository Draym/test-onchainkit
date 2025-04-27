This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Issue with onchainkit Wallet component
when using Link from next/link, the onchainkit wallet component does not work as expected.
The current account state is lost, and the user will be required to login again. However if the user refresh the page the account state is retained.

- Add NEXT_PUBLIC_ONCHAINKIT_API_KEY in .env

- The Wallet component is working as expected in dev environment:
```bash
npm run dev
```

- But stop working in production environment:
```bash
npm run build
npm run start
```