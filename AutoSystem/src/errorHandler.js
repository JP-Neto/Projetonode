export function handleDatabaseError(err, req, res, next) {
    console.error('Erro no banco de dados:', err);
    res.status(500).json({ error: 'Erro interno do servidor.' });
}
