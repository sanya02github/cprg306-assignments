import Link from 'next/link'; // Import Link fromm Next.js

function HomePage() {
    return(
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-center my-6">Welcome to the Shopping List App</h1>
            <ul>
                {/* Add other week links similarly */}
                <li><Link href="/week-4"><a>Week 4 Assignment</a></Link></li>
            </ul>
        </div>
    );
}

export default HomePage;