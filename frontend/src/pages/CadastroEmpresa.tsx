import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CadastroEmpresa() {
  const [form, setForm] = useState<any>({});
  const nav = useNavigate();
  const set = (k: string, v: any) => setForm((f:any)=>({ ...f, [k]: v }));
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/empresas', form);
    nav('/empresa/login');
  };
  return (
    <form onSubmit={submit} className="max-w-2xl mx-auto" aria-label="Cadastro de empresa">
      <h1 className="text-2xl font-semibold text-brand-dark mb-4">Cadastro de Empresa</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <Input id="cnpj" label="CNPJ" value={form.cnpj||''} onChange={e=>set('cnpj',e.target.value)} />
        <Input id="nome" label="Nome" value={form.nome||''} onChange={e=>set('nome',e.target.value)} />
        <Input id="email" label="Email" type="email" value={form.email||''} onChange={e=>set('email',e.target.value)} />
        <Input id="telefone" label="Telefone" value={form.telefone||''} onChange={e=>set('telefone',e.target.value)} />
        <Input id="descricao" label="Descrição" value={form.descricao||''} onChange={e=>set('descricao',e.target.value)} />
        <Input id="cep" label="CEP" value={form.cep||''} onChange={e=>set('cep',e.target.value)} />
        <Input id="cidade" label="Cidade" value={form.cidade||''} onChange={e=>set('cidade',e.target.value)} />
        <Input id="estado" label="Estado" value={form.estado||''} onChange={e=>set('estado',e.target.value)} />
        <Input id="senha" label="Senha" type="password" value={form.senha||''} onChange={e=>set('senha',e.target.value)} />
      </div>
      <Button type="submit" className="mt-4">Cadastrar</Button>
    </form>
  );
}