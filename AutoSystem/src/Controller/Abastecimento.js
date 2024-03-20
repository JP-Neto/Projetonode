// Controlador de Abastecimentos
import { openDb } from "../configDB.js";

export async function createTable_abastecimento() {
    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS Abastecimento(id INTEGER PRIMARY KEY , valorAbastecimento INTEGER NOT NULL, qmAtual REAL NOT NULL, posto TEXT, endereco TEXT, dataDaManutencao TEXT NOT NULL)');
}

export async function selectAbastecimentos() {
    const db = await openDb();
    const abastecimentos = await db.all('SELECT * FROM Abastecimento');
    return abastecimentos;
}

export async function selectAbastecimento(id) {
    const db = await openDb();
    const abastecimento = await db.get('SELECT * FROM Abastecimento WHERE id = ?', [id]);
    if (!abastecimento) {
        throw new Error('Abastecimento não encontrado');
    }
    return abastecimento;
}

export async function insertAbastecimento(abastecimento) {
    const db = await openDb();
    const { lastID } = await db.run('INSERT INTO Abastecimento (valorAbastecimento, qmAtual, posto, endereco, dataDaManutencao) VALUES (?, ?, ?, ?, ?)', [abastecimento.valorAbastecimento, abastecimento.qmAtual, abastecimento.posto, abastecimento.endereco, abastecimento.dataDaManutencao]);
    return await selectAbastecimento(lastID);
}

export async function updateAbastecimento(id, abastecimento) {
    const db = await openDb();
    await db.run('UPDATE Abastecimento SET valorAbastecimento = ?, qmAtual = ?, posto = ?, endereco = ?, dataDaManutencao = ? WHERE id = ?', [abastecimento.valorAbastecimento, abastecimento.qmAtual, abastecimento.posto, abastecimento.endereco, abastecimento.dataDaManutencao, id]);
    return await selectAbastecimento(id);
}

export async function deleteAbastecimento(id) {
    const db = await openDb();
    const result = await db.run('DELETE FROM Abastecimento WHERE id = ?', [id]);
    if (result.changes === 0) {
        throw new Error('Abastecimento não encontrado');
    }
}