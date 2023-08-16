
async function getData() {
  const res = await fetch('http://localhost:3000/apis/posts/getAllPost',{ cache: 'no-store' })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Page() {
  const data = await getData();

  return (
    <main className="bg-gray-100 p-6">
      {data.data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <p className="mt-2 text-gray-700">{item.content}</p>
        </div>
      ))}
    </main>
  );
}
