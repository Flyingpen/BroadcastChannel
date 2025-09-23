function buildRedirect(target) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: target.href,
    },
  })
}

export async function GET({ request }) {
  const currentURL = new URL(request.url)
  const keyword = currentURL.searchParams.get('q')?.trim()
  const target = keyword
    ? new URL(`/search/${encodeURIComponent(keyword)}`, currentURL)
    : new URL('/', currentURL)

  return buildRedirect(target)
}

export async function POST({ request }) {
  const currentURL = new URL(request.url)
  const formData = await request.formData()
  const keyword = `${formData.get('q') ?? ''}`.trim()
  const target = keyword
    ? new URL(`/search/${encodeURIComponent(keyword)}`, currentURL)
    : new URL('/', currentURL)

  return buildRedirect(target)
}
