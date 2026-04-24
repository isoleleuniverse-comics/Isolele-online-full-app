interface HomeStructuredDataProps {
  data: Record<string, unknown>;
}

function StructuredDataScript({ data }: HomeStructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

interface HomeStructuredDataGroupProps {
  organization: Record<string, unknown>;
  comicSeries: Record<string, unknown>;
  website: Record<string, unknown>;
}

export function HomeStructuredData({ organization, comicSeries, website }: HomeStructuredDataGroupProps) {
  return (
    <>
      <StructuredDataScript data={organization} />
      <StructuredDataScript data={comicSeries} />
      <StructuredDataScript data={website} />
    </>
  );
}
