import { openDb } from "../configDB.js";

export async function createTable_dbordo() {
    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS Diario_bordo(id INTEGER PRIMARY KEY ,dataViagem TEXT NOT NULL, destino TEXT NOT NULL,combustivel INTEGER NOT NULL, velocidadeMedia INTEGER NOT NULL, proposito TEXT NOT NULL, quilometragem TEXT NOT NULL, tempoDeViagem INTEGER NOT NULL, obs TEXT )');
}

export async function selectViagens() {
    const db = await openDb();
    const viagens = await db.all('SELECT * FROM Diario_bordo LIMIT 0, 10');
    return viagens;
}

export async function selectViagem(id) {
    const db = await openDb();
    const viagem = await db.get('SELECT * FROM Diario_bordo WHERE id=?', [id]);
    if (!viagem) {
        throw new Error('Viagem não encontrada');
    }
    return viagem;
}

export async function insertViagem(viagem) {
    const db = await openDb();
    await db.run('INSERT INTO Diario_bordo(dataViagem, destino, combustivel, velocidadeMedia, proposito, quilometragem, tempoDeViagem, obs) VALUES(?,?,?,?,?,?,?,?)', [viagem.dataViagem, viagem.destino, viagem.combustivel, viagem.velocidadeMedia, viagem.proposito, viagem.quilometragem, viagem.tempoDeViagem, viagem.obs]);
    return { "statusCode": 200 };
}

export async function updateViagem(id, viagem) {
    const db = await openDb();
    await db.run('UPDATE Diario_bordo SET dataViagem=?, destino=?, combustivel=?, velocidadeMedia=?, proposito=?, quilometragem=?, tempoDeViagem=?, obs=? WHERE id=?', [viagem.dataViagem, viagem.destino, viagem.combustivel, viagem.velocidadeMedia, viagem.proposito, viagem.quilometragem, viagem.tempoDeViagem, viagem.obs, id]);
    return { "statusCode": 200 };
}

export async function deleteViagem(id) {
    const db = await openDb();
    const deletado = await db.run('DELETE FROM Diario_bordo WHERE id=?', [id]);
    if (deletado.changes === 0) {
        throw new Error('Viagem não encontrada');
    }
    return { "statusCode": 200 };
}
