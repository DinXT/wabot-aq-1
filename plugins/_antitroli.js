module.exports = {
    async all(m) {
        if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('Anjay fake troli :v')
            // await this.clearMessage(m.chat, m.key)
            await this.modifyChat(m.chat, 'clear', {
                includeStarred: false
            }).catch(console.log)
        }
    }
}
