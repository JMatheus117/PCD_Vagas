type Option = { value: string; label: string };
type Props = { id: string; label: string; options: Option[]; value?: string; onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void };
export default function Dropdown({ id, label, options, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-brand-dark">{label}</label>
      <select id={id} value={value} onChange={onChange}
        className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
        aria-labelledby={id}
      >
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}