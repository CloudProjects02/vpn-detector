const axios = require('axios');

// Configuração do webhook do Discord
const DISCORD_WEBHOOK_URL = 'SUA_WEBHOOK_AQUI';

async function enviarParaDiscord(mensagem) {
    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: mensagem
        });
    } catch (erro) {
        console.error('Erro ao enviar para o Discord:', erro.message);
    }
}

async function detectarVPN() {
    try {
        // Obter IP público
        const respostaIP = await axios.get('https://api.ipify.org?format=json');
        const ipPublico = respostaIP.data.ip;

        // Verificar se é VPN usando um serviço de detecção
        const respostaVPN = await axios.get(`https://vpnapi.io/api/${ipPublico}?key=SUA_KEY_AQUI`);
        
        console.log('Seu IP público:', ipPublico);
        console.log('País:', respostaVPN.data.location.country);
        
        let mensagemDiscord = `🔍 **Nova Verificação de VPN**\n`;
        mensagemDiscord += `📡 IP Público: ${ipPublico}\n`;
        mensagemDiscord += `🌍 País: ${respostaVPN.data.location.country}\n`;
        mensagemDiscord += `🏢 ISP: ${respostaVPN.data.network.autonomous_system_organization}\n`;
        mensagemDiscord += `🌐 Cidade: ${respostaVPN.data.location.city || 'Não disponível'}\n`;

        if (respostaVPN.data.security.vpn) {
            console.log('VPN detectada!');
            console.log('Informações adicionais:');
            console.log('- Provedor VPN:', respostaVPN.data.security.network);

            mensagemDiscord += `\n🔒 **VPN Detectada!**\n`;
            mensagemDiscord += `⚡ Provedor VPN: ${respostaVPN.data.security.network}\n`;
        } else {
            console.log('VPN não detectada. Você está usando sua conexão normal.');
            mensagemDiscord += `\n✅ VPN não detectada. Conexão normal.\n`;
        }

        // Enviar log para o Discord
        await enviarParaDiscord(mensagemDiscord);
        
    } catch (erro) {
        console.error('Erro ao verificar VPN:', erro.message);
        await enviarParaDiscord(`❌ **Erro ao verificar VPN**: ${erro.message}`);
    }
}

detectarVPN(); 
