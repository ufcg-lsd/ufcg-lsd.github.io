This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Atualização automática do Pensadouro LSD

A página inicial consulta o feed RSS do Pensadouro LSD durante o build e usa as duas
publicações mais recentes. O deploy pode ser iniciado automaticamente de duas formas:

1. **Webhook do Contentful:** configure um webhook no Contentful que envie uma requisição
   `POST` para o endpoint do GitHub abaixo sempre que houver uma publicação:

   ```text
   https://api.github.com/repos/ufcg-lsd/ufcg-lsd.github.io/dispatches
   ```

   Configure `Content-Type: application/json` e o cabeçalho:

   ```text
   Authorization: Bearer <TOKEN_GITHUB_COM_PERMISSAO_CONTENT_WRITE>
   ```

   Corpo da requisição:

   ```json
   {
     "event_type": "deploy"
   }
   ```

2. **Atualização periódica:** o workflow [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)
   também executa o build a cada duas horas.

Também é possível iniciar o deploy manualmente em **Actions > Build and Deploy via Docker >
Run workflow**.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
