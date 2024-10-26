import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-between min-h-screen font-inter w-full">
            {children}
            <div className="auth-asset">
                <div>
                    <Image
                        src={"/icons/auth-image.svg"}
                        alt="Auth image"
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        </main>
    );
}
