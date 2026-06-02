const destinos = [
    {
        id: 1,
        nome: "Lençóis Maranhenses",
        localizacao: "Maranhão",
        tipo: "Dunas e lagoas",
        resumo: "Dunas brancas e lagoas cristalinas formam uma das paisagens mais impressionantes do Brasil.",
        descricao: "Os Lençóis Maranhenses são um dos destinos naturais mais marcantes do país. Durante o período de chuvas, lagoas de água doce se formam entre as dunas, criando um cenário único, com aparência quase surreal. É um lugar perfeito para quem busca natureza, contemplação, fotografia e uma experiência diferente de qualquer outra paisagem brasileira.",
        melhorEpoca: "Entre junho e setembro, quando as lagoas estão mais cheias.",
        experiencias: "Caminhar pelas dunas, tomar banho nas lagoas, assistir ao pôr do sol e fazer passeios de 4x4.",
        curiosidade: "Mesmo parecendo um deserto, a região recebe chuvas que formam lagoas naturais entre as dunas.",
        dica: "Use roupas leves, leve água e prefira visitar no fim da tarde para aproveitar melhor a luz da paisagem.",
        imagem: "img/lencois-maranhenses.jpg"
    },
    {
        id: 2,
        nome: "Jalapão",
        localizacao: "Tocantins",
        tipo: "Dunas, fervedouros e cerrado",
        resumo: "Um destino de natureza intensa, com fervedouros, dunas douradas, cachoeiras e paisagens do Cerrado.",
        descricao: "O Jalapão é um dos destinos mais surpreendentes do Brasil. Localizado no Tocantins, reúne dunas douradas, rios cristalinos, cachoeiras, formações rochosas e os famosos fervedouros, onde a água impede que a pessoa afunde. É uma viagem perfeita para quem gosta de aventura, paisagens abertas e contato direto com a natureza.",
        melhorEpoca: "Entre maio e setembro, durante o período mais seco.",
        experiencias: "Conhecer fervedouros, visitar dunas, tomar banho em cachoeiras, fazer trilhas leves e apreciar o pôr do sol.",
        curiosidade: "Nos fervedouros, a pressão da água que nasce do solo cria uma flutuação natural.",
        dica: "Prepare-se para deslocamentos longos em estrada de terra e contrate passeios com guias experientes.",
        imagem: "img/jalapao.jpg"
    },
    {
        id: 3,
        nome: "Chapada Diamantina",
        localizacao: "Bahia",
        tipo: "Chapada, trilhas e cachoeiras",
        resumo: "Cachoeiras gigantes, grutas, morros e trilhas em uma das regiões naturais mais bonitas da Bahia.",
        descricao: "A Chapada Diamantina é um destino cheio de paisagens fortes e variadas. A região possui cachoeiras, grutas, poços de água cristalina, morros, trilhas e mirantes. É um lugar ideal para quem gosta de ecoturismo, aventura e cenários naturais que impressionam pela grandiosidade.",
        melhorEpoca: "Entre abril e outubro, quando o clima costuma favorecer trilhas e passeios.",
        experiencias: "Visitar a Cachoeira da Fumaça, conhecer o Morro do Pai Inácio, explorar grutas e tomar banho em poços naturais.",
        curiosidade: "A região recebeu esse nome por causa da exploração de diamantes no passado.",
        dica: "Monte um roteiro com calma, porque as atrações ficam espalhadas e muitas exigem deslocamento.",
        imagem: "img/chapada-diamantina.jpg"
    },
    {
        id: 4,
        nome: "Fernando de Noronha",
        localizacao: "Pernambuco",
        tipo: "Ilha e paraíso natural",
        resumo: "Praias paradisíacas, águas cristalinas, mirantes e uma das experiências mais desejadas do Brasil.",
        descricao: "Fernando de Noronha é um arquipélago conhecido por suas praias de águas transparentes, vida marinha abundante, trilhas, mirantes e paisagens preservadas. É um destino ideal para quem busca contato com o mar, mergulho, tranquilidade e uma experiência natural mais exclusiva.",
        melhorEpoca: "Entre agosto e fevereiro, quando o mar costuma estar mais claro.",
        experiencias: "Mergulho, trilhas, passeio de barco, observação de golfinhos, visita à Praia do Sancho e pôr do sol no mirante.",
        curiosidade: "A Praia do Sancho aparece frequentemente em listas de praias mais bonitas do mundo.",
        dica: "Planeje a viagem com antecedência e fique atento às taxas ambientais obrigatórias.",
        imagem: "img/fernando-noronha.jpg"
    },
    {
        id: 5,
        nome: "Bonito",
        localizacao: "Mato Grosso do Sul",
        tipo: "Rios cristalinos e ecoturismo",
        resumo: "Águas transparentes, flutuação em rios, grutas e experiências de contato direto com a natureza.",
        descricao: "Bonito é um dos principais destinos de ecoturismo do Brasil. A cidade é famosa pelos rios de águas extremamente transparentes, grutas, cachoeiras e passeios organizados com foco em preservação ambiental. É um destino excelente para quem gosta de natureza, água doce e experiências tranquilas, mas marcantes.",
        melhorEpoca: "Entre maio e setembro, quando a água costuma estar mais cristalina.",
        experiencias: "Fazer flutuação em rios, visitar grutas, conhecer cachoeiras, trilhas ecológicas e passeios de contemplação.",
        curiosidade: "Bonito é referência em turismo sustentável, com controle de visitantes em muitos atrativos.",
        dica: "Reserve os passeios antes da viagem, porque muitos locais têm limite diário de entrada.",
        imagem: "img/bonito.jpg"
    },
    {
        id: 6,
        nome: "Foz do Iguaçu",
        localizacao: "Paraná",
        tipo: "Cataratas e natureza",
        resumo: "Um dos maiores espetáculos naturais do mundo, com quedas d’água gigantescas e paisagens impactantes.",
        descricao: "Foz do Iguaçu é conhecida pelas Cataratas do Iguaçu, um conjunto grandioso de quedas d’água cercadas por natureza. O destino mistura paisagens naturais, passeios culturais e experiências de fronteira, sendo uma das viagens mais impressionantes do Brasil.",
        melhorEpoca: "Durante todo o ano, com experiências diferentes conforme o volume de água.",
        experiencias: "Visitar as Cataratas, conhecer o Parque das Aves, fazer trilhas, passeios de barco e observar os mirantes.",
        curiosidade: "As Cataratas do Iguaçu estão entre as quedas d’água mais famosas do mundo.",
        dica: "Leve capa de chuva ou roupa extra, pois alguns passeios chegam bem perto das quedas.",
        imagem: "img/foz-iguacu.jpg"
    },
    {
        id: 7,
        nome: "Alter do Chão",
        localizacao: "Pará",
        tipo: "Praias de rio e Amazônia",
        resumo: "Praias de água doce, areia clara e paisagens amazônicas em um destino surpreendente no Norte do Brasil.",
        descricao: "Alter do Chão é conhecido como um dos destinos mais bonitos da Amazônia brasileira. Localizado às margens do Rio Tapajós, o lugar possui praias de água doce, areia clara, vegetação amazônica e paisagens que mudam conforme o nível dos rios. É uma experiência diferente, tranquila e muito brasileira.",
        melhorEpoca: "Entre agosto e dezembro, quando surgem mais faixas de areia nas praias de rio.",
        experiencias: "Conhecer a Ilha do Amor, fazer passeios de barco, visitar comunidades locais, aproveitar praias de rio e ver o pôr do sol.",
        curiosidade: "O destino é muitas vezes chamado de Caribe Amazônico por causa das águas claras do Rio Tapajós.",
        dica: "Verifique a época do ano antes de ir, pois o nível do rio muda bastante a paisagem.",
        imagem: "img/alter-chao.jpg"
    },
    {
        id: 8,
        nome: "Gramado e Canela",
        localizacao: "Rio Grande do Sul",
        tipo: "Serra, arquitetura e turismo",
        resumo: "Cidades charmosas da Serra Gaúcha, com clima frio, parques, gastronomia e paisagens acolhedoras.",
        descricao: "Gramado e Canela formam um dos roteiros mais famosos da Serra Gaúcha. As cidades são conhecidas pelo clima frio, arquitetura charmosa, cafés, parques, chocolates, jardins e atrações turísticas para diferentes estilos de viajantes.",
        melhorEpoca: "Entre junho e agosto para aproveitar o frio, ou no fim do ano para ver a decoração natalina.",
        experiencias: "Conhecer parques, visitar chocolaterias, caminhar pelo centro, ver a Catedral de Pedra e aproveitar restaurantes locais.",
        curiosidade: "Gramado é muito conhecida pelo Natal Luz, um dos eventos natalinos mais famosos do Brasil.",
        dica: "Leve roupas de frio, principalmente se for durante o inverno ou à noite.",
        imagem: "img/gramado-canela.jpg"
    },
    {
        id: 9,
        nome: "Ouro Preto",
        localizacao: "Minas Gerais",
        tipo: "Cidade histórica",
        resumo: "Ruas de pedra, igrejas barrocas, museus e mirantes em uma das cidades históricas mais lindas do Brasil.",
        descricao: "Ouro Preto é uma das cidades históricas mais importantes do país. Suas ladeiras, casarões coloniais, igrejas barrocas e museus criam uma verdadeira viagem no tempo. Além da história, a cidade também tem paisagens urbanas marcantes e uma atmosfera cultural muito forte.",
        melhorEpoca: "Entre abril e setembro, quando o clima costuma estar mais agradável para caminhar.",
        experiencias: "Visitar igrejas históricas, conhecer museus, caminhar pelo centro, explorar mirantes e experimentar a culinária mineira.",
        curiosidade: "Ouro Preto teve grande importância durante o ciclo do ouro no Brasil colonial.",
        dica: "Use calçados confortáveis, porque a cidade tem muitas ladeiras e ruas de pedra.",
        imagem: "img/ouro-preto.jpg"
    },
    {
        id: 10,
        nome: "Capitólio",
        localizacao: "Minas Gerais",
        tipo: "Lagos, cânions e cachoeiras",
        resumo: "Cânions, águas esverdeadas e o famoso Lago de Furnas em uma das paisagens mais bonitas de Minas.",
        descricao: "Capitólio é um destino mineiro conhecido pelos cânions, cachoeiras, mirantes e pelo Lago de Furnas, também chamado de Mar de Minas. É uma ótima escolha para quem busca passeios de lancha, contato com a natureza e paisagens fortes.",
        melhorEpoca: "Entre abril e setembro, quando há menor chance de chuvas fortes.",
        experiencias: "Fazer passeio de lancha, visitar cachoeiras, conhecer mirantes, fotografar os cânions e aproveitar o Lago de Furnas.",
        curiosidade: "A região ficou conhecida como Mar de Minas pela grande extensão de água do Lago de Furnas.",
        dica: "Verifique as condições climáticas antes dos passeios e escolha empresas autorizadas.",
        imagem: "img/capitolio.jpg"
    },
    {
        id: 11,
        nome: "Rio de Janeiro",
        localizacao: "Rio de Janeiro",
        tipo: "Praia, montanha e cidade",
        resumo: "Praias famosas, montanhas, mirantes e alguns dos cenários urbanos mais conhecidos do mundo.",
        descricao: "O Rio de Janeiro mistura natureza e vida urbana de uma forma única. A cidade reúne praias, florestas, montanhas, bairros históricos, mirantes e cartões-postais conhecidos no mundo inteiro. É um destino cheio de energia, cultura e paisagens marcantes.",
        melhorEpoca: "Entre maio e setembro, quando o clima costuma ser mais agradável para passeios.",
        experiencias: "Visitar o Cristo Redentor, subir o Pão de Açúcar, caminhar em Copacabana, conhecer o Jardim Botânico e explorar a Lapa.",
        curiosidade: "A cidade é conhecida mundialmente pela combinação de praia, montanha e cultura popular.",
        dica: "Planeje bem os deslocamentos e priorize passeios em regiões movimentadas e turísticas.",
        imagem: "img/rio-de-janeiro.jpg"
    },
    {
        id: 12,
        nome: "Paraty",
        localizacao: "Rio de Janeiro",
        tipo: "Cidade histórica e litoral",
        resumo: "Casarões coloniais, ruas de pedra, ilhas, praias e uma atmosfera artística à beira-mar.",
        descricao: "Paraty é um destino charmoso que combina história, cultura e natureza. Seu centro histórico preservado, junto com praias, ilhas, cachoeiras e eventos culturais, cria uma experiência completa para quem gosta de caminhar, fotografar e descobrir lugares com identidade própria.",
        melhorEpoca: "Entre abril e outubro, quando o clima tende a ser mais estável.",
        experiencias: "Passear pelo centro histórico, fazer passeio de barco, conhecer praias próximas, visitar cachoeiras e aproveitar a gastronomia local.",
        curiosidade: "Paraty fez parte da rota do ouro durante o período colonial brasileiro.",
        dica: "Evite circular de carro pelo centro histórico; o passeio a pé combina muito mais com a cidade.",
        imagem: "img/paraty.jpg"
    }
];

const listaDestinos = document.getElementById("lista-destinos");

if (listaDestinos) {
    destinos.forEach(destino => {
        listaDestinos.innerHTML += `
            <article class="card">
                <img src="${destino.imagem}" alt="${destino.nome}">
                
                <div class="card-content">
                    <span class="categoria">${destino.tipo}</span>
                    <h3>${destino.nome}</h3>
                    <p class="localizacao">${destino.localizacao}</p>
                    <p>${destino.resumo}</p>
                    <a href="detalhes.html?id=${destino.id}" class="btn">Explorar destino</a>
                </div>
            </article>
        `;
    });
}

const detalhesDestino = document.getElementById("detalhes-destino");

if (detalhesDestino) {
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const destinoSelecionado = destinos.find(destino => destino.id === id);

    if (destinoSelecionado) {
        detalhesDestino.innerHTML = `
            <article class="detalhe">
                <img class="detalhe-img" src="${destinoSelecionado.imagem}" alt="${destinoSelecionado.nome}">

                <div class="detalhe-content">
                    <span class="categoria">${destinoSelecionado.tipo}</span>
                    <h2>${destinoSelecionado.nome}</h2>
                    <p class="localizacao">${destinoSelecionado.localizacao}</p>

                    <p class="descricao">${destinoSelecionado.descricao}</p>

                    <div class="info-grid">
                        <div class="info-card">
                            <h3>Melhor época</h3>
                            <p>${destinoSelecionado.melhorEpoca}</p>
                        </div>

                        <div class="info-card">
                            <h3>Experiências</h3>
                            <p>${destinoSelecionado.experiencias}</p>
                        </div>

                        <div class="info-card">
                            <h3>Curiosidade</h3>
                            <p>${destinoSelecionado.curiosidade}</p>
                        </div>

                        <div class="info-card">
                            <h3>Dica de viagem</h3>
                            <p>${destinoSelecionado.dica}</p>
                        </div>
                    </div>

                    <a href="index.html" class="btn voltar">Voltar para a home</a>
                </div>
            </article>
        `;
    } else {
        detalhesDestino.innerHTML = `
            <div class="erro">
                <h2>Destino não encontrado</h2>
                <p>O destino selecionado não existe ou o link está incorreto.</p>
                <a href="index.html" class="btn">Voltar para a home</a>
            </div>
        `;
    }
}