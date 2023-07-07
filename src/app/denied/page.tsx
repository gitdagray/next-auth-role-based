import Link from "next/link"

export default function Denied() {
    return (
        <section className="flex flex-col gap-12 items-center">
            <h1 className="text-5xl">Access Denied</h1>
            <p className="text-3xl max-w-2xl text-center">You are logged in, but you do not have the
                required access level to view this page.
            </p>
            <Link href="/" className="text-3xl underline">Return to Home Page</Link>
        </section>
    )
}