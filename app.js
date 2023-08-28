const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const express = require('express');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fileUpload = require('express-fileupload');
const port = 8000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const mysql = require('mysql2/promise');
const nodeCron = require("node-cron");


// FunÃƒÂ§ÃƒÂ£o para criar conexÃƒÂ£o com o banco de dados
const createConnection = async () => {
    return await mysql.createConnection({
        host: '212.1.208.101',
        user: 'u896627913_loja02',
        password: 'Felipe@91118825',
        database: 'u896627913_Penedo'
    });
}


// FunÃ§Ã£o para atualizar o statusco no banco de dados (controle de cobranÃ§a)
const updateStatuscob = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE cobranca SET statusco = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusco:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o statusvd no banco de dados (controle OS)
const updateStatusvd = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusvd = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusvd:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusfn no banco de dados finalizaÃ§Ã£o
const updateStatusfn = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusfn = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusfn:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusad no banco de dados AdaptaÃ§Ã£o (controle OS)
const updateStatusad = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusad = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusad:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusip no banco de dados importancia de cuidar do seus oculos (controle OS)
const updateStatusip = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusip = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusip:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o sattusde no banco de dados Desconto (controle OS)
const updateSattusde = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET sattusde = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o sattusde:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statuscol no banco de dados coleÃ§Ã£o nova (controle OS)
const updateStatuscol = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statuscol = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statuscol:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusan no banco de dados aniversario (controle de OS)
const updateStatusan = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusan = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusan:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusan no banco de dados GARANTIA
const updateStatusga = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_garantia SET statuss = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statuss:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusan no banco de dados GARANTIA
const updateStatusgaf = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_garantia SET statusf = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusf:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusan no banco de dados pap
const updateStatusag = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_pap SET statusen = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusen:', error);
        return false;
    }
};
// FunÃ§Ã£o para atualizar o statusan no banco de dados pap
const updateStatusco = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_pap SET statusco = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusco:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o statusip2 importancia de cuidar dos seus oculos (controle de OS) 2
const updateSatusip2 = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusip2 = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusip2:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o statusip3 importancia de cuidar dos seus oculos (controle de OS) 3
const updatestatusip3 = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusip3 = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusip3:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o statusiip4 importancia de cuidar dos seus oculos (controle de OS) 4
const updateStatusiip4 = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusiip4 = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusiip4:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o statusiip5 importancia de cuidar dos seus oculos (controle de OS) 5
const updateStatusip5 = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusip5 = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusip5:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o statusiip5 importancia de cuidar dos seus oculos (controle de OS) 6
const updateStatusip6 = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusip6 = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusip6:', error);
        return false;
    }
};

// FunÃ§Ã£o para atualizar o renovaÃ§Ã£o dos oculos (controle de OS)
const updateStatusrn = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusrn = "enviado" WHERE id = ?';
        const [result] = await connection.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusrn:', error);
        return false;
    }
};

// FunÃ§Ã£o para obter os registros de agendamento do banco de dados
const agendamentoZDG0 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM cobranca WHERE statusco IS NULL OR statusco = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// FunÃ§Ã£o para obter os registros de agendamento do banco de dados
const agendamentoZDG = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusvd IS NULL OR statusvd = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados
const agendamentoZDG2 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusfn IS NULL OR statusfn = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statusad (controle OS)
const agendamentoZDG3 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusad IS NULL OR statusad = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statusip importancia de cuidar dos seus oculos (controle OS)
const agendamentoZDG4 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusip IS NULL OR statusip = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados desconto (controle OS)
const agendamentoZDG5 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE sattusde IS NULL OR sattusde = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados coleÃ§Ã£p nova (controle OS)
const agendamentoZDG6 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statuscol IS NULL OR statuscol = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statusan
const agendamentoZDG7 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusan IS NULL OR statusan = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statuss garantia
const agendamentoZDG8 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_garantia WHERE statuss IS NULL OR statuss = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statusf garantiafi
const agendamentoZDG9 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_garantia WHERE statusf IS NULL OR statusf = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statusen pap
const agendamentoZDG10 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_pap WHERE statusen IS NULL OR statusen = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};
// FunÃ§Ã£o para obter os registros de agendamento do banco de dados statusco pap
const agendamentoZDG11 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_pap WHERE statusco IS NULL OR statusco = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// importancia de cuidar dos seus oculos (controle de OS) 2

const agendamentoZDG12 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusip2 IS NULL OR statusip2 = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// importancia de cuidar dos seus oculos (controle de OS) 3

const agendamentoZDG13 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusip3 IS NULL OR statusip3 = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// importancia de cuidar dos seus oculos (controle de OS) 4

const agendamentoZDG14 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusiip4 IS NULL OR statusiip4 = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// importancia de cuidar dos seus oculos (controle de OS) 5

const agendamentoZDG15 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusip5 IS NULL OR statusip5 = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// importancia de cuidar dos seus oculos (controle de OS) 6

const agendamentoZDG16 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusip6 IS NULL OR statusip6 = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};


// RenovaÃ§Ã£o dos oculos (controle OS)

const agendamentoZDG17 = async () => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM controle_os WHERE statusrn IS NULL OR statusrn = ""');
        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        return [];
    }
};

// ConfiguraÃ§Ã£o do servidor Express e Socket.IO
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(fileUpload({
    debug: true
}));

// Rota principal do aplicativo
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname
    });
});

// CriaÃ§Ã£o do cliente do WhatsApp
const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'bot-zdg' }),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process', // <- this one doesn't work in Windows
            '--disable-gpu'
        ]
    }
});

// InicializaÃ§Ã£o do cliente do WhatsApp
client.initialize();

// ConfiguraÃ§Ã£o do Socket.IO para comunicaÃ§Ã£o em tempo real
let authenticated = false;

io.on('connection', function (socket) {
    socket.emit('message', 'Conectando...');

    // Evento para receber o QR Code e exibi-lo na interface
    client.on('qr', (qr) => {
        console.log('QR RECEIVED', qr);
        qrcode.toDataURL(qr, (err, url) => {
            socket.emit('qr', url);
            socket.emit('message', 'QRCode recebido, aponte a Câmera do seu celular!');
        });
    });

    // Evento disparado quando o cliente estÃ¡ pronto para uso
    client.on('ready', async () => {
        socket.emit('ready', 'Dispositivo pronto!');
        socket.emit('message', 'Dispositivo pronto!');


        // Tarefa agendada para executar a lÃ³gica de envio de mensagens periodicamente
        nodeCron.schedule('*/60 * * * * *', async function () {
            try {
                const agendamentoscobranca = await agendamentoZDG0();
                const agendamentosSolicitacao = await agendamentoZDG();
                const agendamentosFinalizacao = await agendamentoZDG2();
                const agendamentosstatusad = await agendamentoZDG3();
                const agendamentosdataip = await agendamentoZDG4();
                const agendamentosdatede = await agendamentoZDG5();
                const agendamentosdatecol = await agendamentoZDG6();
                const agendamentosdata_aniversario = await agendamentoZDG7();
                const agendamentosgarantia = await agendamentoZDG8();
                const agendamentosgarantiafi = await agendamentoZDG9();
                const agendamentospap = await agendamentoZDG10();
                const agendamentospapd = await agendamentoZDG11();
                const agendamentosdateip2 = await agendamentoZDG12();
                const agendamentosdateip3 = await agendamentoZDG13();
                const agendamentosdateip4 = await agendamentoZDG14();
                const agendamentosdateip5 = await agendamentoZDG15();
                const agendamentosdateip6 = await agendamentoZDG16();
                const agendamentosdatern = await agendamentoZDG17();

                const hoje = new Date();

                for (const agendamento of agendamentoscobranca) {
                    if (agendamento.data_cobranca && agendamento.data_cobranca <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemco && agendamento.mensagemco !== '') {
                            console.log('URL da mensagemco:', agendamento.mensagemco);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemco);
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemco:', error);
                            }
                        }

                        const success = await updateStatuscob(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusco atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusco da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosSolicitacao) {
                    if (agendamento.data_inclusao && agendamento.data_inclusao <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemvd && agendamento.mensagemvd !== '') {
                            console.log('URL da mensagemvd:', agendamento.mensagemvd);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemvd);
                                const linkURL = 'https://g.page/r/CYHjj8Vb6zLgEBM/review/'; // Replace this with your desired link URL
                                const textBelowImage = 'Seu feedback é importante para a Óticas Diniz RO. Poste uma avaliação no nosso perfil.';
                                const linkText = 'Clique aqui para avaliar'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;

                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mensagemvd:', error);
                            }
                        }

                        const success = await updateStatusvd(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusvd atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusvd da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

                for (const agendamento of agendamentosFinalizacao) {
                    if (agendamento.data_finalizacao && agendamento.data_finalizacao <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemfn && agendamento.mensagemfn !== '') {
                            console.log('URL da mensagemfn:', agendamento.mensagemfn);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemfn);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mensagemfn:', error);
                            }
                        }

                        const success = await updateStatusfn(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusfn atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusfn da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

                for (const agendamento of agendamentosstatusad) {
                    if (agendamento.dataad && agendamento.dataad <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemad && agendamento.mensagemad !== '') {
                            console.log('URL da mensagemad:', agendamento.mensagemad);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemad);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mensagemad:', error);
                            }
                        }

                        const success = await updateStatusad(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusad atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusad da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

                // mensagem de cuidar do seus oculos (controle OS)

                for (const agendamento of agendamentosdataip) {
                    if (agendamento.dataip && agendamento.dataip <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemip && agendamento.mensagemip !== '') {
                            console.log('URL da mensagemip:', agendamento.mensagemip);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemip);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mensagemip:', error);
                            }
                        }

                        const success = await updateStatusip(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusip atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusip da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

                // mensagem desconto (controle OS)
                for (const agendamento of agendamentosdatede) {
                    if (agendamento.datede && agendamento.datede <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemde && agendamento.mensagemde !== '') {
                            console.log('URL da mensagemde:', agendamento.mensagemde);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemde);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mensagemde:', error);
                            }
                        }

                        const success = await updateSattusde(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - sattusde atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o sattusde da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

                // Mensagem coleÃ§Ã£o nova (controle OS)
                for (const agendamento of agendamentosdatecol) {
                    if (agendamento.datecol && agendamento.datecol <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mesnagemcol && agendamento.mesnagemcol !== '') {
                            console.log('URL da mesnagemcol:', agendamento.mesnagemcol);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mesnagemcol);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mesnagemcol:', error);
                            }
                        }

                        const success = await updateStatuscol(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statuscol atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statuscol da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

                // Mensagem de Aniversario (controle OS)
                for (const agendamento of agendamentosdata_aniversario) {
                    if (agendamento.data_aniversario && agendamento.data_aniversario <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensageman && agendamento.mensageman !== '') {
                            console.log('URL da mensageman:', agendamento.mensageman);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensageman);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });
                            } catch (error) {
                                console.error('Erro ao obter a mensageman:', error);
                            }
                        }

                        const success = await updateStatusan(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusan atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusan da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosgarantia) {
                    if (agendamento.data_solicitacao && agendamento.data_solicitacao <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagems && agendamento.mensagems !== '') {
                            console.log('URL da mensagems:', agendamento.mensagems);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagems);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagems:', error);
                            }
                        }

                        const success = await updateStatusga(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statuss atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statuss da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosgarantiafi) {
                    if (agendamento.data_finalizacao && agendamento.data_finalizacao <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemf && agendamento.mensagemf !== '') {
                            console.log('URL da mensagemf:', agendamento.mensagemf);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemf);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemf:', error);
                            }
                        }

                        const success = await updateStatusgaf(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusf atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusf da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentospap) {
                    if (agendamento.data_entrevista && agendamento.data_entrevista <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemen && agendamento.mensagemen !== '') {
                            console.log('URL da mensagemen:', agendamento.mensagemen);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemen);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemen:', error);
                            }
                        }

                        const success = await updateStatusag(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusen atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusen da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentospapd) {
                    if (agendamento.data_entrevista && agendamento.data_entrevista <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemco && agendamento.mensagemco !== '') {
                            console.log('URL da mensagemco:', agendamento.mensagemco);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemco);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemco:', error);
                            }
                        }

                        const success = await updateStatusco(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusen atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusen da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosdateip2) {
                    if (agendamento.dateip2 && agendamento.dateip2 <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemip2 && agendamento.mensagemip2 !== '') {
                            console.log('URL da mensagemip2:', agendamento.mensagemip2);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemip2);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemip2:', error);
                            }
                        }

                        const success = await updateSatusip2(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusip2 atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusip2 da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosdateip3) {
                    if (agendamento.dateip3 && agendamento.dateip3 <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemip3 && agendamento.mensagemip3 !== '') {
                            console.log('URL da mensagemip3:', agendamento.mensagemip3);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemip3);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemip3:', error);
                            }
                        }

                        const success = await updatestatusip3(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusip3 atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusip3 da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosdateip4) {
                    if (agendamento.dateip4 && agendamento.dateip4 <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemip4 && agendamento.mensagemip4 !== '') {
                            console.log('URL da mensagemip4:', agendamento.mensagemip4);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemip4);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemip4:', error);
                            }
                        }

                        const success = await updateStatusiip4(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusiip4 atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusiip4 da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosdateip5) {
                    if (agendamento.dateip5 && agendamento.dateip5 <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemip5 && agendamento.mensagemip5 !== '') {
                            console.log('URL da mensagemip5:', agendamento.mensagemip5);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemip5);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemip5:', error);
                            }
                        }

                        const success = await updateStatusip5(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusip5 atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusip5 da mensagem ID: ' + agendamento.id);
                        }
                    }
                }


                for (const agendamento of agendamentosdateip6) {
                    if (agendamento.dateip6 && agendamento.dateip6 <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mensagemip6 && agendamento.mensagemip6 !== '') {
                            console.log('URL da mensagemip6:', agendamento.mensagemip6);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mensagemip6);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mensagemip6:', error);
                            }
                        }

                        const success = await updateStatusip6(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusip6 atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusip6 da mensagem ID: ' + agendamento.id);
                        }
                    }
                }




                for (const agendamento of agendamentosdatern) {
                    if (agendamento.datern && agendamento.datern <= hoje && !agendamento.enviado) {
                        // Marcar o agendamento como enviado
                        agendamento.enviado = true;

                        if (agendamento.nome !== '') {
                            client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                        }

                        if (agendamento.mesnagemrn && agendamento.mesnagemrn !== '') {
                            console.log('URL da mesnagemrn:', agendamento.mesnagemrn);
                            try {
                                const media = await MessageMedia.fromUrl(agendamento.mesnagemrn);
                                const linkURL = 'https://www.instagram.com/oticasdinizro/'; // Replace this with your desired link URL
                                const textBelowImage = 'siga nosso instagram';
                                const linkText = 'Clique aqui'; // Replace this with the text you want to display for the link

                                const caption = `${textBelowImage}\n\n${linkText}: ${linkURL}`;
                                client.sendMessage(agendamento.fone + '@c.us', media, { caption });

                            } catch (error) {
                                console.error('Erro ao obter a mesnagemrn:', error);
                            }
                        }

                        const success = await updateStatusrn(agendamento.id);
                        if (success) {
                            console.log('BOT-ZDG - Mensagem ID: ' + agendamento.id + ' - statusrn atualizado para "enviado"');
                        } else {
                            console.log('BOT-ZDG - Falha ao atualizar o statusrn da mensagem ID: ' + agendamento.id);
                        }
                    }
                }

            } catch (error) {
                console.error('Erro na tarefa agendada:', error);
            }
        });

    });

    // Evento disparado quando o cliente é autenticado com sucesso
    client.on('authenticated', () => {
        if (!authenticated) {
            authenticated = true;
            socket.emit('authenticated', 'Autenticado!');
            socket.emit('message', 'Autenticado!');
            console.log('Autenticado');
        }
    });

    // Evento disparado quando a autenticação falha
    client.on('auth_failure', function () {
        socket.emit('message', 'Falha na autenticação, reiniciando...');
        console.error('Falha na autenticação');
    });

    // Evento disparado quando o estado de conexão do cliente muda
    client.on('change_state', state => {
        console.log('Status de conexão:', state);
    });

    // Evento disparado quando o cliente é desconectado
    client.on('disconnected', (reason) => {
        socket.emit('message', 'Cliente desconectado!');
        console.log('Cliente desconectado', reason);
        client.initialize();
    });
});

// InicializaÃ§Ã£o do servidor
server.listen(port, function () {
    console.log('BOT-ZDG rodando na porta *:' + port);
});

