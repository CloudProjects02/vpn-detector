# Detector de VPN

Este programa verifica se você está usando uma VPN, mostra seu IP público atual e envia logs para um webhook do Discord.

## Requisitos
- Node.js instalado (apenas para desenvolvimento e compilação)
- Chave de API do serviço vpnapi.io
- URL do Webhook do Discord

## Instalação para Desenvolvimento
1. Clone este repositório
2. Execute `npm install` para instalar as dependências
3. Obtenha uma chave de API gratuita em [vpnapi.io](https://vpnapi.io/)
4. Substitua `SUA_CHAVE_API` no arquivo `vpnDetector.js` pela sua chave de API
5. Configure o webhook do Discord:
   - Crie um webhook no seu servidor do Discord
   - Copie a URL do webhook
   - Substitua `SEU_WEBHOOK_URL_AQUI` no arquivo `vpnDetector.js` pela URL do webhook

## Como Compilar para Executável (.exe)
1. Instale as dependências de desenvolvimento:
   ```bash
   npm install
   ```

2. Execute o comando de build:
   ```bash
   npm run build
   ```

3. O executável será gerado na pasta `dist`

## Como usar
### Versão de desenvolvimento:
```bash
npm start
```

### Versão compilada:
Simplesmente execute o arquivo .exe gerado na pasta `dist`

O programa irá:
- Mostrar seu IP público atual
- Mostrar sua localização atual (país e cidade)
- Mostrar informações do provedor de internet (ISP)
- Verificar se está usando VPN
- Se VPN for detectada, mostrar informações do provedor VPN
- Enviar todas essas informações para o canal do Discord configurado no webhook

## Formato dos Logs no Discord
Os logs incluirão:
- IP público atual
- País de localização
- Cidade (quando disponível)
- Provedor de Internet (ISP)
- Status da VPN (detectada ou não)
- Provedor VPN (se detectada)
- Mensagens de erro (se ocorrerem)

Todas as mensagens no Discord são formatadas com emojis para melhor visualização 🎨 