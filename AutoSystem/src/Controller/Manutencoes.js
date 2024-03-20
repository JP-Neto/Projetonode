import { openDb } from '../configDB.js';

export async function createManutencoesTable() {
    const db = await openDatabase();
    await db.exec(`
      CREATE TABLE IF NOT EXISTS Manutencoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dataDaManutencao TEXT NOT NULL,
        quilometragem INTEGER NOT NULL,
        manutencao TEXT NOT NULL,
        manutencao_obs TEXT
      );
    `);
  }

export async function selectManutencoes() {
    const db = await openDb();
    const manutencoes = await db.all('SELECT * FROM Manutencoes');
    return manutencoes;
}

export async function selectManutencao(id) {
    const db = await openDb();
    const manutencao = await db.get('SELECT * FROM Manutencoes WHERE id = ?', [id]);
    if (!manutencao) {
        throw new Error('Manutenção não encontrada');
    }
    return manutencao;
}

export async function insertManutencao(manutencoes) {
    const db = await openDb();
    const { dataDaManutencao, quilometragem, manutencao, manutencao_obs } = manutencoes;
    const { lastID } = await db.run(
        'INSERT INTO Manutencoes (dataDaManutencao, quilometragem, manutencao, manutencao_obs) VALUES (?, ?, ?, ?)', 
        [dataDaManutencao, quilometragem, manutencao, manutencao_obs]
    );
    return await selectManutencao(lastID);
}

export async function updateManutencao(id, manutencoes) {
    const db = await openDb();
    const { dataDaManutencao, quilometragem, manutencao, manutencao_obs } = manutencoes;
    await db.run(
        'UPDATE Manutencoes SET dataDaManutencao = ?, quilometragem = ?, manutencao = ?, manutencao_obs = ? WHERE id = ?', 
        [dataDaManutencao, quilometragem, manutencao, manutencao_obs, id]
    );
    return await selectManutencao(id);
}

export async function deleteManutencao(id) {
    const db = await openDb();
    const result = await db.run('DELETE FROM Manutencoes WHERE id = ?', [id]);
    if (result.changes === 0) {
        throw new Error('Manutenção não encontrada');
    }
}
