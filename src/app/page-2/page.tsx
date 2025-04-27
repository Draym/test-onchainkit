import Link from 'next/link';

export default function Page2() {
    return (
        <>
            <h1 className="text-2xl font-bold">Page 2</h1>
            <p className="text-lg">This is the content of Page 2.</p>
            <Link href="/page-1">Go to Page 1</Link>
        </>
    )
}