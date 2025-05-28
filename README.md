# 📱 Marido de Aluguel - Aplicativo de Agendamento de Serviços

Este é um aplicativo mobile desenvolvido com **React Native (Expo)** para facilitar o agendamento de serviços domésticos com prestadores, como eletricistas e encanadores.

## ✅ Funcionalidades

- Login e cadastro de usuários
- Seleção de serviços disponíveis
- Visualização do perfil do prestador com botão de contratação
- Tela de agendamento com:
  - Preenchimento de data, hora e observações
  - Busca de endereço via **API ViaCEP**
- Escolha de forma de pagamento (Pix, Cartão, Dinheiro)
- Tela de **resumo da contratação**
- Visualização de **agendamentos salvos** com **persistência local**

---

## 💾 Persistência de Dados

Utilizamos o **AsyncStorage** para armazenar os dados de agendamento no dispositivo do usuário, garantindo que as informações não sejam perdidas ao fechar o aplicativo.

**Tecnologia usada:** `@react-native-async-storage/async-storage`  
**Justificativa:** O AsyncStorage é leve, prático e compatível com o Expo, ideal para armazenar dados localmente em projetos mobile sem exigir backend.

---

## 🔗 Integração com API

O aplicativo consome a **API pública ViaCEP** para transformar um CEP informado em endereço completo.

- Exemplo: `https://viacep.com.br/ws/01001000/json/`

Essa integração melhora a usabilidade e evita erros no preenchimento do endereço.

---

## ▶️ Como Executar o Projeto

Siga os passos abaixo para iniciar o projeto localmente:
1. Instale as dependências:
npm install
3. Inicie o app com o Expo:
npx expo start
4. Execute no celular:
Baixe o aplicativo Expo Go na Play Store ou App Store.

Escaneie o QR code exibido no terminal ou no navegador após iniciar o projeto.

Requisitos: Node.js instalado, além do Expo CLI (instalado automaticamente via npx expo start).

 Tecnologias Utilizadas
React Native

Expo

AsyncStorage

Axios

ViaCEP API

React Navigation

 Telas (Screenshots)
(Adicione imagens se desejar, colocando-as na pasta /screenshots)

 Projeto Acadêmico
Este projeto foi desenvolvido como parte de atividade prática com foco em:

Integração com API externa (ViaCEP)

Persistência de dados local com AsyncStorage

Interface funcional e intuitiva

Boas práticas de navegação e organização de código

Desenvolvido por Robson Campos - 2025

```bash
git clone https://github.com/Robinhosbt/Marido-de-aluguel.git
cd Marido-de-aluguel
