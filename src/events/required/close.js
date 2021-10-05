
module.exports = (client) => {
  return async () => {
    console.log(`  Reconnecting... `);

    await client.loadAuthInfo('./auth_info.json')
    await client.connect()
  }
}