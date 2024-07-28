// SurahList.jsx
function SurahList({ surahs }: any) {
    return (
        <ul className="mt-4">
            {surahs.map((surah: any, i: number) => (
                <li key={surah.number} className="flex items-center py-2 justify-between">
                    <div className="flex items-center">
                        <div className="bg-gray-200 text-gray-700 rounded-lg size-10 flex justify-center items-center p-2 mr-4 transform">
                            {i + 1}
                        </div>
                        <div>
                            <h3 className="font-semibold">{surah.title}</h3>
                            <p className="text-gray-600">{surah.subtitle}</p>
                        </div>
                    </div>

                    <div className="w-[100px] h-[30px] rounded-md bg-gray-200"></div>
                </li>
            ))}
        </ul>
    );
}

export default SurahList;