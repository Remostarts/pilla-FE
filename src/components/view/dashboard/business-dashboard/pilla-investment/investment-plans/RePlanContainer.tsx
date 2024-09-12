interface PlanData {
  id: number;
  name: string;
  window: string;
  tenure: string;
  roi: string;
  investment: string;
}

interface PlanButtonProps {
  data: PlanData;
  isSelected: boolean;
  onSelect?: (window: string) => void;
}

export default function RePlanContainer({ data, isSelected, onSelect }: PlanButtonProps) {
  return (
    <button
      className={`mb-4 w-full cursor-pointer rounded-lg border p-4 text-left ${
        isSelected ? 'border-primary-500' : 'border-gray-200'
      }`}
      onClick={() => onSelect && onSelect(data.window)}
    >
      <h3 className="font-inter font-semibold text-gray-800">{data.name}</h3>
      <p className="text-sm text-gray-600">Minimum Tenure: {data.tenure}</p>
      <p className="text-sm text-gray-600">
        Enjoy up to {data.roi} ROI per annum when you invest up to {data.investment}
      </p>
    </button>
  );
}
