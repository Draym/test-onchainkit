import Link from 'next/link';

export default function Page1() {
    return (
        <>
            <h1 className="text-2xl font-bold">Page 1</h1>
            <p className="text-lg">This is the content of Page 1.</p>
            <Link href="/page-2">Go to Page 2</Link>
        </>
    )
}