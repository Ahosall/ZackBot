
module.exports = (client) => {
  return async ({hasNewChats}) => {
    console.log(`  ${client.chats.length} chats\n  new chats available: ${hasNewChats}`);

    const unread = await client.loadAllUnreadMessages();
    console.log(`  ${unread.length} unread messages`);
  }
}