module.exports = {
  run: async (client, msg, args) => {
    const sotoy = ["🥑 : 🥑 : 🥑","🍉 : 🍉 : 🍉","🍓 : 🍓 : 🍓","🍎 : 🍎 : 🍎","🍍 : 🍍 : 🍍","🥝 : 🥝 : 🥝","🍑 : 🍑 : 🍑","🥥 : 🥥 : 🥥","🍇 : 🍇 : 🍇","🍊 : 🍊 : 🍊","🔔 : 🔔 : 🔔","🍒 : 🍒 : 🍒","🍌 : 🍌 : 🍌","🍐 : 🍐 : 🍐","🍋 : 🍋 : 🍋","🍊 : 🍒 : 🍐","🥝 : 🍉 : 🥑","🍌 : 🍒 : 🔔","🍐 : 🔔 : 🥝","🍉 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🥥 : 🍇","🍓 : 🍐 : 🍇","🍊 : 🍍 : 🍉","🍒 : 🔔 : 🍊","🍇 : 🥑 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍒 : 🍐","🍉 : 🍓 : 🥑","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍍 : 🍐 : 🥝","🥑 : 🍓 : 🍉","🍑 : 🔔 : 🥑","🍌 : 🍒 : 🔔","🍉 : 🍍 : 🥥","🍊 : 🍋 : 🍒","🍋 : 🍍 : 🍌","🥥 : 🍎 : 🍉","🔔 : 🍑 : 🍓","🍉 : 🥑 : 🍐","🍒 : 🔔 : 🍊","🍇 : 🍍 : 🍐","🍓 : 🥑 : 🍍","🔔 : 🍒 : 🍐","🥥 : 🍒 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍉 : 🍋","🍐 : 🍑 : 🍐","🥑 : 🍒 : 🍓","🔔 : 🍎 : 🍇","🍌 : 🍒 : 🔔","🍐 : 🥥 : 🍍","🍊 : 🍋 : 🍒","🍓 : 🍉 : 🍌","🍍 : 🔔 : 🍇","🔔 : 🍐 : 🍎","🍊 : 🍒 : 🍐","🍉 : 🔔 : 🥑","🍇 : 🥥 : 🍎","🍊 : 🍋 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🍉 : 🔔","🍐 : 🍒 : 🍋","🍑 : 🍎 : 🍐","🍊 : 🍍 : 🍒","🔔 : 🔔 : 🥑","🍌 : 🍒 : 🍉","🍐 : 🍓 : 🍎","🍊 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🍇","🍉 : 🍐 : 🥥","🔔 : 🍑 : 🥑","🍒 : 🔔 : 🍊","🍇 : 🍓 : 🍐","🍊 : 🍋 : 🔔","🥑 : 🍍 : 🍐","🔔 : 🍒 : 🍉","🍊 : 🥑 : 🔔","🍎 : 🍒 : 🍎","🍐 : 🍉 : 🍐","🍊 : 🥑 : 🍓","🍋 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🔔 : 🥑","🍓 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🥥","🍉 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🥑 : 🍓 : 🍉","🍇 : 🍒 : 🍍","🍊 : 🥑 : 🍑","🍑 : 🍎 : 🍐","🔔 : 🍒 : 🍊","🍉 : 🥝 : 🍎","🍐 : 🍉 : 🍋","🍐 : 🥑 : 🍐","🍊 : 🍒 : 🍓","🍑 : 🔔 : 🍉","🍌 : 🥑 : 🥝","🍐 : 🍉 : 🔔","🍊 : 🍓 : 🍒","🍋 : 🍋 : 🍉","🥑 : 🍎 : 🍇","🔔 : 🍑 : 🥑","🍊 : 🥥 : 🍐","🍍 : 🍓 : 🍊","🍉 : 🍒 : 🍐","🍊 : 🍋 : 🍉","🔔 : 🍎 : 🍐","🍓 : 🥑 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍑","🥝 : 🍉 : 🍐","🍓 : 🍍 : 🍒","🔔 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🍉 : 🍓","🍊 : 🍐 : 🍒","🍊 : 🍒 : 🍐","🥝 : 🍉 : 🥑","🥑 : 🍒 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍍 : 🍐","🍓 : 🍉 : 🍊","🍊 : 🍋 : 🍓","🍐 : 🍒 : 🍋","🥑 : 🍐 : 🥥","🍊 : 🍒 : 🍍","🍎 : 🔔 : 🍇","🍌 : 🍒 : 🍓","🍓 : 🔔 : 🍎","🍊 : 🍉 : 🍍","🍋 : 🍋 : 🍌","🍎 : 🔔 : 🍉","🔔 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🍍 : 🔔 : 🥑","🍇 : 🥝 : 🍎","🍊 : 🍉 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍉 : 🍐 : 🍉","🍊 : 🥥 : 🥑","🔔 : 🍍 : 🍇","🍌 : 🍎 : 🔔","🍐 : 🔔 : 🍎","🍊 : 🥥 : 🍒","🍉 : 🍋 : 🍌","🍑 : 🔔 : 🍇","🔔 : 🍐 : 🍉","🍊 : 🥝 : 🍐","🍍 : 🔔 : 🍊","🍇 : 🍒 : 🍐","🍊 : 🍋 : 🔔","🍉 : 🍒 : 🍐","🔔 : 🥝 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍍 : 🍋","🥝 : 🍐 : 🍉","🍊 : 🍑 : 🍍","🔔 : 🔔 : 🍓","🍌 : 🍒 : 🔔","🍐 : 🔔 : 🥝","🍉 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🥥 : 🍇","🍓 : 🍐 : 🍇","🍊 : 🍍 : 🍉","🍒 : 🔔 : 🍊","🍇 : 🥑 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍒 : 🍐","🍉 : 🍊 : 🥑","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍍 : 🍐 : 🥝","🥑 : 🍓 : 🍉","🍑 : 🔔 : 🥑","🍌 : 🍒 : 🔔","🍉 : 🍍 : 🥥","🍊 : 🍋 : 🍒","🍋 : 🍍 : 🍌","🥥 : 🍎 : 🍉","🔔 : 🍑 : 🍓","🍉 : 🥑 : 🍐","🍒 : 🔔 : 🍊","🍇 : 🍍 : 🍐","🍓 : 🥑 : 🍍","🔔 : 🍒 : 🍐","🥥 : 🍒 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍉 : 🍋","🍐 : 🍑 : 🍐","🥑 : 🍒 : 🍓","🔔 : 🍎 : 🍇","🍌 : 🍒 : 🔔","🍐 : 🥥 : 🍍","🍊 : 🍋 : 🍒","🍓 : 🍉 : 🍌","🍍 : 🔔 : 🍇","🔔 : 🍐 : 🍎","🍊 : 🍒 : 🍐","🍉 : 🔔 : 🥑","🍇 : 🥥 : 🍎","🍊 : 🍋 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🍉 : 🔔","🍐 : 🍒 : 🍋","🍑 : 🍎 : 🍐","🍊 : 🍍 : 🍒","🔔 : 🔔 : 🥑","🍌 : 🍒 : 🍉","🍐 : 🍓 : 🍎","🍊 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🍇","🍉 : 🍐 : 🥥","🔔 : 🍑 : 🥑","🍒 : 🔔 : 🍊","🍇 : 🍓 : 🍐","🍊 : 🍋 : 🔔","🥑 : 🍍 : 🍐","🔔 : 🍒 : 🍉","🍊 : 🥑 : 🔔","🍎 : 🍒 : 🍎","🍐 : 🍉 : 🍐","🍊 : 🥑 : 🍓","🍋 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🔔 : 🥑","🍓 : 🍋 : 🍒","🍋 : 🍇 : 🍌","🔔 : 🍎 : 🥥","🍉 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🥑 : 🍓 : 🍉","🍇 : 🍒 : 🍍","🍊 : 🥑 : 🍑","🍑 : 🍎 : 🍐","🔔 : 🍒 : 🍊","🍉 : 🥝 : 🍎","🍐 : 🍉 : 🍋","🍐 : 🥑 : 🍐","🍊 : 🍒 : 🍓","🍑 : 🔔 : 🍉","🍌 : 🥑 : 🥝","🍐 : 🍉 : 🔔","🍊 : 🍓 : 🍒","🍋 : 🍋 : 🍉","🥑 : 🍎 : 🍇","🔔 : 🍑 : 🥑","🍊 : 🥥 : 🍐","🍍 : 🍓 : 🍊","🍉 : 🍒 : 🍐","🍊 : 🍋 : 🍉","🔔 : 🍎 : 🍐","🍓 : 🥑 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍑","🥝 : 🍉 : 🍐","🍓 : 🍍 : 🍒","🔔 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🍉 : 🍓","🍊 : 🍐 : 🍒","🍊 : 🍒 : 🍐","🥝 : 🍉 : 🥑","🥑 : 🍒 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍍 : 🍐","🍓 : 🍉 : 🍊","🍊 : 🍋 : 🍓","🍐 : 🍒 : 🍋","🥑 : 🍐 : 🥥","🍊 : 🍒 : 🍍","🍎 : 🔔 : 🍇","🍌 : 🍒 : 🍓","🍓 : 🔔 : 🍎","🍊 : 🍉 : 🍍","🍋 : 🍋 : 🍌","🍎 : 🔔 : 🍉","🔔 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🍍 : 🔔 : 🥑","🍇 : 🥝 : 🍎","🍊 : 🍉 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍉 : 🍐 : 🍉","🍊 : 🥥 : 🥑","🔔 : 🍍 : 🍇","🍌 : 🍎 : 🔔","🍐 : 🔔 : 🍎","🍊 : 🥥 : 🍒","🍉 : 🍋 : 🍌","🍑 : 🔔 : 🍇","🔔 : 🍐 : 🍉","🍊 : 🥝 : 🍐","🍍 : 🔔 : 🍊","🍇 : 🍒 : 🍐","🍊 : 🍋 : 🔔","🍉 : 🍒 : 🍐","🔔 : 🥝 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍍 : 🍋","🥝 : 🍐 : 🍉","🍊 : 🍑 : 🍍","🔔 : 🔔 : 🍓","🍌 : 🍒 : 🔔","🍐 : 🔔 : 🥝","🍉 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🥥 : 🍇","🍓 : 🍐 : 🍇","🍊 : 🍍 : 🍉","🍒 : 🔔 : 🍊","🍇 : 🥑 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍒 : 🍐","🍉 : 🍓 : 🥑","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍍 : 🍐 : 🥝","🥑 : 🍓 : 🍉","🍑 : 🔔 : 🥑","🍌 : 🍒 : 🔔","🍉 : 🍍 : 🥥","🍊 : 🍋 : 🍒","🍋 : 🍍 : 🍌","🥥 : 🍎 : 🍉","🔔 : 🍑 : 🍓","🍉 : 🥑 : 🍐","🍒 : 🔔 : 🍊","🍇 : 🍍 : 🍐","🍓 : 🥑 : 🍍","🔔 : 🍒 : 🍐","🥥 : 🍒 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍉 : 🍋","🍐 : 🍑 : 🍐","🥑 : 🍒 : 🍓","🔔 : 🍎 : 🍇","🍌 : 🍒 : 🔔","🍐 : 🥥 : 🍍","🍊 : 🍋 : 🍒","🍓 : 🍉 : 🍌","🍍 : 🔔 : 🍇","🔔 : 🍐 : 🍎","🍊 : 🍒 : 🍐","🍉 : 🔔 : 🥑","🍇 : 🥥 : 🍎","🍊 : 🍋 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🍉 : 🔔","🍐 : 🍒 : 🍋","🍑 : 🍎 : 🍐","🍊 : 🍍 : 🍒","🔔 : 🔔 : 🥑","🍌 : 🍒 : 🍉","🍐 : 🍓 : 🍎","🍊 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🍇","🍉 : 🍐 : 🥥","🔔 : 🍑 : 🥑","🍒 : 🔔 : 🍊","🍇 : 🍓 : 🍐","🍊 : 🍋 : 🔔","🥑 : 🍍 : 🍐","🔔 : 🍒 : 🍉","🍊 : 🥑 : 🔔","🍎 : 🍒 : 🍎","🍐 : 🍉 : 🍐","🍊 : 🥑 : 🍓","🍋 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🔔 : 🥑","🍓 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🥥","🍉 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🥑 : 🍓 : 🍉","🍇 : 🍒 : 🍍","🍊 : 🥑 : 🍑","🍑 : 🍎 : 🍐","🔔 : 🍒 : 🍊","🍉 : 🥝 : 🍎","🍐 : 🍉 : 🍋","🍐 : 🥑 : 🍐","🍊 : 🍒 : 🍓","🍑 : 🔔 : 🍉","🍌 : 🥑 : 🥝","🍐 : 🍉 : 🔔","🍊 : 🍓 : 🍒","🍋 : 🍋 : 🍉","🥑 : 🍎 : 🍇","🔔 : 🍑 : 🥑","🍊 : 🥥 : 🍐","🍍 : 🍓 : 🍊","🍉 : 🍒 : 🍐","🍊 : 🍋 : 🍉","🔔 : 🍎 : 🍐","🍓 : 🥑 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍑","🥝 : 🍉 : 🍐","🍓 : 🍍 : 🍒","🔔 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🍉 : 🍓","🍊 : 🍐 : 🍒","🍊 : 🍒 : 🍐","🥝 : 🍉 : 🥑","🥑 : 🍒 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍍 : 🍐","🍓 : 🍉 : 🍊","🍊 : 🍋 : 🍓","🍐 : 🍒 : 🍋","🥑 : 🍐 : 🥥","🍊 : 🍒 : 🍍","🍎 : 🔔 : 🍇","🍌 : 🍇 : 🍓","🍓 : 🔔 : 🍎","🍊 : 🍉 : 🍍","🍋 : 🍋 : 🍌","🍎 : 🔔 : 🍉","🔔 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🍍 : 🔔 : 🥑","🍇 : 🥝 : 🍎","🍊 : 🍉 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍉 : 🍐 : 🍉","🍊 : 🥥 : 🥑","🔔 : 🍍 : 🍇","🍌 : 🍎 : 🔔","🍐 : 🔔 : 🍎","🍊 : 🥥 : 🍒","🍉 : 🍋 : 🍌","🍑 : 🔔 : 🍇","🔔 : 🍐 : 🍉","🍊 : 🥝 : 🍐","🍍 : 🔔 : 🍊","🍇 : 🍒 : 🍐","🍊 : 🍋 : 🔔","🍉 : 🍒 : 🍐","🔔 : 🥝 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍍 : 🍋","🥝 : 🍐 : 🍉","🍊 : 🍑 : 🍍","🔔 : 🔔 : 🍓","🍌 : 🍒 : 🔔","🍐 : 🔔 : 🥝","🍉 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🥥 : 🍇","🍓 : 🍐 : 🍇","🍊 : 🍍 : 🍉","🍒 : 🔔 : 🍊","🍇 : 🥑 : 🍐","🍊 : 🍋 : 🔔","🔔 : 🍒 : 🍐","🍉 : 🍓 : 🥑","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍋","🍍 : 🍐 : 🥝","🥑 : 🍓 : 🍉","🍑 : 🔔 : 🥑","🍌 : 🍒 : 🔔","🍉 : 🍍 : 🥥","🍊 : 🍋 : 🍒","🍋 : 🍍 : 🍌","🥥 : 🍎 : 🍉","🔔 : 🍑 : 🍓","🍉 : 🥑 : 🍐","🍒 : 🔔 : 🍊","🍇 : 🍍 : 🍐","🍓 : 🥑 : 🍍","🔔 : 🍒 : 🍐","🥥 : 🍒 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍉 : 🍋","🍐 : 🍑 : 🍐","🥑 : 🍒 : 🍓","🔔 : 🍎 : 🍇","🍌 : 🍒 : 🔔","🍐 : 🥥 : 🍍","🍊 : 🍋 : 🍒","🍓 : 🍉 : 🍌","🍍 : 🔔 : 🍇","🔔 : 🍐 : 🍎","🍊 : 🍒 : 🍐","🍉 : 🔔 : 🥑","🍇 : 🥥 : 🍎","🍊 : 🍋 : 🔔","🔔 : 🍓 : 🍐","🔔 : 🍒 : 🍊","🥑 : 🥑 : 🥑","🍉 : 🍉 : 🍉","🍓 : 🍓 : 🍓","🍎 : 🍎 : 🍎","🍍 : 🍍 : 🍍","🥝 : 🥝 : 🥝","🍑 : 🍑 : 🍑","🥥 : 🥥 : 🥥","🍇 : 🍇 : 🍇","🍊 : 🍊 : 🍊","🔔 : 🔔 : 🔔","🍒 : 🍒 : 🍒","🍌 : 🍌 : 🍌","🍐 : 🍐 : 🍐","🍋 : 🍋 : 🍋","🥑 : 🍉 : 🔔","🍐 : 🍒 : 🍋","🍑 : 🍎 : 🍐","🍊 : 🍍 : 🍒","🔔 : 🔔 : 🥑","🍌 : 🍒 : 🍉","🍐 : 🍓 : 🍎","🍊 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🍇","🍉 : 🍐 : 🥥","🔔 : 🍑 : 🥑","🍒 : 🔔 : 🍊","🍇 : 🍓 : 🍐","🍊 : 🍋 : 🔔","🥑 : 🍍 : 🍐","🔔 : 🍒 : 🍉","🍊 : 🥑 : 🔔","🍎 : 🍒 : 🍎","🍐 : 🍉 : 🍐","🍊 : 🥑 : 🍓","🍋 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🔔 : 🥑","🍓 : 🍋 : 🍒","🍋 : 🥑 : 🍌","🔔 : 🍎 : 🥥","🍉 : 🍐 : 🍇","🍊 : 🍒 : 🍐","🥑 : 🍓 : 🍉","🍇 : 🍒 : 🍍","🍊 : 🥑 : 🍑","🍑 : 🍎 : 🍐","🔔 : 🍒 : 🍊","🍉 : 🥝 : 🍎","🍐 : 🍉 : 🍋","🍐 : 🥑 : 🍐","🍊 : 🍒 : 🍓","🍑 : 🔔 : 🍉","🍌 : 🥑 : 🥝","🍐 : 🍉 : 🔔","🍊 : 🍓 : 🍒","🍋 : 🍋 : 🍉","🥑 : 🍎 : 🍇","🔔 : 🍑 : 🥑","🍊 : 🥥 : 🍐","🍍 : 🍓 : 🍊","🍉 : 🍒 : 🍐","🍊 : 🍋 : 🍉","🔔 : 🍎 : 🍐","🍓 : 🥑 : 🍊","🍊 : 🍋 : 🔔","🍐 : 🍒 : 🍑","🥝 : 🍉 : 🍐","🍓 : 🍍 : 🍒","🔔 : 🔔 : 🍇","🍌 : 🍒 : 🍉","🍐 : 🍉 : 🍓","🍊 : 🍐 : 🍒","🥑 : 🥑 : 🥑","🍉 : 🍉 : 🍉","🍓 : 🍓 : 🍓","🍎 : 🍎 : 🍎","🍍 : 🍍 : 🍍","🥝 : 🥝 : 🥝","🍑 : 🍑 : 🍑","🥥 : 🥥 : 🥥","🍇 : 🍇 : 🍇","🍊 : 🍊 : 🍊","🔔 : 🔔 : 🔔","🍒 : 🍒 : 🍒","🍌 : 🍌 : 🍌","🍐 : 🍐 : 🍐","🍋 : 🍋 : 🍋"]
    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]

    let mesg;
    if ((somtoy == '🥑 : 🥑 : 🥑') || (somtoy == '🍉 : 🍉 : 🍉') || (somtoy == '🍓 : 🍓 : 🍓') || (somtoy == '🍎 : 🍎 : 🍎') || (somtoy == '🍍 : 🍍 : 🍍') || (somtoy == '🥝 : 🥝 : 🥝') || (somtoy == '🍑 : 🍑 : 🍑') || (somtoy == '🥥 : 🥥 : 🥥') || (somtoy == '🍋 : 🍋 : 🍋') || (somtoy == '🍐 : 🍐 : 🍐') || (somtoy == '🍌 : 🍌 : 🍌') || (somtoy == '🍒 : 🍒 : 🍒') || (somtoy == '🔔 : 🔔 : 🔔') || (somtoy == '🍊 : 🍊 : 🍊') || (somtoy == '🍇 : 🍇 : 🍇')) {
      mesg = "Você ganhou!!!"
    } else {
      mesg = "Você perdeu..."
    }
    let slott = `Consiga 3 iguais para ganhar\n╔═══ ≪ •❈• ≫ ════╗\n║   [💰SLOT💰 | *777* ]        \n║                                             \n║                                             \n║       ${somtoy}  ◄━━┛\n║            \n║                                           \n║   [💰SLOT💰 | *777* ]        \n╚════ ≪ •❈• ≫ ═══╝\n\n${mesg}`

    msg.reply(slott)

  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'slot',
      aliases: ['sorte'],
      description: 'Que tal testar sua sorte hein amigão ? ',
      usage: 'slot',
      category: 'Fun'
    }
  }
}