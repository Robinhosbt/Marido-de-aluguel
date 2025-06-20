Marido de Aluguel - Aplicativo de Agendamento de Serviços
Este é um aplicativo mobile desenvolvido com React Native (Expo) como parte de um projeto acadêmico. O objetivo é oferecer uma solução prática e intuitiva para pessoas que desejam contratar serviços domésticos, como eletricistas, encanadores e pintores.

Objetivo do Aplicativo
O principal objetivo é facilitar o processo de agendamento de serviços residenciais. Com o aplicativo, o usuário pode escolher o tipo de serviço desejado, informar data, horário e endereço, além de acompanhar seus agendamentos anteriores.

Solução Proposta
Muitas pessoas enfrentam dificuldades para encontrar profissionais para pequenos serviços domésticos de forma rápida e organizada. O aplicativo Marido de Aluguel propõe centralizar esse processo, oferecendo:

Lista de serviços disponíveis

Busca automática de endereço via API ViaCEP

Sistema de agendamento de data, hora e endereço

Visualização de agendamentos salvos

Cancelamento de agendamentos

Tela de pagamento com seleção da forma de pagamento

Tecnologias e Dependências
Requisitos para rodar o projeto:

Node.js

Expo CLI

Principais bibliotecas e dependências utilizadas:

Pacote	                                             Finalidade
react-native	                                 Desenvolvimento mobile multiplataforma
expo	                                         Ambiente de desenvolvimento mobile
react-navigation	                             Navegação entre telas
axios	                                         Consumo da API ViaCEP
@react-native-async-storage/async-storage	     Persistência de dados local
firebase	                                     Autenticação de usuários

Como clonar e rodar o aplicativo
Clone o repositório:
git clone https://github.com/Robinhosbt/Marido-de-aluguel.git
cd Marido-de-aluguel
Instale as dependências:

npm install
Execute o app com o Expo:

npx expo start
Abra no celular:

Instale o aplicativo Expo Go na Play Store ou App Store.

Escaneie o QR Code exibido após iniciar o projeto.

Requisitos: Ter o Node.js instalado e o Expo CLI configurado (o npx expo start faz isso automaticamente).

Estrutura de Pastas
/screens/ - Telas do aplicativo (Login, Cadastro, Home, Agendamento, etc)

/assets/ - Imagens utilizadas no app

firebaseConfig.js - Configuração de autenticação

Arquivos de configuração (app.json, package.json, etc)

Sobre a implementação do AsyncStorage
O aplicativo utiliza o AsyncStorage para garantir que os agendamentos fiquem salvos localmente mesmo que o usuário feche o app.

Como funciona:

Ao concluir um agendamento, os dados são armazenados localmente.

Ao abrir novamente, o app carrega os agendamentos salvos.

O usuário também pode cancelar agendamentos e os dados serão atualizados.

Arquitetura do Software
O app segue o padrão de navegação Stack Navigation utilizando o React Navigation.

Fluxo básico de telas:

Login

Cadastro

Home

Detalhes do Serviço

Agendamento

Pagamento

Resumo

Meus Agendamentos

Suporte

Perfil do Prestador

Manual do Usuário
Principais telas e suas funções:

Login: Acesso ao aplicativo.

Cadastro: Registro de novos usuários.

Home: Exibe os serviços disponíveis.

Detalhes do Serviço: Mostra descrição completa de cada serviço.

Agendamento: Permite escolher data, hora, número da casa e endereço.

Pagamento: Escolha da forma de pagamento.

Resumo: Confirmação final do agendamento.

Meus Agendamentos: Exibe os agendamentos salvos, com opção de cancelamento.

Suporte: Canal de contato com a empresa.

Funcionalidades Atuais
Login e Cadastro

Navegação entre telas

Integração com API ViaCEP

Persistência de dados local com AsyncStorage

Validação de datas inválidas e datas passadas

Cancelamento de agendamentos

Exibição de descrição detalhada para cada serviço

Melhorias de layout e usabilidade

Possíveis Melhorias Futuras
Integração completa com Firebase para autenticação e banco de dados em nuvem

Envio de notificações push

Implementação de chat de suporte

Melhorias no design e experiência do usuário

Projeto Acadêmico
Este aplicativo foi desenvolvido para a disciplina de Programação para Dispositivos Móveis, com foco em:

Consumo de APIs externas (ViaCEP)

Persistência local de dados

Estruturação de navegação entre telas

Melhores práticas em desenvolvimento mobile

Desenvolvido por Robson Campos - 2025.
