'use client';

export default function AdUnit() {
  return (
    <div className="my-8 min-h-[250px] flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5159148916272403"
           crossOrigin="anonymous"></script>
      {/* ads1 */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-5159148916272403"
           data-ad-slot="6663000907"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </script>
    </div>
  );
}
