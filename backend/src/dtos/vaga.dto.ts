import { z } from 'zod';

export const createVagaSchema = z.object({
  titulo: z.string().min(3),
  descricao: z.string().max(200),
  beneficios: z.string(),
  deficiencias_compativeis: z.array(z.enum(['FISICA','AUDITIVA','VISUAL','INTELECTUAL','PSICOSOCIAL','MULTIPLA','OUTRA'])).min(1),
  tipo_vaga: z.enum(['REMOTA','HIBRIDA','PRESENCIAL']),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  salario: z.string(),
  acessibilidades_oferecidas: z.string(),
  data_fechamento: z.string().optional(),
});

export const updateVagaSchema = createVagaSchema.partial();