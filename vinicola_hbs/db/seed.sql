USE vinicola;

INSERT INTO inicio (titulo, texto, botao)
VALUES ('Bem-vindo à nossa vinícola', 'Conheça os sabores e a tradição que tornam nossos vinhos únicos.', 'Saiba mais');

INSERT INTO sobre (texto, imagem) VALUES
('Nossa vinícola combina tradição e modernidade na produção de vinhos.', '/imgs/sobre1.jpg'),
('Produzimos com paixão, diretamente do coração da uva para o seu paladar.', '/imgs/sobre2.jpg');

INSERT INTO produtos (imagem, titulo, preco) VALUES
('/imgs/produto1.jpg', 'Vinho Tinto Reserva', 'R$ 120,00'),
('/imgs/produto2.jpg', 'Vinho Branco Suave', 'R$ 90,00'),
('/imgs/produto3.jpg', 'Espumante Brut', 'R$ 150,00'),
('/imgs/produto4.jpg', 'Rosé Seco', 'R$ 110,00');

INSERT INTO contato (texto, foto, mapa) VALUES
('Entre em contato conosco pelo WhatsApp ou e-mail.', '/imgs/contato.jpg', 'https://maps.google.com/?q=-23.55052,-46.633308');

INSERT INTO adm (login, senha) VALUES ('admin', '1234');
