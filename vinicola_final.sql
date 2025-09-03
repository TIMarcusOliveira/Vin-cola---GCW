-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03/09/2025 às 02:55
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `vinicola`
--
CREATE DATABASE IF NOT EXISTS `vinicola` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vinicola`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `adm`
--

CREATE TABLE `adm` (
  `id` int(11) NOT NULL,
  `login` varchar(90) NOT NULL,
  `senha` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `adm`
--

INSERT INTO `adm` (`id`, `login`, `senha`) VALUES
(1, 'admin', '1234');

-- --------------------------------------------------------

--
-- Estrutura para tabela `contato`
--

CREATE TABLE `contato` (
  `id` int(11) NOT NULL,
  `texto` varchar(500) NOT NULL,
  `foto` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `contato`
--

INSERT INTO `contato` (`id`, `texto`, `foto`) VALUES
(1, 'Whatsapp: +55 (11) 9474-5586', '/img/zap.jpg'),
(2, 'Telefone: +55 (11) 4657-2442', '/img/telefone.jpg'),
(3, '@lagrimasdebaco', '/img/insta.jpg'),
(4, 'lagrimasdebaco@outlook', '/img/email.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `inicio`
--

CREATE TABLE `inicio` (
  `id` int(11) NOT NULL,
  `titulo` varchar(90) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `botao` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `inicio`
--

INSERT INTO `inicio` (`id`, `titulo`, `texto`, `botao`) VALUES
(1, 'Bem-vindo à nossa vinícola', 'Conheça os sabores e a tradição que tornam nossos vinhos únicos. Produzimos com paixão, diretamente do coração da uva para o seu paladar.', 'Saiba mais');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `imagem` varchar(90) NOT NULL,
  `titulo` varchar(90) NOT NULL,
  `preco` varchar(90) NOT NULL,
  `descricao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `imagem`, `titulo`, `preco`, `descricao`) VALUES
(5, '/img/v1.png', 'Vinho Tinto Seco', 'R$120', 'Rico em sabor, ideal para carnes vermelhas.'),
(6, '/img/v2.png', 'Vinho Branco Suave', 'R$70', 'Leve e refrescante, perfeito para dias ensolarados.'),
(7, '/img/v3.png', 'Espumante Rosé', 'R$150', 'Elegante e equilibrado, ótimo para celebrações.'),
(8, '/img/v4.png', 'Suco de Uva Integral', 'R$50', '100% natural, sem adição de açúcar.'),
(9, '/img/v5.png', 'Kit Degustação', 'R$120', 'Seleção especial de rótulos para experimentar.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sobre`
--

CREATE TABLE `sobre` (
  `id` int(11) NOT NULL,
  `texto` varchar(2048) NOT NULL,
  `imagem1` varchar(90) NOT NULL,
  `imagem2` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `sobre`
--

INSERT INTO `sobre` (`id`, `texto`, `imagem1`, `imagem2`) VALUES
(3, 'Na Lágrimas de Baco, a paixão pelo vinho é cultivada em cada parreira e em cada garrafa. Fundada com o compromisso de unir tradição e inovação, nossa vinícola dedica-se a produzir vinhos que refletem a riqueza do terroir e a personalidade de cada safra.\r\n\r\nAcreditamos que o vinho é mais do que uma bebida: é uma experiência, uma celebração de momentos e histórias compartilhadas. Desde o cuidado com a seleção das uvas até a maturação e o engarrafamento, cada etapa do nosso processo é guiada pelo respeito à natureza e pela busca incessante pela excelência.\r\n\r\nConvidamos você a conhecer nossos vinhos, explorar nossos vinhedos e brindar conosco à arte de transformar uvas em emoções engarrafadas. Na Lágrimas de Baco, cada gole conta uma história.', '/img/vinicola1.jpg', '/img/vinicola2.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `adm`
--
ALTER TABLE `adm`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `inicio`
--
ALTER TABLE `inicio`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `sobre`
--
ALTER TABLE `sobre`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adm`
--
ALTER TABLE `adm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `contato`
--
ALTER TABLE `contato`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `inicio`
--
ALTER TABLE `inicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `sobre`
--
ALTER TABLE `sobre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
