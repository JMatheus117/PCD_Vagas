import { useState } from 'react';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { escolaridadeOptions, sexoOptions, deficienciaOptions } from '../constants/enums';

export default function CadastroUsuario() {
  const [form, setForm] = useState<any>({});
  const nav = useNavigate();
  const set = (k: string, v: any) => setForm((f:any)=>({ ...f, [k]: v }));

  // aqui está a função com tratamento de erro
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/usuarios', form);
      nav('/usuario/login');
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || "Erro ao cadastrar usuário");
    }
  }
  return (
    <form onSubmit={submit} className="max-w-2xl mx-auto" aria-label="Cadastro de usuário">
      <h1 className="text-2xl font-semibold text-brand-dark mb-4">Cadastro de Usuário</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <Input id="cpf" label="CPF" value={form.cpf||''} onChange={e=>set('cpf',e.target.value)} />
        <Input id="email" label="Email" type="email" value={form.email||''} onChange={e=>set('email',e.target.value)} />
        <Input id="celular" label="Celular" value={form.celular||''} onChange={e=>set('celular',e.target.value)} />
        <Input id="nome" label="Nome" value={form.nome||''} onChange={e=>set('nome',e.target.value)} />
        <Input id="nascimento" label="Nascimento" type="date" value={form.nascimento||''} onChange={e=>set('nascimento',e.target.value)} />
        <Dropdown id="sexo" label="Sexo" options={sexoOptions} value={form.sexo||''} onChange={e=>set('sexo',e.target.value)} />
        <Dropdown id="escolaridade" label="Escolaridade" options={escolaridadeOptions} value={form.escolaridade||''} onChange={e=>set('escolaridade',e.target.value)} />
        <Dropdown id="tipo_deficiencia" label="Tipo de deficiência" options={deficienciaOptions} value={form.tipo_deficiencia||''} onChange={e=>set('tipo_deficiencia',e.target.value)} />
        <Input id="subtipo_deficiencia" label="Subtipo" value={form.subtipo_deficiencia||''} onChange={e=>set('subtipo_deficiencia',e.target.value)} />
        <Input id="barreiras" label="Barreiras" value={form.barreiras||'nenhuma'} onChange={e=>set('barreiras',e.target.value)} />
        <Input id="acessibilidades_necessarias" label="Acessibilidades necessárias" value={form.acessibilidades_necessarias||''} onChange={e=>set('acessibilidades_necessarias',e.target.value)} />
        <Input id="cep" label="CEP" value={form.cep||''} onChange={e=>set('cep',e.target.value)} />
        <Input id="cidade" label="Cidade" value={form.cidade||''} onChange={e=>set('cidade',e.target.value)} />
        <Input id="estado" label="Estado" value={form.estado||''} onChange={e=>set('estado',e.target.value)} />
        <Input id="senha" label="Senha" type="password" value={form.senha||''} onChange={e=>set('senha',e.target.value)} />
      </div>
      <Button type="submit" className="mt-4">Cadastrar</Button>
    </form>
  );
}