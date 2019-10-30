export async function getMockData() {
  const url = `http://localhost:5000`

  const data = await fetch(url)
  return data
}
