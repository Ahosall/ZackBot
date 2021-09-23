
module.exports = (client) => {
  return async () => {
    console.log(`  ${Object.keys(client.contacts).length} contacts`);
  }
}