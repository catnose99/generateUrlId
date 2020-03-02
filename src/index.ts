function generateUrlId(url: string): string {
  const urlEncoded = encodeURI(url);
  return urlEncoded.replace(/[^a-zA-Z0-9]/g, "");
}
module.exports = generateUrlId;
