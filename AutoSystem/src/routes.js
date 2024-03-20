import { Router } from 'express';
import { selectViagens, selectViagem, insertViagem, updateViagem, deleteViagem } from './Controller/D_bordo.js';
import { selectManutencoes, selectManutencao, insertManutencao, updateManutencao, deleteManutencao } from './Controller/Manutencoes.js';
import { selectAbastecimentos, selectAbastecimento, insertAbastecimento, updateAbastecimento, deleteAbastecimento } from './Controller/Abastecimento.js';

const router = Router();

// Rotas para viagens
router.get('/viagens', async (req, res) => {
    try {
        const viagens = await selectViagens(req, res);
        res.json(viagens); // Retorna os dados das viagens como JSON
    } catch (error) {
        console.error('Erro ao obter viagens:', error);
        res.status(500).json({ error: 'Erro ao obter as viagens.' }); // Retorna erro como JSON
    }
});

router.get('/viagens/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const viagem = await selectViagem(id);
        res.json(viagem); // Enviar os dados da viagem como JSON
    } catch (error) {
        console.error('Erro ao obter a viagem:', error);
        res.status(500).json({ error: 'Erro ao obter a viagem.' }); // Envie a mensagem de erro para o cliente
    }
});

router.post('/viagens', async (req, res) => {
    try {
        const viagem = req.body;
        const novaViagem = await insertViagem(viagem);
        res.json(novaViagem);
    } catch (error) {
        console.error('Erro ao inserir viagem:', error);
        res.status(500).json({ error: 'Erro ao inserir a viagem.' });
    }
});

router.put('/viagens/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const viagem = req.body;
        const viagemAtualizada = await updateViagem(id, viagem);
        res.json(viagemAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar viagem:', error);
        res.status(500).json({ error: 'Erro ao atualizar a viagem.' });
    }
});    

router.delete('/viagens/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteViagem(id);
        res.json({ message: 'Viagem excluída com sucesso.' });
    } catch (error) {
        console.error('Erro ao excluir viagem:', error);
        res.status(500).json({ error: 'Erro ao excluir a viagem.' });
    }
});

// Rotas para manutenções
router.get('/manutencoes', async (req, res) => {
    try {
        const manutencoes = await selectManutencoes();
        res.json(manutencoes);
    } catch (error) {
        console.error('Erro ao obter manutenções:', error);
        res.status(500).json({ error: 'Erro ao obter as manutenções.' });
    }
});

router.get('/manutencao/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const manutencao = await selectManutencao(id);
        res.json(manutencao);
    } catch (error) {
        console.error('Erro ao obter a manutenção:', error);
        res.status(500).json({ error: 'Erro ao obter a manutenção.' });
    }
});

router.post('/manutencoes', async (req, res) => {
    try {
        const novaManutencao = await insertManutencao(req.body);
        res.json(novaManutencao);
    } catch (error) {
        console.error('Erro ao inserir manutenção:', error);
        res.status(500).json({ error: 'Erro ao inserir a manutenção.' });
    }
});

router.put('/manutencao/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const manutencao = req.body;
        const manutencaoAtualizada = await updateManutencao(id, manutencao);
        res.json(manutencaoAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar manutenção:', error);
        res.status(500).json({ error: 'Erro ao atualizar a manutenção.' });
    }
});

router.delete('/manutencao/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteManutencao(id);
        res.json({ message: 'Manutenção excluída com sucesso.' });
    } catch (error) {
        console.error('Erro ao excluir manutenção:', error);
        res.status(500).json({ error: 'Erro ao excluir a manutenção.' });
    }
});

// Rotas para abastecimentos
router.get('/abastecimentos', async (req, res) => {
    try {
        const abastecimentos = await selectAbastecimentos(req, res);
        res.json(abastecimentos);
    } catch (error) {
        console.error('Erro ao obter abastecimentos:', error);
        res.status(500).json({ error: 'Erro ao obter os abastecimentos.' });
    }
});

router.get('/abastecimentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const abastecimento = await selectAbastecimento(id);
        res.json(abastecimento);
    } catch (error) {
        console.error('Erro ao obter o abastecimento:', error);
        res.status(500).json({ error: 'Erro ao obter o abastecimento.' });
    }
});

router.post('/abastecimentos', async (req, res) => {
    try {
        const abastecimento = req.body;
        const novoAbastecimento = await insertAbastecimento(abastecimento);
        res.json(novoAbastecimento);
    } catch (error) {
        console.error('Erro ao inserir abastecimento:', error);
        res.status(500).json({ error: 'Erro ao inserir o abastecimento.' });
    }
});

router.put('/abastecimentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const abastecimento = req.body;
        const abastecimentoAtualizado = await updateAbastecimento(id, abastecimento);
        res.json(abastecimentoAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar abastecimento:', error);
        res.status(500).json({ error: 'Erro ao atualizar o abastecimento.' });
    }
});

router.delete('/abastecimentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteAbastecimento(id);
        res.json({ message: 'Abastecimento excluído com sucesso.' });
    } catch (error) {
        console.error('Erro ao excluir abastecimento:', error);
        res.status(500).json({ error: 'Erro ao excluir o abastecimento.' });
    }
});

export default router;
