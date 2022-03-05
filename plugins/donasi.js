let handler = async m => m.reply(`
*Donasi.*
> Telkomsel : 081380674817
> E - Wallet : 081380674817 (Support Semua + Diutamakan Gopay)
> Saweria : https:/saweria.co/DinXT

_Terima Kasih Sebelumnya Bagi Yang Sudah Donasi_ :)
`.trim()) // jangan lupa edit
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
