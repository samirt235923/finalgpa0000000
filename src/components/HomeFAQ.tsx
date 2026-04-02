import FAQ from '@/components/FAQ';

interface FAQItem {
  question: string;
  answer: string;
}

export default function HomeFAQ({ items }: { items: FAQItem[] }) {
  return <FAQ items={items} />;
}
