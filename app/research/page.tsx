export default function Research() {
    return(
        <div className="mt-15 ml-5">
            <span>Research Page</span>
            <div className="font-source-han p-8 space-y-4">
                <h2 className="text-2xl mb-6">字体字重测试</h2>

                <p className="font-light text-xl">Light (300) - 这是细体文字</p>
                <p className="font-normal text-xl">Normal (400) - 这是常规文字</p>
                <p className="font-medium text-xl">Medium (500) - 这是中等文字</p>
                <p className="font-semibold text-xl">Semibold (600) - 这是半粗体文字</p>
                <p className="font-bold text-xl">Bold (700) - 这是粗体文字</p>
                <p className="font-extrabold text-xl">Extrabold (800) - 这是超粗体文字</p>
                <p className="font-black text-xl">Black (900) - 这是最粗体文字</p>

                {/* 使用数字值测试 */}
                <div className="mt-8">
                    <h3 className="text-lg mb-4">数字值测试：</h3>
                    <p style={{ fontWeight: 300 }} className="font-source-han">数字 300</p>
                    <p style={{ fontWeight: 400 }} className="font-source-han">数字 400</p>
                    <p style={{ fontWeight: 600 }} className="font-source-han">数字 600</p>
                    <p style={{ fontWeight: 700 }} className="font-source-han">数字 700</p>
                    <p style={{ fontWeight: 900 }} className="font-source-han">数字 900</p>
                </div>
            </div>
        </div>
    );
}
