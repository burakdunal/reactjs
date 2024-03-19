import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-framework">NextJS bla bla</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}

export default NewsPage;
