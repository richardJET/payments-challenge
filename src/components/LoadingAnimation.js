export default function LoadingAnimation() {
    return (
        <main className="bg-gray-200 min-h-screen h-full">
            <div className="container flex justify-center h-screen py-48 md:py-96">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-e-4 border-b-4 border-blue-500"></div>
            </div>
        </main>
    );
}