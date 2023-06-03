// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  const mediaChrome = await import('https://cdn.jsdelivr.net/npm/media-chrome@1/+esm');
  console.log(mediaChrome);

  res.status(200).json({ name: 'John Doe' })
}
