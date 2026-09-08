const getRanking = (req, res) => {
    res.json({
        ok: true,
        data: [
            {
                posicion: 1,
                jugador: 'Cristian',
                rating: 1500,
                rango: 'Platino'
            },
            {
                posicion: 2,
                jugador: 'Player2',
                rating: 1400,
                rango: 'Oro'
            }
        ]
    });
};

const getGlobalStats = (req, res) => {
    res.json({
        ok: true,
        data: {
            jugadores: 0,
            batallas: 0,
            criaturas: 0,
            movimientos: 0,
            objetos: 0
        }
    });
};

module.exports = {
    getRanking,
    getGlobalStats
};